type FormInputProps = {
    /** Unique id, shared with the `<label>`'s `htmlFor` so clicking the label focuses the input. */
    id: string;
    /** Visible label text above the field. */
    label: string;
    /** Native input type - `"text"` for a name field, `"email"` for an email field with
     * built-in browser format validation. */
    type?: "text" | "email";
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    /** Disabled while the form is submitting, so the user can't edit fields mid-send. */
    disabled?: boolean;
    autoComplete?: string;
    /** Native HTML `pattern` - the whole value must match, no need for `^`/`$`. Primarily for
     * the email field: native `type="email"` alone is looser than it looks (it accepts
     * something like "a@a" with no real domain), so a `pattern` tightens what actually counts
     * as valid without abandoning the browser's built-in validation UI. */
    pattern?: string;
    /** Shown by the browser's native validation bubble when `pattern` fails to match -
     * without this, the browser falls back to displaying the raw regex, which means nothing
     * to a non-technical visitor. */
    title?: string;
};

/**
 * A single-line, labeled text/email input used by {@link ContactPage}'s form.
 *
 * Kept controlled (`value`/`onChange`) rather than uncontrolled so the page can clear all
 * fields on a successful submit and restore them after a failed one, per the contact form's
 * documented success/error behavior.
 *
 * @see {@link FormInputProps} for the accepted props.
 * @see {@link FormTextboxInput} for the multi-line counterpart used by the message field.
 * @returns The FormInput component.
 */
const FormInput = (props: FormInputProps) => {
    const {
        id,
        label,
        type = "text",
        placeholder,
        value,
        onChange,
        required,
        disabled,
        autoComplete,
        pattern,
        title,
    } = props;

    return (
        <div className="flex flex-col gap-1.5 text-start">
            <label htmlFor={id} className="text-sm font-bold text-color">
                {label}
                {required && <span className="text-danger ms-1">*</span>}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                required={required}
                disabled={disabled}
                autoComplete={autoComplete}
                pattern={pattern}
                title={title}
                className="w-full rounded-lg border border-border bg-bg px-4 py-2 text-color placeholder:text-color-muted transition-colors focus:outline-none focus:border-primary disabled:opacity-60 disabled:cursor-not-allowed"
            />
        </div>
    );
};

export default FormInput;
