import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  const phoneNumber = "9088955226";
  const whatsappMessage = encodeURIComponent("Hello, I am interested in your services.");

  return (
    <div className="floating-buttons">
      <motion.a
        href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
      
      <motion.a
        href={`tel:${phoneNumber}`}
        className="floating-btn floating-btn-call"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
