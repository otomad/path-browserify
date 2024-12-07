export {};

declare global {
	/**
	 * Remove read-only modifiers.
	 *
	 * @template T - Source object.
	 */
	type Writeable<T> = { -readonly [Key in keyof T]: T[Key] };
}
