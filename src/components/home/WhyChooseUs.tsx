import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, Settings, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trained & Verified Staff",
    description: "All our workers undergo thorough background checks and professional training.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Reliable & On-Time",
    description: "We value your time with punctual service delivery every single time.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality of service.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Flexible Hiring",
    description: "Customizable staffing solutions to match your specific requirements.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "India & GCC Expertise",
    description: "Extensive recruitment experience across India and Gulf countries.",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Quality Assurance",
    description: "Regular performance monitoring to ensure consistent service quality.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Why Inda Management Service?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over a decade of experience, we've built a reputation for excellence 
            in manpower outsourcing and cleaning services.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border card-hover"
            >
              <div className="feature-icon mb-6 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
