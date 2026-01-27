import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Clock, Headphones } from "lucide-react";

interface CounterItemProps {
  end: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

const CounterItem = ({ end, suffix, label, icon, delay }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, delay, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.5 }}
      className="counter-item"
    >
      <div className="feature-icon mx-auto mb-4">
        {icon}
      </div>
      <div className="counter-number mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

const StatsCounter = () => {
  const stats = [
    { end: 500, suffix: "+", label: "Happy Clients", icon: <Users className="w-8 h-8 text-primary" />, delay: 0 },
    { end: 1000, suffix: "+", label: "Skilled Workforce", icon: <Briefcase className="w-8 h-8 text-primary" />, delay: 200 },
    { end: 10, suffix: "+", label: "Years Experience", icon: <Clock className="w-8 h-8 text-primary" />, delay: 400 },
    { end: 24, suffix: "/7", label: "Support Available", icon: <Headphones className="w-8 h-8 text-primary" />, delay: 600 },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <CounterItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
