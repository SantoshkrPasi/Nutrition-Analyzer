import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {

        if (localStorage.getItem("token")) {

            navigate("/dashboard");

        }

    }, [navigate]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await login({

                email,
                password

            });
            const token = response.data.data.token;

            localStorage.setItem("token", token);
            navigate("/dashboard");
            console.log(response.data);

        } catch (error) {

            console.error(error);

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

                        NutriAI

                    </h2>

                    <p className="text-slate-500 mt-2">

                        Your AI Nutrition Companion

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

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
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit">

                        Login

                    </Button>

                </form>

                <p className="text-center mt-6 text-sm">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-emerald-600 font-semibold ml-2 hover:underline"
                    >
                        Register
                    </Link>

                </p>

            </Card>

        </div>

    );

}