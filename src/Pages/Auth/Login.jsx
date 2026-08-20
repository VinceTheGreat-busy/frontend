import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "../../Context/AuthProvider";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [seePass, setSeePass] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSeePass = () => {
        setSeePass((prev) => !prev);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            await login(email, password);

            navigate("/dashboard");
        } catch (e) {
            console.error(e);

            setError(
                e?.response?.data?.message ||
                e?.message ||
                "Invalid email or password."
            );
        } finally {
            setLoading(false);
        }
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

            <div className="w-full max-w-md">

                {/* Header */}
                <div className="text-center mb-8">

                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                        <LogIn
                            size={23}
                            className="text-blue-600 dark:text-blue-400"
                        />
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Welcome back
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Sign in to continue to your account.
                    </p>

                </div>

                {/* Login Card */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 sm:p-8">

                    <form
                        onSubmit={handleLogin}
                        className="space-y-6"
                    >

                        {/* Error */}
                        {error && (
                            <div
                                role="alert"
                                className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                            >
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Email */}
                        <div className="relative z-0">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                placeholder=" "
                                required
                                disabled={loading}
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
                                type={seePass ? "text" : "password"}
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                placeholder=" "
                                required
                                disabled={loading}
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
                                onClick={handleSeePass}
                                disabled={loading}
                                className="absolute right-0 top-2.5 p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
                                aria-label={
                                    seePass
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {seePass ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-3 transition-all duration-200"
                        >
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </button>

                    </form>

                    {/* Register */}
                    <div className="relative flex items-center my-6">
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-800" />

                        <span className="mx-4 text-xs text-gray-400">
                            OR
                        </span>

                        <div className="flex-grow border-t border-gray-200 dark:border-gray-800" />
                    </div>

                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Create an account
                        </Link>
                    </p>

                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
                    Securely sign in to access your account.
                </p>

            </div>
        </div>
    );
}