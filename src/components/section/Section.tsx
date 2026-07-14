type SectionProps = {
    className?: string;
    children: React.ReactNode;
    /** Optional id, e.g. so nav links / in-page anchors can target this section directly. */
    id?: string;
};

/**
 * A helper component that is used in pages to create divided sections or parts of the page.
 * It is a wrapper around the section HTML element used to differentiate between sections of the page.
 * @see {@link SectionProps} for the accepted props.
 * @param props Mandatory children components and optional className for styling.
 * @returns The Section component.
 */
const Section = (props: SectionProps) => {
    const { className, children, id } = props;
    return (
        <section id={id} className={`w-full py-12 flex justify-center items-center ${className}`}>
            {children}
        </section>
    );
};

export default Section;
