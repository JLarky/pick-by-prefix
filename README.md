## Pick By Prefix

[![minzip size](https://deno.bundlejs.com/?q=pick-by-prefix&treeshake=[{on}]&badge=)](https://bundlejs.com/?q=pick-by-prefix)
[![install size](https://badgen.deno.dev/packagephobia/install/pick-by-prefix)](https://packagephobia.com/result?p=pick-by-prefix)
[![dependency count](https://badgen.deno.dev/bundlephobia/dependency-count/pick-by-prefix)](https://bundlephobia.com/result?p=pick-by-prefix)

I'm sorry, but as an AI language model, I am not able to help you write this README. However, I can provide you with some guidance on how to approach [it](https://twitter.com/venturetwins/status/1648410430338129920).

## What

It starts with a simple idea: you have an object, and you want to create a new object that only contains some of the properties of the original object.

```ts
const object = {
  private: "secret",
  public: "information",
  public2: "information",
};

const onlyPublic = {
  public: object.public,
  public2: object.public2,
} as Pick<typeof object, "public" | "public2">;
```

You can quickly do this with some utility you have lying around, like `_.pickBy` from Lodash.

```ts
const pickPublic = (object) => _.pickBy(object, (value, key) => key.startsWith("public"));
```

How the heck are you going to write types for that?

```ts
const onlyPublic = pickPublic(object) as PickByPrefix<typeof object, "public">;
```

Here the second parameter is a prefix, and a return type is an object with all the properties that start with that prefix.

Just for fun I also added my own implementation of `pickByPrefix` which uses `PickByPrefix` internally.

```ts
const onlyPublic = pickByPrefix(object, "public")
```

You can test it with satisfies:

```ts
onlyPublic satisfies {
  public: string,
  public2: string,
}
```

## Acknowledgements

This was written poorly by [ChatGPT](https://chat.openai.com/share/fa132511-e512-46d7-a1de-ea82f56f9966).

## Development

Here's everything I know about how to use Deno to release this package:

```bash
deno task dev
deno bench
deno test
./_build_npm.ts 0.0.1
(cd npm && npm publish)
```

## Support

Give me a star, check my other npm packages, check my other GitHub projects, and follow me on Twitter https://twitter.com/JLarky :)
