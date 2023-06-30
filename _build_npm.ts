#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-env --allow-run
// Copyright 2018-2022 the oak authors. All rights reserved. MIT license.

/**
 * This is the build script for building npm package.
 *
 * @module
 */

import { build, emptyDir } from "https://deno.land/x/dnt@0.34.0/mod.ts";

async function start() {
  await emptyDir("./npm");

  await build({
    entryPoints: ["./mod.ts"],
    outDir: "./npm",
    shims: {},
    test: false,
    typeCheck: false,
    compilerOptions: {
      importHelpers: false,
      target: "ES2021",
      lib: ["esnext", "dom", "dom.iterable"],
    },
    package: {
      name: "pick-by-prefix",
      version: Deno.args[0],
      description:
        "PickByPrefix it's like Pick but instead of passing a union of keys, you pass a prefix string.",
      license: "MIT",
      keywords: ["typescript"],
      engines: {
        node: ">=8.0.0",
      },
      repository: {
        type: "git",
        url: "git+https://github.com/JLarky/pick-by-prefix.git",
      },
      bugs: {
        url: "https://github.com/JLarky/pick-by-prefix/issues",
      },
      dependencies: {},
      devDependencies: {},
    },
  });

  await Deno.copyFile("LICENSE", "npm/LICENSE");
  await Deno.copyFile("README.md", "npm/README.md");
}

start();
