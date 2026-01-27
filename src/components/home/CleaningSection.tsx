import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import houseCleaningImage from "@/assets/house-cleaning.jpg";

const CleaningSection = () => {
  const phoneNumber = "9088955226";
  const whatsappMessage = encodeURIComponent("Hello, I want to book a cleaning service.");

  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={houseCleaningImage}
                alt="Professional house cleaning service"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                <span className="font-semibold">Spotless Guarantee</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              House Cleaning Services
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Need Your Home to{" "}
              <span className="gradient-text">Sparkle</span> Without the Hassle?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Inda Management Service provides trusted house cleaning services in Garfa, 
              designed to make your home fresh, clean, and organized. Our skilled team handles 
              dusting, mopping, sanitizing, and deep cleaning with precision using safe and 
              effective cleaning solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We specialize in regular cleaning plans, one-time deep cleans, and pre/post-event 
              cleaning to suit your schedule and budget. With punctual service and attention to 
              detail, we ensure your home is spotless and inviting every time.
            </p>

            <p className="text-foreground font-medium mb-8">
              Enjoy a cleaner, healthier living space with professionals you can rely on.
            </p>

            <a
              href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Book Cleaning Service
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleaningSection;
