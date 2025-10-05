import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function VideoPlayer({ video, autoplay = false }) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const { theme } = useTheme();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    // Fullscreen implementation would go here
    console.log("Fullscreen requested");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group rounded-2xl overflow-hidden shadow-2xl"
      style={{ backgroundColor: theme.surface }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Thumbnail/Player */}
      <div className="relative aspect-video bg-black">
        <img
          src={video.thumbnail_url || video.video_url}
          alt={video.title}
          className="w-full h-full object-cover"
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center cursor-pointer shadow-2xl"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 ml-1" style={{ color: theme.accent }} />
            ) : (
              <Play className="w-8 h-8 ml-1" style={{ color: theme.accent }} />
            )}
          </motion.div>
        </div>

        {/* Video Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
        >
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayPause}
                className="text-white hover:bg-white/20"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleMute}
                className="text-white hover:bg-white/20"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </Button>

              <span className="font-sans text-sm">{video.duration}</span>
            </div>

            <div className="flex items-center space-x-4">
              <Badge
                variant="secondary"
                className="capitalize"
                style={{ backgroundColor: theme.accent, color: "white" }}
              >
                {video.category}
              </Badge>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleFullscreen}
                className="text-white hover:bg-white/20"
              >
                <Maximize className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Info */}
      <div className="p-6">
        <h3
          className="font-serif text-xl font-bold mb-2"
          style={{ color: theme.text }}
        >
          {video.title}
        </h3>
        <p
          className="font-sans text-sm leading-relaxed"
          style={{ color: theme.textLight }}
        >
          {video.description}
        </p>
      </div>
    </motion.div>
  );
}
