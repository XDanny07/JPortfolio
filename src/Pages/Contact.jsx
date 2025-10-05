import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/Components/contact/ContactForm";
import { Button } from "@/Components/ui/button";
import { Instagram, Mail, Phone, Download, MapPin, Clock } from "lucide-react";
import { useTheme } from "@/Components/theme/ThemeProvider";

export default function Contact() {
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "aria@ariachen.com",
      link: "mailto:aria@ariachen.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Instagram,
      title: "Instagram",
      detail: "@ariachen_model",
      link: "https://instagram.com/ariachen_model",
    },
    {
      icon: MapPin,
      title: "Based In",
      detail: "New York, NY",
      link: null,
    },
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    console.log("Downloading resume...");
  };

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
              Let's Create Together
            </h1>
            <p
              className="font-sans text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.textLight }}
            >
              Available for fashion campaigns, editorial shoots, runway shows,
              and commercial projects worldwide. Let's discuss how we can bring
              your creative vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl p-8 shadow-2xl"
              style={{ backgroundColor: theme.surface }}
            >
              <div className="mb-8">
                <h2
                  className="font-serif text-3xl font-bold mb-4"
                  style={{ color: theme.text }}
                >
                  Send a Message
                </h2>
                <p className="font-sans" style={{ color: theme.textLight }}>
                  Fill out the form below with your project details and I'll get
                  back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div
                className="rounded-2xl p-8 shadow-xl"
                style={{ backgroundColor: theme.surface }}
              >
                <h3
                  className="font-serif text-2xl font-bold mb-6"
                  style={{ color: theme.text }}
                >
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-center space-x-4"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: theme.accent + "20" }}
                      >
                        <info.icon
                          className="w-6 h-6"
                          style={{ color: theme.accent }}
                        />
                      </div>
                      <div>
                        <p
                          className="font-sans font-medium"
                          style={{ color: theme.text }}
                        >
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-sans hover:underline transition-colors duration-300"
                            style={{ color: theme.textLight }}
                          >
                            {info.detail}
                          </a>
                        ) : (
                          <p
                            className="font-sans"
                            style={{ color: theme.textLight }}
                          >
                            {info.detail}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div
                className="rounded-2xl p-8 shadow-xl"
                style={{ backgroundColor: theme.surface }}
              >
                <h3
                  className="font-serif text-2xl font-bold mb-6"
                  style={{ color: theme.text }}
                >
                  Availability
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock
                      className="w-5 h-5"
                      style={{ color: theme.accent }}
                    />
                    <span className="font-sans" style={{ color: theme.text }}>
                      Available for worldwide bookings
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: theme.accent }}
                    />
                    <span className="font-sans" style={{ color: theme.text }}>
                      Travel-friendly for international projects
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleDownloadResume}
                  className="w-full mt-6 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: theme.accent, color: "white" }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Rates Information */}
              <div
                className="rounded-2xl p-8 shadow-xl"
                style={{ backgroundColor: theme.surface }}
              >
                <h3
                  className="font-serif text-2xl font-bold mb-4"
                  style={{ color: theme.text }}
                >
                  Professional Rates
                </h3>
                <div
                  className="space-y-3 font-sans"
                  style={{ color: theme.textLight }}
                >
                  <p>• Editorial shoots: Available upon request</p>
                  <p>• Commercial campaigns: Competitive industry rates</p>
                  <p>• Runway shows: Seasonal and event-based pricing</p>
                  <p>• Brand collaborations: Custom packages available</p>
                </div>
                <p
                  className="font-sans text-sm mt-4 italic"
                  style={{ color: theme.textLight }}
                >
                  All rates are negotiable based on project scope, duration, and
                  usage rights.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
