// deno-lint-ignore-file ban-ts-comment
import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { PickByPrefix, pickByPrefix } from "./mod.ts";

Deno.test(function test() {
  const object = {
    "foo-bar": 1,
    "foo-baz": 2,
    "bar-foo": 3,
    "bar-baz": 4,
  };
  const x = pickByPrefix(object, "foo-");
  assertEquals(x["foo-bar"], 1);
  assertEquals(x["foo-baz"], 2);
  // @ts-expect-error
  assertEquals(x["bar-foo"], undefined);
  // @ts-expect-error
  assertEquals(x["bar-baz"], undefined);
});

Deno.test(function testSatisfies() {
  const object = {
    "foo-bar": 1,
    "foo-baz": 2,
    "bar-foo": 3,
    "bar-baz": 4,
  } as const;
  type Foo = PickByPrefix<typeof object, "foo-">;
  type Bar = PickByPrefix<typeof object, "bar-">;
  const foo = pickByPrefix(object, "foo-") satisfies Foo;
  const bar = pickByPrefix(object, "bar-") satisfies Bar;
  assertEquals(foo, { "foo-bar": 1, "foo-baz": 2 });
  assertEquals(bar, { "bar-foo": 3, "bar-baz": 4 });
});
