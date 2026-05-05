# Graph Repair Skill: Forward Unlocks

Use this instruction after adding or changing technology pages, especially after expanding a prerequisite cluster.

## Goal

Repair the explicit graph metadata so prerequisite pages also expose their forward "moving forward" relationships through `unlocks`.

For every existing page `B` that appears in page `A` as a frontmatter prerequisite, page `B` should list page `A` in `unlocks` unless that unlock is already present.

## Rules

- Graph truth lives in frontmatter, not prose.
- `prerequisites` and `unlocks` both represent edges from prerequisite/source node to dependent/unlocked node.
- Add forward unlocks only when the target page already exists.
- Do not invent full pages for missing upstream nodes during graph repair. Leave intentional empty-page links as missing nodes.
- Preserve the prerequisite edge kind when creating the forward unlock so material, tooling, test, safety, institutional, and hard relationships stay visible.
- Use a short role beginning with `Enables <Dependent Title>:` followed by the prerequisite role.
- Do not add operational reproduction detail while editing safety-sensitive pages.

## Command

Run the reusable repair tool:

```bash
npm run repair:unlocks -- --write
```

Then verify:

```bash
npm run validate:content
npm run build:graph
```

If routes or rendering changed, also run:

```bash
npm run build
```
