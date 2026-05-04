import { spawn } from "node:child_process";

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

  await run("generate page", ["scripts/generate-page.ts", ...args]);

  if (args.includes("--draft-only")) {
    console.log("Draft-only generation complete; skipped content validation and graph rebuild because no page was written.");
    return;
  }

  await run("validate content", ["scripts/validate-content.ts"]);
  await run("build graph", ["scripts/build-graph.ts"]);
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
      "  --force"
    ].join("\n")
  );
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
