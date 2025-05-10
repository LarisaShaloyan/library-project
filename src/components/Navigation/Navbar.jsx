import { NavLink, useNavigate} from "react-router-dom";
import React from "react";

function Navbar() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
            <div onClick={handleGoHome} className="text-2xl font-bold cursor-pointer  ">My Page</div>
            <div className="space-x-6 text-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                    }
                >
                    Գլխավոր
                </NavLink>
                <NavLink
                    to="/authors"
                    className={({ isActive }) =>
                        isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                    }
                >
                    հեղինակներ
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                    }
                >
                    մեր մասին
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400 transition"
                    }
                >
                    կապ մեզ հետ
                </NavLink>

            </div>
        </nav>
    );
}

export default Navbar;
