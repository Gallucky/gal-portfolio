type SectionProps = {
    className?: string;
    children: React.ReactNode;
};

/**
 * A helper component that is used in pages to create divided sections or parts of the page.
 * It is a wrapper around the section HTML element used to differentiate between sections of the page.
 * @see {@link SectionProps} for the accepted props.
 * @param props Mandatory children components and optional className for styling.
 * @returns The Section component.
 */
const Section = (props: SectionProps) => {
    const { className, children } = props;
    return (
        <section className={`w-full py-8 flex justify-center items-center ${className}`}>
            {children}
        </section>
    );
};

export default Section;
