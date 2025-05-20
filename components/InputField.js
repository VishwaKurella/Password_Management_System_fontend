export default function InputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
}) {
  const inputHints = {
    name: "Enter your name",
    email: "Enter a valid email address",
    password:
      "Password must be at least 8 characters, including a number and an uppercase letter",
    confirmPassword: "Re-enter your password to confirm",
  };
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="mb-1 text-sm text-purple-300 tracking-wider"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        title={inputHints[name]}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`px-4 py-2 rounded-full bg-gray-700 text-white border ${
          error ? "border-red-500" : "border-gray-600"
        } focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200`}
      />
      {error && (
        <p
          id={`${name}-error`}
          className="mt-1 text-xs text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
