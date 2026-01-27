import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const phoneNumber = "9088955226";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello, my name is ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Get in touch with us for your manpower and cleaning service needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions about our services? Looking for a custom staffing solution? 
                Reach out to us and we'll get back to you as soon as possible.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 9088955226</p>
                  </div>
                </a>

                <a
                  href="mailto:indiramondal18@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">indiramondal18@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      20, Garfa Lane (Vidyasagar Sarani),<br />
                      Kolkata – 700078
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="contact-input resize-none"
                      placeholder="Tell us about your requirements"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Your message will be sent to our WhatsApp for quick response.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Find Us on the Map
            </h2>
            <p className="text-muted-foreground">
              Visit our office in Garfa, Kolkata
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-elegant"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.7718443500335!2d88.3840026!3d22.499211999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271a6282a2743%3A0xa8805eb0fb5673a3!2sInda%20Management%20Service!5e1!3m2!1sen!2sin!4v1769511893759!5m2!1sen!2sin"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Inda Management Service Location"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
