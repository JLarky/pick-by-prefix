export type PickByPrefix<T, TPrefix extends string> = {
  [TKey in keyof T as TKey extends `${TPrefix}${string}`
    ? TKey
    : never]: T[TKey];
};

/**
 * @see https://github.com/ianstormtaylor/superstruct/blob/7973400cd04d8ad92bbdc2b6f35acbfb3c934079/src/utils.ts#L323-L325
 * @see https://twitter.com/JLarky/status/1654708488566898688
 */
export type Simplify<TType> = TType extends any[] | Date
  ? TType
  : {
      [K in keyof TType]: TType[K];
    };

export function pickByPrefix<T, TPrefix extends string>(
  object: T,
  prefix: TPrefix
) {
  const result = {} as Simplify<PickByPrefix<T, TPrefix>>;
  for (const key in object) {
    if (key.startsWith(prefix)) {
      // @ts-expect-error
      result[key] = object[key];
    }
  }
  return result;
}
