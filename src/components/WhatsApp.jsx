import "../styles/WhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  return (
    <div className="whatsapp-wrapper">

      <a
        href="https://wa.me/918086367029"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <span className="whatsapp-text">
        Chat with us
      </span>

    </div>
  );
}

export default WhatsApp;