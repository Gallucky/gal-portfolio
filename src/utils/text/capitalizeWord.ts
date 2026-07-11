/**
 * Capitalizes the first character of a single word/string, leaving the rest of it untouched
 * (it does not lowercase the remainder, so `"tESLA"` stays `"tESLA"` rather than becoming
 * `"Tesla"`). Only the first character is affected - this does not split on spaces, so passing
 * a multi-word string only capitalizes its very first character (e.g. `"hello world"` ->
 * `"Hello world"`), not the start of every word.
 *
 * Returns `""` for an empty or whitespace-only string. The `word === undefined` check only
 * matters for callers that bypass the `string` type (e.g. plain JS, or an untyped API
 * response) - within TypeScript, `word` is already guaranteed non-`undefined`.
 *
 * Note: because only `word.trim()` (not `word` itself) is checked against `""`, a string with
 * leading whitespace (e.g. `"  test"`) is not treated as empty but also isn't trimmed before
 * capitalizing - its first character is a space, so it's returned unchanged. Trim the input
 * before calling this if leading whitespace is possible and should be ignored.
 *
 * @param word The word to capitalize.
 * @returns The word with its first character capitalized, or `""` if `word` is empty/whitespace-only.
 *
 * @example
 * ```ts
 * capitalizeWord("react"); // "React"
 * capitalizeWord("");      // ""
 * capitalizeWord("  ");    // ""
 * ```
 */
export const capitalizeWord = (word: string) => {
    return word.trim() === "" || word === undefined ? "" : word[0].toUpperCase() + word.slice(1);
};
