import { build } from "https://deno.land/x/dnt@0.32.1/mod.ts";

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  test: true,
  importMap: "./deno.json",
  package: {
    name: "deno-lib",
    version: Deno.args[0],
    description: "Example of a deno lib that's also published to npm.",
    author: "David Sherret",
    license: "MIT",
    repository: "git+https://github.com/dsherret/deno_2.git",
  },
  shims: {
    deno: {
      test: "dev",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
