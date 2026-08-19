import "../styles/Navbar.css";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/logo/webexxy-logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* Announcement Bar */}
            <div className="announcement-bar">
                <p>
                    Have a project in mind?
                    <a href="#contact-form"> Let's talk →</a>
                </p>
            </div>

            <header className="navbar">
                <div className="navbar-container">

                    {/* Logo */}
                    <a href="#home" className="navbar-logo" onClick={closeMenu}>
                        <img
                            src={logo}
                            alt="Webexxy"
                            className="webexxy-logo"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

                        <a href="#home" onClick={closeMenu}>
                            Home
                        </a>

                        <a href="#services" onClick={closeMenu}>
                            Services
                        </a>

                        <a href="#about" onClick={closeMenu}>
                            About
                        </a>

                        <a href="#contact-form" onClick={closeMenu}>
                            Contact
                        </a>

                        <a
                            href="#contact-form"
                            className="mobile-project-btn"
                            onClick={closeMenu}
                        >
                            Start a Project
                            <FiArrowUpRight />
                        </a>

                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href="#contact-form"
                        className="navbar-cta"
                    >
                        Start a Project
                        <FiArrowUpRight />
                    </a>

                    {/* Mobile Button */}
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                </div>
            </header>
        </>
    );
}

export default Navbar;