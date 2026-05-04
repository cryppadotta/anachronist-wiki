import { spawn } from "node:child_process";
import path from "node:path";
import { normalizeSlug } from "../src/lib/content-schema.ts";

const args = process.argv.slice(2);

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}

async function main(): Promise<void> {
  if (args.includes("--help") || args.includes("-h")) {
    printHelp();
    return;
  }

  const { pageArgs, imageOptions } = splitArgs(args);

  await run("generate page", ["scripts/generate-page.ts", ...pageArgs]);

  if (pageArgs.includes("--draft-only")) {
    console.log("Draft-only generation complete; skipped content validation and graph rebuild because no page was written.");
    return;
  }

  await run("validate content", ["scripts/validate-content.ts"]);
  await run("build graph", ["scripts/build-graph.ts"]);

  if (imageOptions.skipImages) {
    console.log("Skipped image generation because --skip-images was passed.");
    return;
  }

  const topic = optionValue(pageArgs, "topic");
  const slug = normalizeSlug(optionValue(pageArgs, "slug") ?? topic ?? "");
  if (!slug) {
    throw new Error("Could not derive a valid slug for image generation.");
  }

  const contentDir = optionValue(pageArgs, "out-dir") ?? path.join("content", "tech");
  const pageProvider = optionValue(pageArgs, "provider") ?? "openai";
  const imageProvider = imageOptions.provider ?? (pageProvider === "fixture" ? "fixture" : "openai");
  const imageArgs = [
    "scripts/generate-images.ts",
    "--slug",
    slug,
    "--content-dir",
    contentDir,
    "--provider",
    imageProvider,
    "--model",
    imageOptions.model ?? "gpt-image-2",
    "--size",
    imageOptions.size ?? "1536x1024",
    "--quality",
    imageOptions.quality ?? "medium"
  ];

  if (imageOptions.force) {
    imageArgs.push("--force");
  }

  await run("generate page images", imageArgs);
  await run("validate content", ["scripts/validate-content.ts"]);
}

function printHelp(): void {
  console.log(
    [
      'Usage: npm run new:page -- --topic "Rope" [generate-page options]',
      "",
      "Runs the maintainer page-generation pipeline, then validates content and rebuilds the generated graph.",
      "All options are passed through to scripts/generate-page.ts.",
      "",
      "Common options:",
      "  --provider openai|openrouter|fixture",
      "  --model MODEL",
      "  --slug kebab-case-slug",
      "  --node-type artifact|process|material|tool|measurement|knowledge|institution|test",
      "  --request-context TEXT",
      "  --source-pack-file path/to/sources.md",
      "  --request-issue URL",
      "  --draft-only",
      "  --force",
      "  --skip-images",
      "  --image-provider openai|fixture",
      "  --image-model MODEL",
      "  --image-size WIDTHxHEIGHT",
      "  --image-quality low|medium|high|auto",
      "  --image-force"
    ].join("\n")
  );
}

function splitArgs(input: string[]): {
  pageArgs: string[];
  imageOptions: {
    skipImages: boolean;
    provider?: string;
    model?: string;
    size?: string;
    quality?: string;
    force: boolean;
  };
} {
  const pageArgs: string[] = [];
  const imageOptions = { skipImages: false, force: false } as {
    skipImages: boolean;
    provider?: string;
    model?: string;
    size?: string;
    quality?: string;
    force: boolean;
  };

  for (let index = 0; index < input.length; index += 1) {
    const arg = input[index];
    if (arg === "--skip-images") {
      imageOptions.skipImages = true;
      continue;
    }
    if (arg === "--image-force") {
      imageOptions.force = true;
      continue;
    }
    if (arg === "--image-provider" || arg === "--image-model" || arg === "--image-size" || arg === "--image-quality") {
      const next = input[index + 1];
      if (!next || next.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`);
      }
      if (arg === "--image-provider") imageOptions.provider = next;
      if (arg === "--image-model") imageOptions.model = next;
      if (arg === "--image-size") imageOptions.size = next;
      if (arg === "--image-quality") imageOptions.quality = next;
      index += 1;
      continue;
    }
    pageArgs.push(arg);
  }

  return { pageArgs, imageOptions };
}

function optionValue(input: string[], key: string): string | undefined {
  const flag = `--${key}`;
  const index = input.indexOf(flag);
  if (index < 0) return undefined;
  const value = input[index + 1];
  return value && !value.startsWith("--") ? value : undefined;
}

async function run(label: string, commandArgs: string[]): Promise<void> {
  console.log(`\n==> ${label}`);
  const child = spawn("node", ["--experimental-strip-types", ...commandArgs], {
    stdio: "inherit"
  });

  await new Promise<void>((resolve, reject) => {
    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }
      const reason = signal ? `signal ${signal}` : `exit code ${code ?? "unknown"}`;
      reject(new Error(`${label} failed with ${reason}.`));
    });
  });
}
