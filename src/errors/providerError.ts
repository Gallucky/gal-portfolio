/**
 * Custom error type for context provider misuse.
 *
 * Thrown when a custom React hook that relies on a context
 * (for example, `useLanguage`) is called outside of its corresponding provider.
 *
 * @example
 * ```tsx
 * // Inside a hook file
 * if (!context) {
 *   throw new ProviderError("LanguageProvider", "useLanguage must be used within a LanguageProvider");
 * }
 * ```
 *
 * @extends Error
 */
class ProviderError extends Error {
    /**
     * @field The name of the provider that caused the error.
     */
    provider: string;

    /**
     * Creates a new ProviderError instance.
     *
     * @param {string} providerName - The name of the provider (e.g., "LanguageProvider").
     * @param {string} message - The specific error message.
     */
    constructor(providerName: string, message: string) {
        super(message);
        this.name = "ProviderError";
        this.provider = providerName;
        this.message = `[Provider Error - ${providerName}]: ${message}`;
    }
}

export default ProviderError;
