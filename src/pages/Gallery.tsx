import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { X } from "lucide-react";

// Import all images
import houseCleaningImg from "@/assets/house-cleaning.jpg";
import housekeepingImg from "@/assets/housekeeping.jpg";
import officeCleaningImg from "@/assets/office-cleaning.jpeg";
import gardener1Img from "@/assets/gardener-1.jpeg";
import gardener2Img from "@/assets/gardener-2.jpeg";
import gardener3Img from "@/assets/gardener-3.jpeg";
import gardener4Img from "@/assets/gardener-4.jpeg";
import cleaner1Img from "@/assets/cleaner-1.jpeg";
import butlerImg from "@/assets/butler.jpeg";
import officeBoyImg from "@/assets/office-boy.jpg";
import elevatorManImg from "@/assets/elevator-man.jpg";
import teaBoyImg from "@/assets/tea-boy.jpg";
import fieldWorkersImg from "@/assets/field-workers.jpg";
import heroWorkforceImg from "@/assets/hero-workforce.jpg";
import aboutHeroImg from "@/assets/about-hero.jpg";

const galleryImages = [
  { src: heroWorkforceImg, alt: "Our Professional Workforce", category: "Team" },
  { src: houseCleaningImg, alt: "House Cleaning Service", category: "Cleaning" },
  { src: housekeepingImg, alt: "Housekeeping Staff", category: "Hospitality" },
  { src: officeCleaningImg, alt: "Office Cleaning", category: "Corporate" },
  { src: gardener1Img, alt: "Professional Gardener", category: "Gardening" },
  { src: gardener2Img, alt: "Garden Maintenance", category: "Gardening" },
  { src: gardener3Img, alt: "Landscaping Services", category: "Gardening" },
  { src: gardener4Img, alt: "Expert Gardening", category: "Gardening" },
  { src: cleaner1Img, alt: "Professional Cleaner", category: "Cleaning" },
  { src: butlerImg, alt: "Butler Service", category: "Hospitality" },
  { src: officeBoyImg, alt: "Office Support Staff", category: "Corporate" },
  { src: elevatorManImg, alt: "Elevator Operator", category: "Hospitality" },
  { src: teaBoyImg, alt: "Tea Service", category: "Hospitality" },
  { src: fieldWorkersImg, alt: "Field Workers", category: "Industrial" },
  { src: aboutHeroImg, alt: "Corporate Team", category: "Team" },
];

const categories = ["All", "Cleaning", "Gardening", "Hospitality", "Corporate", "Industrial", "Team"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            A glimpse into our professional services and dedicated workforce.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="gallery-item aspect-square"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-primary-foreground font-medium opacity-0 hover:opacity-100 transition-opacity">
                      {image.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
