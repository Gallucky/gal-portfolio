import type { ReactNode } from "react";

/** Matches a backtick-delimited inline code span (e.g. `` `Board.js` ``), capturing the code
 * text without the backticks. Non-greedy so `` `a` and `b` `` is read as two spans rather than
 * one spanning both. */
const INLINE_CODE_PATTERN = /`([^`]+)`/g;

/**
 * Splits `text` on any Markdown-style backtick-delimited inline code spans (e.g.
 * `` `DraggableElements` ``) and renders each one as a styled `<code>` element, leaving the
 * rest of the text as plain string chunks.
 *
 * Project content (`overview`/`architecture`/`challenges`/`lessons` in
 * {@link ProjectContent}) is authored with Markdown-style backticks around identifiers - class
 * names, file names, keywords - the same way a README would be, but {@link ProjectDetails}
 * renders that content as plain text/JSX rather than through a Markdown parser, so those
 * backticks would otherwise show up literally instead of being read as code. Mirrors
 * {@link renderWithGlossary}'s split-and-map shape so both project content and About's bio
 * copy handle their own inline substitution the same way.
 *
 * @param text A single piece of project content (a sentence/paragraph, or one
 * challenge/lesson list item), already resolved to the current language.
 * @returns An array of plain string chunks and `<code>` elements, in reading order.
 */
export const renderWithInlineCode = (text: string): ReactNode[] => {
    const parts = text.split(INLINE_CODE_PATTERN);

    // `String.split` with a capturing group alternates [plain, captured, plain, captured, ...] -
    // odd indices are always the code-span contents, even indices are always the plain text
    // around them.
    return parts.map((part, index) =>
        index % 2 === 1 ? (
            <code
                key={index}
                className="rounded-sm bg-color-muted/15 px-1.5 py-0.5 font-mono text-[0.9em] text-primary">
                {part}
            </code>
        ) : (
            part
        ),
    );
};
