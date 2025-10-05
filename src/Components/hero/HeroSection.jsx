import VPbutton from "../ui/VPButton";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Play } from "lucide-react";
import { useTheme } from "@/Components/theme/ThemeProvider";
import { imgOb } from "@/Entities/Images";
export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={imgOb.homeBg}
          alt="Model Portrait"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white"
          >
            <motion.h1
              className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Hi,
              <br />
              <span style={{ color: theme.accent }}>I'm Joshna</span>
            </motion.h1>

            <motion.p
              className="font-sans text-xl md:text-2xl mb-8 text-gray-200 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              An aspiring Commercial, Beauty, and Fashion Model who loves being
              part of projects that tell a story and would love to explore more
              opportunities as I grow in this journey.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Link to={createPageUrl("Portfolio")}>
                {/* <Button
                  size="lg"
                  className="group px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ backgroundColor: theme.accent, color: "white" }}
                >
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button> */}
                <VPbutton />
              </Link>

              {/* Watch reel btn */}
              {/* <Link to={createPageUrl("Videos")}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-8 py-3 text-lg font-medium border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Reel
                </Button>
              </Link> */}
            </motion.div>
          </motion.div>

          {/* Experience section */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-lg opacity-30 blur-xl"
                style={{ backgroundColor: theme.accent }}
              ></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-white/80">Experience</span>
                    <span className="font-serif text-2xl font-bold text-white">
                      8+ Years
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-white/80">Campaigns</span>
                    <span className="font-serif text-2xl font-bold text-white">
                      150+
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-white/80">Countries</span>
                    <span className="font-serif text-2xl font-bold text-white">
                      25
                    </span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <span className="font-sans text-white/80 text-sm">
                      Available for international bookings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full"
        style={{ backgroundColor: theme.accent }}
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full"
        style={{ backgroundColor: theme.accent }}
      />
    </div>
  );
}
