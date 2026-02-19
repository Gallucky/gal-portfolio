type SectionProps = {
    className?: string;
    children: React.ReactNode;
};

const Section = (props: SectionProps) => {
    const { className, children } = props;
    return (
        <section className={`w-full py-8 flex justify-center items-center ${className}`}>
            {children}
        </section>
    );
};

export default Section;
