import { PickByPrefix, pickByPrefix } from "./mod.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const object = {
    "foo-bar": 1,
    "foo-baz": 2,
    "bar-foo": 3,
    "bar-baz": 4,
    "baz-foo": 5,
  } as const;
  type Foo = PickByPrefix<typeof object, "foo-">;
  type Bar = PickByPrefix<typeof object, "bar-">;
  type Baz = PickByPrefix<typeof object, "baz-">;
  type FooBar = PickByPrefix<typeof object, "foo-bar">;
  type FooBaz = PickByPrefix<typeof object, "foo-baz">;
  type BarFoo = PickByPrefix<typeof object, "bar-foo">;
  type BarBaz = PickByPrefix<typeof object, "bar-baz">;
  type BazFoo = PickByPrefix<typeof object, "baz-foo">;
  const foo = pickByPrefix(object, "foo-") satisfies Foo;
  const bar = pickByPrefix(object, "bar-") satisfies Bar;
  const baz = pickByPrefix(object, "baz-") satisfies Baz;
  const fooBar = pickByPrefix(object, "foo-bar") satisfies FooBar;
  const fooBaz = pickByPrefix(object, "foo-baz") satisfies FooBaz;
  const barFoo = pickByPrefix(object, "bar-foo") satisfies BarFoo;
  const barBaz = pickByPrefix(object, "bar-baz") satisfies BarBaz;
  const bazFoo = pickByPrefix(object, "baz-foo") satisfies BazFoo;
  console.log({ foo, bar, baz, fooBar, fooBaz, barFoo, barBaz, bazFoo });
}
