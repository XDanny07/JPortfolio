import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function PortfolioGrid({ portfolioItems }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const { theme } = useTheme();

  const filters = [
    { key: "all", label: "All Work" },
    { key: "fashion", label: "Fashion" },
    { key: "commercial", label: "Commercial" },
    { key: "beauty", label: "Beauty" },
    { key: "artistic", label: "Artistic" },
    { key: "runway", label: "Runway" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            variant={activeFilter === filter.key ? "contained" : "outlined"}
            onClick={() => setActiveFilter(filter.key)}
            className={`px-6 py-2 rounded-full transition-all duration-300 clean-font font-medium ${
              activeFilter === filter.key
                ? "text-white hover:scale-105"
                : "theme-text hover:theme-accent border-opacity-30 theme-border hover:scale-105"
            }`}
            style={
              activeFilter === filter.key
                ? { backgroundColor: theme.accent }
                : {}
            }
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl theme-surface shadow-lg">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="luxury-font text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="clean-font text-sm text-gray-200 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="capitalize"
                        style={{
                          backgroundColor: theme.accent,
                          color: "white",
                        }}
                      >
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm">
                        <Camera className="w-4 h-4 mr-1" />
                        {item.photographer}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink
                    className="w-5 h-5"
                    style={{ color: theme.accent }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image_url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Close Button */}
              <Button
                variant="outlined"
                size="small"
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg p-6 text-white">
                <h3 className="luxury-font text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="clean-font text-gray-200 mb-4">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="clean-font text-sm">
                      <Camera className="w-4 h-4 inline mr-1" />
                      {selectedImage.photographer}
                    </span>
                    {selectedImage.brand && (
                      <span className="clean-font text-sm">
                        Brand: {selectedImage.brand}
                      </span>
                    )}
                  </div>
                  <Badge
                    variant="secondary"
                    className="capitalize"
                    style={{ backgroundColor: theme.accent, color: "white" }}
                  >
                    {selectedImage.category}
                  </Badge>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
