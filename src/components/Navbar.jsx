import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";


const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                {/* logo */}
                <NavLink className="navbar-brand" to="/">
                    LOGO
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active fw-semibold" : ""}`
                                        }
                                        to="/home"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active fw-semibold" : ""}`
                                        }
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active fw-semibold" : ""}`
                                        }
                                        to="/products"
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active fw-semibold" : ""}`
                                        }
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <button  type="button" className="btn btn-outline-light" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active fw-semibold" : ""}`
                                        }
                                        to="/"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink 
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? "active fw-semibold " : ""}`
                                        }
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
