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

        // Name Validation
        if (!name.trim()) {

            toast.error("Full name is required.");

            return;

        }

        if (name.trim().length < 3) {

            toast.error("Full name must be at least 3 characters.");

            return;

        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

            toast.error("Please enter a valid email address.");

            return;

        }

        // Password Validation
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {

            toast.error(
                "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
            );

            return;

        }

        // Confirm Password Validation
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
                password

            });

            toast.success("Registration successful!");

            navigate("/login");

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Registration failed."

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <Card className="w-full max-w-md">

                <div className="text-center mb-8">

                    <h1 className="text-4xl">

                        🥗

                    </h1>

                    <h2 className="text-3xl font-bold mt-3">

                        Create Account

                    </h2>

                    <p className="text-slate-500 mt-2">

                        Join NutriAI and start your healthy journey.

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
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
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {
                        confirmPassword && (

                            password === confirmPassword ? (

                                <p className="text-green-600 text-sm">

                                    ✓ Passwords match

                                </p>

                            ) : (

                                <p className="text-red-500 text-sm">

                                    Passwords do not match

                                </p>

                            )

                        )
                    }

                    <div className="bg-slate-50 border rounded-lg p-4">

                        <p className="font-semibold text-sm mb-2">

                            Password Requirements

                        </p>

                        <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">

                            <li>Minimum 8 characters</li>

                            <li>One uppercase letter (A-Z)</li>

                            <li>One lowercase letter (a-z)</li>

                            <li>One number (0-9)</li>

                            <li>One special character (@$!%*?&)</li>

                        </ul>

                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                    >

                        {loading ? "Creating Account..." : "Register"}

                    </Button>

                </form>

                <p className="text-center mt-6 text-sm">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-emerald-600 font-semibold ml-2 hover:underline"
                    >

                        Login

                    </Link>

                </p>

            </Card>

        </div>

    );

}