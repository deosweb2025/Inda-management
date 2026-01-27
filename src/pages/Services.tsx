import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { MessageCircle, Building2, Hotel, Laptop, Home, Briefcase, HardHat } from "lucide-react";

// Import images
import houseCleaningImg from "@/assets/house-cleaning.jpg";
import housekeepingImg from "@/assets/housekeeping.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpeg";
import gardenerImg from "@/assets/gardener-1.jpeg";
import gardener2Img from "@/assets/gardener-2.jpeg";
import fieldWorkersImg from "@/assets/field-workers.jpg";

const services = [
  {
    id: "cleaning",
    icon: <Home className="w-8 h-8" />,
    title: "Residential House Cleaning",
    description: "Professional home cleaning services including dusting, mopping, sanitizing, and deep cleaning. We offer regular cleaning plans, one-time deep cleans, and pre/post-event cleaning to suit your schedule.",
    image: houseCleaningImg,
    features: ["Regular Cleaning Plans", "Deep Cleaning", "Kitchen & Bathroom Sanitization", "Eco-friendly Products"],
  },
  {
    id: "housekeeping",
    icon: <Hotel className="w-8 h-8" />,
    title: "Housekeeping Staff",
    description: "Trained and verified housekeeping staff for hotels, resorts, and residential properties. Our staff maintains the highest standards of cleanliness and hospitality.",
    image: housekeepingImg,
    features: ["Hotel Housekeeping", "Resort Staff", "Residential Housekeepers", "Trained & Verified"],
  },
  {
    id: "office",
    icon: <Building2 className="w-8 h-8" />,
    title: "Corporate Office Cleaning",
    description: "Comprehensive cleaning solutions for corporate offices, IT companies, and commercial spaces. We ensure a clean and healthy work environment for your employees.",
    image: officeCleaningImg,
    features: ["Office Deep Cleaning", "Daily Maintenance", "Carpet & Upholstery Care", "Workstation Sanitization"],
  },
  {
    id: "hospital",
    icon: <Briefcase className="w-8 h-8" />,
    title: "Hospital Staffing",
    description: "Specialized support staff for healthcare facilities including hospitals, clinics, and nursing homes. Our staff is trained in healthcare hygiene protocols.",
    image: housekeepingImg,
    features: ["Healthcare Facility Staff", "Hygiene Trained", "24/7 Availability", "Background Verified"],
  },
  {
    id: "hospitality",
    icon: <Hotel className="w-8 h-8" />,
    title: "Hotel & Hospitality Workforce",
    description: "Complete hospitality staffing solutions including housekeeping, stewards, bell boys, and more. We serve hotels, restaurants, and event venues.",
    image: gardener2Img,
    features: ["Housekeeping Staff", "Stewards & Waiters", "Bell Boys", "Event Staff"],
  },
  {
    id: "manpower",
    icon: <HardHat className="w-8 h-8" />,
    title: "Blue-Collar Manpower Outsourcing",
    description: "Comprehensive workforce solutions including peons, office boys, elevator operators, tea boys, gardeners, and field workers for various industries.",
    image: fieldWorkersImg,
    features: ["Factory Workers", "Warehouse Staff", "Security Personnel", "Maintenance Staff"],
  },
  {
    id: "it",
    icon: <Laptop className="w-8 h-8" />,
    title: "IT Company Support Staff",
    description: "Dedicated support staff for IT companies including office boys, pantry staff, facility maintenance, and housekeeping personnel.",
    image: officeCleaningImg,
    features: ["Pantry Staff", "Facility Maintenance", "Reception Support", "Office Assistance"],
  },
  {
    id: "gardening",
    icon: <Home className="w-8 h-8" />,
    title: "Gardening Services",
    description: "Professional landscaping and garden maintenance services. Our experienced gardeners ensure your outdoor spaces are beautiful and well-maintained.",
    image: gardenerImg,
    features: ["Lawn Maintenance", "Plant Care", "Landscaping", "Seasonal Planting"],
  },
];

const Services = () => {
  const phoneNumber = "9088955226";

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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            Comprehensive manpower and cleaning solutions tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[350px] md:h-[400px] object-cover"
                  />
                  <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-primary/90 flex items-center justify-center text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
                    `Hello, I am interested in your ${service.title} service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp for This Service
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            We offer customized staffing solutions to meet your specific requirements. 
            Contact us to discuss your needs.
          </p>
          <a
            href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
              "Hello, I need a custom staffing solution."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
