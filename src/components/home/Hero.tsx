import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-workforce.jpg";

const Hero = () => {
  const phoneNumber = "9088955226";
  const whatsappMessage = encodeURIComponent("Hello, I am interested in your services.");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional workforce team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20"
          >
            Trusted Manpower & Cleaning Solutions in Kolkata
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary-foreground leading-tight hero-text-shadow mb-6"
          >
            Reliable Manpower & Cleaning Solutions{" "}
            <span className="text-accent">You Can Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 hero-text-shadow"
          >
            Professional manpower outsourcing and house cleaning services in Kolkata. 
            Serving hospitals, IT companies, hotels, corporate offices, and residential homes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold text-lg border border-primary-foreground/30 transition-all duration-300 hover:bg-primary-foreground/20 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary-foreground/70"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
