import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                {/* Logo */}
                <Link
                    className="navbar-brand fw-bold fs-3 text-warning"
                    to="/"
                >
                    NG
                </Link>
                {/* Mobile Menu Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div
                    className="collapse navbar-collapse"
                    id="navMenu"
                >
                    {/* Left Links */}
                    <ul className="navbar-nav me-auto ms-4">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/#products"
                            >
                                Products
                            </Link>
                        </li>
                    </ul>
                    {/* Right Buttons */}
                    <div className="d-flex gap-2">

                        {/* Cart Button */}
                        <Link
                            to="/cart"
                            className="btn btn-outline-warning"
                        >
                            Cart
                        </Link>
                        {/* If User Logged In */}
                        {user ? (
                            <button
                                className="btn btn-warning"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                {/* Login */}
                                <Link
                                    to="/login"
                                    className="btn btn-outline-light"
                                >
                                    Login
                                </Link>
                                {/* Register */}
                                <Link
                                    to="/register"
                                    className="btn btn-warning"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;