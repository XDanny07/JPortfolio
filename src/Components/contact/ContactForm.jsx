import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import Contact from "@/Entities/Contact";
import { Send, CheckCircle } from "lucide-react";
import { useTheme } from "@/Components/theme/ThemeProvider";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme } = useTheme();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Contact.create(formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        project_type: "",
        message: "",
        budget: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div
          className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: theme.accent }}
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3
          className="font-serif text-2xl font-bold mb-4"
          style={{ color: theme.text }}
        >
          Thank You!
        </h3>
        <p
          className="font-sans max-w-md mx-auto"
          style={{ color: theme.textLight }}
        >
          Your inquiry has been received. I'll get back to you within 24 hours
          to discuss your project.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-6 hover:scale-105"
          style={{ color: theme.text, borderColor: theme.textLight }}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="font-sans font-medium"
            style={{ color: theme.text }}
          >
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
            className="focus:ring-2 transition-all duration-300"
            style={{
              "--tw-ring-color": theme.accent,
              borderColor: theme.textLight,
              color: theme.text,
            }}
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="font-sans font-medium"
            style={{ color: theme.text }}
          >
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="focus:ring-2 transition-all duration-300"
            style={{
              "--tw-ring-color": theme.accent,
              borderColor: theme.textLight,
              color: theme.text,
            }}
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="font-sans font-medium"
            style={{ color: theme.text }}
          >
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="focus:ring-2 transition-all duration-300"
            style={{
              "--tw-ring-color": theme.accent,
              borderColor: theme.textLight,
              color: theme.text,
            }}
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="project_type"
            className="font-sans font-medium"
            style={{ color: theme.text }}
          >
            Project Type *
          </Label>
          <Select
            value={formData.project_type}
            onValueChange={(value) => handleInputChange("project_type", value)}
          >
            <SelectTrigger
              style={{ borderColor: theme.textLight, color: theme.text }}
            >
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent style={{ backgroundColor: theme.surface }}>
              <SelectItem value="fashion_shoot" style={{ color: theme.text }}>
                Fashion Shoot
              </SelectItem>
              <SelectItem value="commercial" style={{ color: theme.text }}>
                Commercial Campaign
              </SelectItem>
              <SelectItem value="runway" style={{ color: theme.text }}>
                Runway Show
              </SelectItem>
              <SelectItem value="editorial" style={{ color: theme.text }}>
                Editorial
              </SelectItem>
              <SelectItem value="campaign" style={{ color: theme.text }}>
                Brand Campaign
              </SelectItem>
              <SelectItem value="other" style={{ color: theme.text }}>
                Other
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="budget"
          className="font-sans font-medium"
          style={{ color: theme.text }}
        >
          Budget Range
        </Label>
        <Input
          id="budget"
          type="text"
          value={formData.budget}
          onChange={(e) => handleInputChange("budget", e.target.value)}
          placeholder="e.g., $5,000 - $10,000"
          className="focus:ring-2 transition-all duration-300"
          style={{
            "--tw-ring-color": theme.accent,
            borderColor: theme.textLight,
            color: theme.text,
          }}
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="font-sans font-medium"
          style={{ color: theme.text }}
        >
          Project Details *
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          required
          rows={6}
          placeholder="Tell me about your project, timeline, location, and any specific requirements..."
          className="focus:ring-2 transition-all duration-300 resize-none"
          style={{
            "--tw-ring-color": theme.accent,
            borderColor: theme.textLight,
            color: theme.text,
          }}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
        style={{ backgroundColor: theme.accent, color: "white" }}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  );
}
