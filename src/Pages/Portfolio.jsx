import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Portfolio from "@/entities/Portfolio.json";
import PortfolioGrid from "@/Components/portfolio/PortfolioGrid";
import { useTheme } from "@/Components/theme/ThemeProvider";

export default function PortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    try {
      const items = await Portfolio.list("-created_date");
      setPortfolioItems(items);
    } catch (error) {
      console.error("Error loading portfolio:", error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: theme.background }}
      >
        <div className="text-center">
          <div
            className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: theme.accent, borderTopColor: "transparent" }}
          ></div>
          <p className="font-sans" style={{ color: theme.textLight }}>
            Loading portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.background }}>
      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="font-serif text-5xl md:text-6xl font-bold mb-6"
              style={{ color: theme.text }}
            >
              Portfolio
            </h1>
            <p
              className="font-sans text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.textLight }}
            >
              A comprehensive collection of editorial campaigns, runway shows,
              commercial work, and artistic collaborations spanning eight years
              of professional modeling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid portfolioItems={portfolioItems} />
        </div>
      </section>
    </div>
  );
}
