import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import images
import houseCleaningImg from "@/assets/house-cleaning.jpg";
import housekeepingImg from "@/assets/housekeeping.jpg";
import peonImg from "@/assets/peon.jpg";
import gardenerImg from "@/assets/gardener-1.jpeg";
import officeBoyImg from "@/assets/office-boy.jpg";
import elevatorManImg from "@/assets/elevator-man.jpg";
import teaBoyImg from "@/assets/tea-boy.jpg";
import fieldWorkersImg from "@/assets/field-workers.jpg";

const services = [
  {
    title: "House Cleaning Services",
    description: "Professional home cleaning with attention to detail",
    image: houseCleaningImg,
  },
  {
    title: "Housekeeping Staff",
    description: "Trained housekeepers for homes and hotels",
    image: housekeepingImg,
  },
  {
    title: "Peon",
    description: "Reliable office support staff for daily tasks",
    image: peonImg,
  },
  {
    title: "Gardeners",
    description: "Expert landscaping and garden maintenance",
    image: gardenerImg,
  },
  {
    title: "Office Boy",
    description: "Efficient office assistance and errands",
    image: officeBoyImg,
  },
  {
    title: "Elevator Man",
    description: "Professional elevator operators for buildings",
    image: elevatorManImg,
  },
  {
    title: "Tea Boy",
    description: "Hospitality staff for tea and refreshments",
    image: teaBoyImg,
  },
  {
    title: "Field Workers",
    description: "Skilled blue-collar workforce for industries",
    image: fieldWorkersImg,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Comprehensive Workforce Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From house cleaning to corporate staffing, we provide skilled manpower 
            solutions tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card group h-[300px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Title always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent z-10">
                <h3 className="text-primary-foreground font-serif font-semibold text-lg">
                  {service.title}
                </h3>
              </div>

              {/* Hover content */}
              <div className="service-card-content bg-gradient-to-t from-primary via-primary/95 to-primary/80">
                <h3 className="text-primary-foreground font-serif font-semibold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/90 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
