const FIELD_CLASSNAME =
  "mt-1 w-full rounded-xl border bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-terracotta/50";

type FieldProps = {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
};

export function TextField({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: FieldProps & { type?: "text" | "tel" | "email" }) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink/60">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${FIELD_CLASSNAME} ${error ? "border-terracotta" : "border-mustard/25"}`}
      />
      {error && <p className="mt-1 text-xs text-terracotta-dark">{error}</p>}
    </div>
  );
}

export function TextAreaField({
  label,
  required,
  value,
  onChange,
  placeholder,
  rows = 3,
}: FieldProps & { rows?: number }) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink/60">
        {label}
        {required ? " *" : ""}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`${FIELD_CLASSNAME} resize-none border-mustard/25`}
      />
    </div>
  );
}
