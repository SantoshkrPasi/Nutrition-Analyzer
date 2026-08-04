import {NavLink} from "react-router-dom";
import {FaLeaf} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };
    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

                <div className="flex items-center gap-2">
                    <FaLeaf className="text-emerald-500 text-2xl"/>
                    <h1 className="text-2xl font-bold text-slate-800">
                        NutriAI
                    </h1>
                </div>

                <div className="flex items-center gap-6">

                    <NavLink
                        to="/dashboard"
                        className="hover:text-emerald-500"
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/analyze"
                        className="hover:text-emerald-500"
                    >
                        Analyze Meal
                    </NavLink>

                    <NavLink
                        to="/history"
                        className="hover:text-emerald-500"
                    >
                        History
                    </NavLink>
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >

                        Logout

                    </button>

                </div>

            </div>
        </nav>
    );
}