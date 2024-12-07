/**
 * Remove read-only modifiers.
 *
 * @template T - Source object.
 */
export type Writeable<T> = { -readonly [Key in keyof T]: T[Key] };
