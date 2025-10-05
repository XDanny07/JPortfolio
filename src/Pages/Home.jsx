import { motion } from "framer-motion";
import HeroSection from "@/Components/hero/HeroSection";
import { useTheme } from "@/Components/theme/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.background }}>
      <HeroSection />
      {/* Featured Work Preview */}
      <section className="py-24" style={{ backgroundColor: theme.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: theme.text }}
            >
              Featured Work
            </h2>
            <p
              className="font-sans text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.textLight }}
            >
              A curated selection of my latest editorial campaigns, luxury brand
              collaborations, and artistic endeavors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
                title: "Haute Couture Campaign",
                brand: "Maison Valentino",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
                title: "Editorial Beauty",
                brand: "Vogue Italia",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
                title: "Luxury Timepiece",
                brand: "Cartier",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl"
                  style={{ backgroundColor: theme.surface }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-serif text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-gray-200">
                        {item.brand}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-24" style={{ backgroundColor: theme.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "150+", label: "Campaigns" },
              { number: "25", label: "Countries" },
              { number: "8", label: "Years Experience" },
              { number: "50+", label: "Magazine Covers" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="font-serif text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: theme.accent }}
                >
                  {stat.number}
                </div>
                <div
                  className="font-sans uppercase tracking-wider text-sm"
                  style={{ color: theme.textLight }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
