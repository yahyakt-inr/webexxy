import "../styles/Footer.css";
import logo from "../assets/logo/webexxy-logo.png";
import {
    FiArrowUpRight,
    FiInstagram,
    FiLinkedin,
    FiFacebook,
} from "react-icons/fi";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <a href="#home" className="footer-logo">
                        <img
                            src={logo}
                            alt="Webexxy"
                        />
                    </a>

                    <p>
                        Building digital possibilities through technology,
                        creativity and innovation.
                    </p>

                    <div className="footer-socials">
                        <a href="#" aria-label="Instagram">
                            <FiInstagram />
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <FiLinkedin />
                        </a>

                        <a href="#" aria-label="Facebook">
                            <FiFacebook />
                        </a>
                    </div>

                </div>

                <div className="footer-column">
                    <h3>Explore</h3>

                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About Us</a>
                    <a href="#contact-form">Contact</a>
                </div>

                <div className="footer-column">
                    <h3>Services</h3>

                    <a href="#services">Web Development</a>
                    <a href="#services">Mobile Apps</a>
                    <a href="#services">Software Development</a>
                    <a href="#services">Digital Marketing</a>
                </div>

                <div className="footer-contact">

                    <h3>Let's Talk</h3>

                    <a href="mailto:hello@webexxy.com">
                        hello@webexxy.com
                    </a>

                    <a href="tel:+910000000000">
                        +91 00000 00000
                    </a>

                    <p>Kerala, India</p>

                    <a
                        href="#contact-form"
                        className="footer-project"
                    >
                        Start a Project
                        <FiArrowUpRight />
                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Webexxy. All Rights Reserved.
                </p>

                <p>
                    Building Digital Possibilities
                </p>

            </div>

        </footer>
    );
}

export default Footer;