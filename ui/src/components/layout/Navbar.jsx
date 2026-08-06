import { NavLink, useNavigate } from "react-router-dom";
import {
    FaChartPie,
    FaUtensils,
    FaHistory,
    FaSignOutAlt
} from "react-icons/fa";

export default function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    const linkStyle = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-xl transition ${
            isActive
                ? "bg-emerald-500 text-white"
                : "text-slate-700 hover:bg-slate-100"
        }`;

    return (

        <nav className="bg-white shadow-sm border-b">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <div>

                    <h1 className="text-3xl font-bold text-emerald-600">

                        🥗 NutriAI

                    </h1>

                </div>

                <div className="flex items-center gap-3">

                    <NavLink
                        to="/dashboard"
                        className={linkStyle}
                    >
                        <FaChartPie />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/analyze"
                        className={linkStyle}
                    >
                        <FaUtensils />
                        Analyze
                    </NavLink>

                    <NavLink
                        to="/history"
                        className={linkStyle}
                    >
                        <FaHistory />
                        History
                    </NavLink>

                    <button
                        onClick={logout}
                        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

}