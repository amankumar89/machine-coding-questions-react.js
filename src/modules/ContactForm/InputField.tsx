type InputFieldProps = {
    label: string
    name: string
    type?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    error?: string
}

export const InputField = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    error
}: InputFieldProps) => {
    return (
        <div className="flex flex-col gap-2 my-4 w-full">

            {/* Label */}
            <label
                htmlFor={name}
                className="text-sm font-medium text-gray-700"
            >
                {label}:
            </label>

            {/* Input */}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`px-4 py-2 rounded-lg border text-sm outline-none transition-all duration-200
        ${error
                        ? "border-red-500 focus:ring-2 focus:ring-red-200"
                        : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    }`}
            />

            {/* Error */}
            {error && (
                <p className="text-xs text-red-500">{error}</p>
            )}

        </div>
    )
}