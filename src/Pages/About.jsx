import React from "react";
import { motion } from "framer-motion";
import { Award, MapPin, Users, Heart } from "lucide-react";
import { useTheme } from "@/Components/theme/ThemeProvider";

export default function About() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.background }}>
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="font-serif text-5xl md:text-6xl font-bold mb-8"
                style={{ color: theme.text }}
              >
                About Aria
              </h1>
              <div
                className="space-y-6 font-sans text-lg leading-relaxed"
                style={{ color: theme.text }}
              >
                <p>
                  Born in Shanghai and raised between New York and Paris, I
                  discovered my passion for modeling at the age of sixteen when
                  I was scouted during Fashion Week. What started as a curiosity
                  evolved into a dedicated career spanning luxury fashion,
                  commercial campaigns, and artistic collaborations.
                </p>
                <p>
                  My multicultural background brings a unique perspective to
                  every shoot, allowing me to seamlessly adapt between different
                  aesthetics and brand languages. I believe modeling is not just
                  about wearing clothes—it's about storytelling, emotion, and
                  creating moments that resonate.
                </p>
                <p>
                  When I'm not on set, you'll find me practicing yoga, exploring
                  contemporary art galleries, or working on my photography
                  project documenting street fashion across different cultures.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: theme.surface }}
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c96c8363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Joshna Sethi Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: theme.accent }}
              ></div>
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-30 blur-xl"
                style={{ backgroundColor: theme.accent }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-24" style={{ backgroundColor: theme.surface }}>
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
              Expertise & Recognition
            </h2>
            <p
              className="font-sans text-xl max-w-3xl mx-auto"
              style={{ color: theme.textLight }}
            >
              Specialized skills and achievements earned through years of
              dedicated work in the fashion industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Editorial Excellence",
                description:
                  "Featured in major fashion publications including Vogue, Harper's Bazaar, and Elle",
              },
              {
                icon: MapPin,
                title: "Global Experience",
                description:
                  "Worked in fashion capitals: Paris, Milan, New York, Tokyo, and London",
              },
              {
                icon: Users,
                title: "Brand Partnerships",
                description:
                  "Long-term collaborations with luxury brands like Chanel, Dior, and Saint Laurent",
              },
              {
                icon: Heart,
                title: "Versatile Range",
                description:
                  "From haute couture to commercial campaigns, beauty to lifestyle shoots",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: theme.accent + "20" }}
                >
                  <item.icon
                    className="w-8 h-8"
                    style={{ color: theme.accent }}
                  />
                </div>
                <h3
                  className="font-serif text-xl font-bold mb-4"
                  style={{ color: theme.text }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans leading-relaxed"
                  style={{ color: theme.textLight }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24">
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
              Beyond the Runway
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Multilingual",
                detail:
                  "Fluent in English, Mandarin, French, and conversational Italian",
              },
              {
                title: "Passionate Photographer",
                detail:
                  "Self-taught photographer with a focus on street fashion and portraits",
              },
              {
                title: "Wellness Advocate",
                detail: "Certified yoga instructor and meditation practitioner",
              },
              {
                title: "Art Collector",
                detail:
                  "Collector of contemporary Asian art and vintage fashion pieces",
              },
              {
                title: "Sustainable Fashion",
                detail:
                  "Advocate for eco-conscious fashion and ethical modeling practices",
              },
              {
                title: "Mentorship",
                detail:
                  "Mentors aspiring models and speaks at industry workshops",
              },
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: theme.surface }}
              >
                <h3
                  className="font-serif text-xl font-bold mb-4"
                  style={{ color: theme.text }}
                >
                  {fact.title}
                </h3>
                <p className="font-sans" style={{ color: theme.textLight }}>
                  {fact.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
