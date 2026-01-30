import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center">
                <img src="/logo.jpeg" alt="Inda Management Logo" className="h-14 w-14 rounded-full border-2 border-accent" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Inda Management</h3>
                <p className="text-sm text-primary-foreground/70">Services</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Your trusted partner for professional manpower outsourcing and house cleaning services in Kolkata. Delivering excellence since 2014.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80 text-sm">House Cleaning Services</li>
              <li className="text-primary-foreground/80 text-sm">Housekeeping Staff</li>
              <li className="text-primary-foreground/80 text-sm">Manpower Outsourcing</li>
              <li className="text-primary-foreground/80 text-sm">Gardening Services</li>
              <li className="text-primary-foreground/80 text-sm">Office Support Staff</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:9088955226" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+91 9088955226</span>
                </a>
              </li>
              <li>
                <a href="mailto:indiramondal18@gmail.com" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>indiramondal18@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>20, Garfa Lane (Vidyasagar Sarani), Kolkata – 700078</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm text-center md:text-left">
              © {currentYear} Inda Management Services | All Rights Reserved | Developed & Maintained by <span className="font-medium text-accent">Digital Exposure Online Services</span>
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Serving Hospitals • IT Companies • Hotels • Corporate Offices • Residential Homes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
