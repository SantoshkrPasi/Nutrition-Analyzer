import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { register } from "../../services/authService";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error("Full name is required.");
            return;
        }

        if (name.trim().length < 3) {
            toast.error("Full name must be at least 3 characters.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
            );
            return;
        }

        if (!confirmPassword.trim()) {
            toast.error("Please confirm your password.");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            await register({
                name,
                email,
                password,
            });

            toast.success("Registration successful!");
            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Registration failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="
                min-h-screen
                flex
                items-center
                justify-center
                p-6
                bg-gradient-to-br
                from-emerald-50
                via-white
                to-cyan-50
            "
        >
            <Card
                className="
                    w-full
                    max-w-6xl
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/50
                    bg-white/90
                    backdrop-blur-xl
                    shadow-[0_30px_80px_rgba(15,23,42,0.12)]
                "
            >
                <div className="grid lg:grid-cols-2">
                    {/* LEFT PANEL */}
                    <div
                        className="
                            hidden
                            lg:flex
                            flex-col
                            justify-center
                            bg-gradient-to-br
                            from-emerald-500
                            to-green-600
                            p-12
                            text-white
                        "
                    >
                        <div className="mb-10">
                            <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center text-5xl shadow-lg">
                                🥗
                            </div>
                        </div>

                        <h1 className="text-5xl font-extrabold">
                            Welcome to NutriAI
                        </h1>

                        <p className="mt-5 text-lg text-emerald-100 leading-8">
                            Join thousands of users who are tracking their
                            nutrition with the power of AI.
                        </p>

                        <div className="mt-12 rounded-2xl bg-white/10 p-6 backdrop-blur">
                            <h3 className="font-bold text-xl mb-5">
                                Password Requirements
                            </h3>

                            <ul className="space-y-3 text-emerald-50">
                                <li>✓ Minimum 8 characters</li>
                                <li>✓ One uppercase letter</li>
                                <li>✓ One lowercase letter</li>
                                <li>✓ One number</li>
                                <li>✓ One special character</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="p-8 md:p-12">
                        <div className="lg:hidden flex justify-center mb-6">
                            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-4xl shadow-lg">
                                🥗
                            </div>
                        </div>

                        <h2 className="text-4xl font-extrabold text-slate-900 text-center lg:text-left">
                            Create Account
                        </h2>

                        <p className="mt-3 text-slate-500 text-center lg:text-left">
                            Start your healthy journey with NutriAI.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            <Input
                                label="Full Name"
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <Input
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                type="password"
                                placeholder="Create a strong password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Input
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />

                            {confirmPassword && (
                                <div
                                    className={`text-sm font-semibold ${
                                        password === confirmPassword
                                            ? "text-emerald-600"
                                            : "text-red-500"
                                    }`}
                                >
                                    {password === confirmPassword
                                        ? "✓ Passwords match"
                                        : "✗ Passwords do not match"}
                                </div>
                            )}

                            {/* Mobile Password Requirements */}
                            <div className="lg:hidden rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                                <h4 className="font-semibold text-emerald-700 mb-3">
                                    Password Requirements
                                </h4>

                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>✓ Minimum 8 characters</li>
                                    <li>✓ One uppercase letter</li>
                                    <li>✓ One lowercase letter</li>
                                    <li>✓ One number</li>
                                    <li>✓ One special character</li>
                                </ul>
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                            >
                                {loading
                                    ? "Creating Account..."
                                    : "Create Account"}
                            </Button>
                        </form>

                        <div className="my-8 border-t border-slate-200"></div>

                        <p className="text-center text-slate-500">
                            Already have an account?
                            <Link
                                to="/login"
                                className="ml-2 font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}