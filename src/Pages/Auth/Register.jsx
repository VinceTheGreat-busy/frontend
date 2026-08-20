import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Check, X } from "lucide-react";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [form, setForm] = useState({
        email: "",
        password: "",
        password_confirmation: "",
        first_name: "",
        last_name: "",
        phone: "",
        username: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const passwordsMatch =
        form.password_confirmation.length > 0 &&
        form.password === form.password_confirmation;

    const passwordRequirements = {
        length: form.password.length >= 8,
        uppercase: /[A-Z]/.test(form.password),
        number: /[0-9]/.test(form.password),
    };

    const passwordIsValid =
        passwordRequirements.length &&
        passwordRequirements.uppercase &&
        passwordRequirements.number;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
    };

    const labelClass = `
        absolute
        top-3
        -z-10
        origin-[0]
        text-sm
        text-gray-500
        transform
        duration-200
        -translate-y-6
        scale-75
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:scale-100
        peer-focus:-translate-y-6
        peer-focus:scale-75
        peer-focus:text-blue-600
        dark:text-gray-400
        peer-focus:dark:text-blue-500
    `;

    const inputClass = `
        peer
        block
        w-full
        px-0
        pt-4
        pb-2
        text-sm
        text-gray-900
        bg-transparent
        border-0
        border-b-2
        border-gray-300
        appearance-none
        focus:outline-none
        focus:ring-0
        focus:border-blue-600
        dark:text-white
        dark:border-gray-700
        dark:focus:border-blue-500
        transition-colors
        duration-200
    `;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-lg">

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            +
                        </span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Fill in your details to get started.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 sm:p-8">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Account Information */}
                        <div>
                            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                                Account information
                            </h2>

                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Create your login credentials.
                            </p>
                        </div>

                        {/* Email */}
                        <div className="relative z-0">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                autoComplete="email"
                                placeholder=" "
                                required
                                className={inputClass}
                            />

                            <label
                                htmlFor="email"
                                className={labelClass}
                            >
                                Email address
                            </label>
                        </div>

                        {/* Password */}
                        <div className="relative z-0">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={form.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                                placeholder=" "
                                required
                                className={`${inputClass} pr-10`}
                            />

                            <label
                                htmlFor="password"
                                className={labelClass}
                            >
                                Password
                            </label>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-0 top-2.5 p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors"
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>

                            {/* Password Requirements */}
                            {form.password.length > 0 && (
                                <div className="mt-3 space-y-1.5">
                                    <PasswordRequirement
                                        valid={passwordRequirements.length}
                                        text="At least 8 characters"
                                    />

                                    <PasswordRequirement
                                        valid={passwordRequirements.uppercase}
                                        text="At least one uppercase letter"
                                    />

                                    <PasswordRequirement
                                        valid={passwordRequirements.number}
                                        text="At least one number"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="relative z-0">
                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                name="password_confirmation"
                                id="password_confirmation"
                                value={form.password_confirmation}
                                onChange={handleChange}
                                autoComplete="new-password"
                                placeholder=" "
                                required
                                className={`${inputClass} pr-10 ${form.password_confirmation.length > 0
                                        ? passwordsMatch
                                            ? "border-green-500 focus:border-green-500"
                                            : "border-red-500 focus:border-red-500"
                                        : ""
                                    }`}
                            />

                            <label
                                htmlFor="password_confirmation"
                                className={labelClass}
                            >
                                Confirm password
                            </label>

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                                className="absolute right-0 top-2.5 p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors"
                                aria-label={
                                    showConfirmPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showConfirmPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>

                            {form.password_confirmation.length > 0 && (
                                <div
                                    className={`flex items-center gap-1.5 mt-2 text-xs font-medium ${passwordsMatch
                                            ? "text-green-600"
                                            : "text-red-600"
                                        }`}
                                >
                                    {passwordsMatch ? (
                                        <>
                                            <Check size={14} />
                                            Passwords match
                                        </>
                                    ) : (
                                        <>
                                            <X size={14} />
                                            Passwords do not match
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Personal Information */}
                        <div className="pt-2">
                            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                                Personal information
                            </h2>

                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                Tell us a little about yourself.
                            </p>
                        </div>

                        {/* First + Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div className="relative z-0">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    value={form.first_name}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    placeholder=" "
                                    required
                                    className={inputClass}
                                />

                                <label
                                    htmlFor="first_name"
                                    className={labelClass}
                                >
                                    First name
                                </label>
                            </div>

                            <div className="relative z-0">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    value={form.last_name}
                                    onChange={handleChange}
                                    autoComplete="family-name"
                                    placeholder=" "
                                    required
                                    className={inputClass}
                                />

                                <label
                                    htmlFor="last_name"
                                    className={labelClass}
                                >
                                    Last name
                                </label>
                            </div>

                        </div>

                        {/* Phone + Username */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div className="relative z-0">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    autoComplete="tel"
                                    placeholder=" "
                                    pattern="09[0-9]{9}"
                                    maxLength={11}
                                    required
                                    className={inputClass}
                                />

                                <label
                                    htmlFor="phone"
                                    className={labelClass}
                                >
                                    Phone number
                                </label>

                                <p className="mt-1.5 text-xs text-gray-400">
                                    11-digit mobile number
                                </p>
                            </div>

                            <div className="relative z-0">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    autoComplete="username"
                                    placeholder=" "
                                    required
                                    className={inputClass}
                                />

                                <label
                                    htmlFor="username"
                                    className={labelClass}
                                >
                                    Username
                                </label>
                            </div>

                        </div>

                        {/* Terms */}
                        <div className="rounded-lg bg-gray-50 dark:bg-gray-800/50 p-3">
                            <div className="flex items-start gap-3">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    required
                                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                                />

                                <label
                                    htmlFor="terms"
                                    className="text-xs leading-5 text-gray-500 dark:text-gray-400"
                                >
                                    I agree to the{" "}
                                    <Link
                                        to="/terms"
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Terms and Conditions
                                    </Link>{" "}
                                    and understand that my information will
                                    be used to create my account.
                                </label>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={!passwordIsValid || !passwordsMatch}
                            className="w-full flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed dark:disabled:bg-gray-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-3 transition-all duration-200"
                        >
                            Create account
                        </button>

                    </form>

                    {/* Login */}
                    <div className="relative flex items-center my-6">
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-800" />

                        <span className="mx-4 text-xs text-gray-400">
                            OR
                        </span>

                        <div className="flex-grow border-t border-gray-200 dark:border-gray-800" />
                    </div>

                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Sign in
                        </Link>
                    </p>

                </div>

                <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
                    By creating an account, you agree to our terms and
                    conditions.
                </p>

            </div>
        </div>
    );
}

function PasswordRequirement({ valid, text }) {
    return (
        <div
            className={`flex items-center gap-2 text-xs ${valid
                    ? "text-green-600"
                    : "text-gray-400 dark:text-gray-500"
                }`}
        >
            {valid ? (
                <Check size={13} />
            ) : (
                <X size={13} />
            )}

            <span>{text}</span>
        </div>
    );
}