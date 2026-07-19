import GlossaryTerm from "@components/section/About/GlossaryTerm";
import type { GlossaryEntry } from "@lang/section/About/glossary";
import type { ReactNode } from "react";

/** Escapes regex-special characters so a glossary label can be dropped straight into a
 * `RegExp` as a literal string to match (labels can contain characters like `-`). */
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Shared "only one popup open at a time" coordination, lifted up to the caller (typically
 * {@link AboutSection}) exactly like {@link LanguagesSection} does for `ProgrammingLanguage`. */
export type GlossaryActiveSlot = {
    activeId: string | null;
    onActivate: (id: string) => void;
    onDeactivate: (id: string) => void;
};

/**
 * Splits `text` on any of the given glossary entries' labels and renders each match as a
 * clickable {@link GlossaryTerm} popup (short explanation + link to the official page),
 * leaving the rest of the text untouched.
 *
 * Used by {@link AboutSection} to turn plain-text mentions of "Star-Tech", "Magshimim", and
 * "HackerU" inside the bio paragraphs into interactive terms, without having to hand-author
 * JSX for every paragraph that happens to mention one of them.
 *
 * @param text A single paragraph of bio copy, already resolved to the current language.
 * @param entries The glossary entries to look for (also already resolved to the current
 * language, so `entry.label` matches what's actually written in `text`).
 * @param paragraphIndex Which paragraph `text` came from - combined with the match position
 * to build a globally unique id per rendered term, so two terms in different paragraphs
 * (or two matches of the same term) never collide in the shared active-slot state.
 * @param slot The shared active-slot state/callbacks - only one {@link GlossaryTerm} across
 * the whole page may be "shown" at a time, so a click-pinned popup can't end up with a
 * second popup rendering stacked underneath it.
 * @returns An array of plain string chunks and {@link GlossaryTerm} elements, in reading order.
 */
export const renderWithGlossary = (
    text: string,
    entries: GlossaryEntry[],
    paragraphIndex: number,
    slot: GlossaryActiveSlot,
): ReactNode[] => {
    if (entries.length === 0) return [text];

    const pattern = new RegExp(`(${entries.map((entry) => escapeRegExp(entry.label)).join("|")})`, "g");
    const parts = text.split(pattern);

    return parts.map((part, index) => {
        const entry = entries.find((candidate) => candidate.label === part);
        if (!entry) return part;

        const id = `${paragraphIndex}-${entry.label}-${index}`;
        return (
            <GlossaryTerm
                key={id}
                entry={entry}
                isActive={slot.activeId === id}
                onActivate={() => slot.onActivate(id)}
                onDeactivate={() => slot.onDeactivate(id)}
            />
        );
    });
};
