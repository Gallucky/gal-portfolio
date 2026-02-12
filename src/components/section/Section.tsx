type SectionProps = {
    className?: string;
    children: React.ReactNode;
};

const Section = (props: SectionProps) => {
    const { className, children } = props;
    return (
        <section
            className={`w-dvw h-[25dvh] mt-[5dvh] flex justify-center items-center ${className}`}>
            {children}
        </section>
    );
};

export default Section;
