import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Video from "@/entities/Video";
import VideoPlayer from "../components/video/VideoPlayer";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const { theme } = useTheme();

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const videoList = await Video.list("-created_date");
      setVideos(videoList);
    } catch (error) {
      console.error("Error loading videos:", error);
    }
    setIsLoading(false);
  };

  const categories = [
    { key: "all", label: "All Videos" },
    { key: "runway", label: "Runway" },
    { key: "editorial", label: "Editorial" },
    { key: "commercial", label: "Commercial" },
    { key: "behind_scenes", label: "Behind the Scenes" },
  ];

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

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
            Loading videos...
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
              Video Reel
            </h1>
            <p
              className="font-sans text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.textLight }}
            >
              Dynamic moments captured in motion—from runway performances and
              editorial shoots to commercial campaigns and behind-the-scenes
              glimpses of my creative process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={
                  activeCategory === category.key ? "default" : "outline"
                }
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-sans font-medium hover:scale-105 ${
                  activeCategory !== category.key && "border-opacity-30"
                }`}
                style={
                  activeCategory === category.key
                    ? { backgroundColor: theme.accent, color: "white" }
                    : { color: theme.text, borderColor: theme.textLight }
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-16">
              <p
                className="font-sans text-xl"
                style={{ color: theme.textLight }}
              >
                No videos available yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <VideoPlayer video={video} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
