import { pickByPrefix, PickByPrefix } from "./mod.ts";

Deno.bench(function pickOnWindow() {
  const x = pickByPrefix(window, "on");
  x["onload"];
});

Deno.bench(function pickOnSmallObject() {
  const object = {
    "foo-bar": 1,
    "foo-baz": 2,
    "bar-foo": 3,
    "bar-baz": 4,
  };
  const x = pickByPrefix(object, "foo-");
  x["foo-bar"];
});

Deno.bench(function pickManually() {
  const object = {
    "foo-bar": 1,
    "foo-baz": 2,
    "bar-foo": 3,
    "bar-baz": 4,
  };
  const x = pickByFoo(object);
  x["foo-bar"];
});

function pickByFoo<T extends Record<string, unknown>>(object: T) {
  return {
    "foo-bar": object["foo-bar"],
    "foo-baz": object["foo-baz"],
  } as any as PickByPrefix<T, "foo-">;
}
