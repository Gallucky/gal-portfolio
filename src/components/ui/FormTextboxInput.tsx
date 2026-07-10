type FormTextboxInputProps = {
    /** Unique id, shared with the `<label>`'s `htmlFor` so clicking the label focuses the field. */
    id: string;
    /** Visible label text above the field. */
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    /** Disabled while the form is submitting, so the user can't edit fields mid-send. */
    disabled?: boolean;
    rows?: number;
};

/**
 * A multi-line, labeled textarea input used by {@link ContactPage}'s form for the message
 * field. Renders an actual `<textarea>` (the previous version of this page used a single-line
 * `<input>` for the message field, which didn't let longer messages wrap/scroll).
 *
 * Kept controlled (`value`/`onChange`), matching {@link FormInput}, so the page can clear
 * or restore the field's content around a submit attempt.
 *
 * @see {@link FormTextboxInputProps} for the accepted props.
 * @see {@link FormInput} for the single-line counterpart used by the name/email fields.
 * @returns The FormTextboxInput component.
 */
const FormTextboxInput = (props: FormTextboxInputProps) => {
    const { id, label, placeholder, value, onChange, required, disabled, rows = 5 } = props;

    return (
        <div className="flex flex-col gap-1.5 text-start">
            <label htmlFor={id} className="text-sm font-bold text-color">
                {label}
                {required && <span className="text-danger ms-1">*</span>}
            </label>
            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                required={required}
                disabled={disabled}
                rows={rows}
                className="w-full resize-none rounded-lg border border-border bg-bg px-4 py-2 text-color placeholder:text-color-muted transition-colors focus:outline-none focus:border-primary disabled:opacity-60 disabled:cursor-not-allowed"
            />
        </div>
    );
};

export default FormTextboxInput;
