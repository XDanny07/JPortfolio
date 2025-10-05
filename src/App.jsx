import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Instagram, Mail, Phone, Palette, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ThemeProvider, useTheme } from "@/components/theme/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";
import { getNavigationRoutes } from "@/components/config/routes";

function AppLayout({ children, currentPageName }) {
  const location = useLocation();
  const { theme, currentTheme, setCurrentTheme, themes } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = getNavigationRoutes();

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const themeCategories = {
    "Classic Elegance": ["luxury", "elegant", "platinum", "obsidian"],
    "Bold & Dramatic": ["dramatic", "midnight", "burgundy", "royal"],
    "Warm Luxe": ["rosegold", "champagne", "sunset", "earth"],
    "Cool Sophistication": ["navy", "emerald", "bold", "pastel"],
  };

  return (
    <div
      className="min-h-screen font-sans transition-all duration-500"
      style={{ backgroundColor: theme.background }}
    >
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-opacity-20"
        style={{ backgroundColor: theme.surface, borderColor: theme.textLight }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              to={createPageUrl("Home")}
              className="font-serif text-2xl font-bold transition-colors duration-300"
              style={{ color: theme.text }}
              onMouseOver={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseOut={(e) => (e.currentTarget.style.color = theme.text)}
            >
              Joshna Sethi
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className="font-sans font-medium transition-all duration-300"
                  style={{
                    color:
                      currentPageName === item.path ? theme.accent : theme.text,
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = theme.accent)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color =
                      currentPageName === item.path ? theme.accent : theme.text)
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Enhanced Theme Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    style={{ color: theme.text }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = theme.accent)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = theme.text)
                    }
                  >
                    <Palette className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-64 max-h-96 overflow-y-auto"
                  style={{ backgroundColor: theme.surface, color: theme.text }}
                >
                  <DropdownMenuLabel className="font-sans font-semibold">
                    Choose Color Theme
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {Object.entries(themeCategories).map(
                    ([category, themeKeys]) => (
                      <div key={category}>
                        <DropdownMenuLabel
                          className="font-sans text-xs uppercase tracking-wider px-2 py-1"
                          style={{ color: theme.textLight }}
                        >
                          {category}
                        </DropdownMenuLabel>
                        {themeKeys.map(
                          (key) =>
                            themes[key] && (
                              <DropdownMenuItem
                                key={key}
                                onClick={() => setCurrentTheme(key)}
                                className="font-sans flex items-center gap-3"
                                style={{
                                  color:
                                    currentTheme === key
                                      ? theme.accent
                                      : theme.text,
                                }}
                              >
                                <div
                                  className="w-4 h-4 rounded-full border border-gray-300"
                                  style={{
                                    backgroundColor: themes[key].accent,
                                  }}
                                ></div>
                                {themes[key].name}
                              </DropdownMenuItem>
                            )
                        )}
                        <DropdownMenuSeparator />
                      </div>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Social Icons */}
              <div className="hidden md:flex space-x-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.text }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = theme.accent)
                  }
                  onMouseOut={(e) => (e.currentTarget.style.color = theme.text)}
                  className="transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:aria@ariachen.com"
                  style={{ color: theme.text }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = theme.accent)
                  }
                  onMouseOut={(e) => (e.currentTarget.style.color = theme.text)}
                  className="transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+1234567890"
                  style={{ color: theme.text }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = theme.accent)
                  }
                  onMouseOut={(e) => (e.currentTarget.style.color = theme.text)}
                  className="transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(true)}
                  style={{ color: theme.text }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = theme.accent)
                  }
                  onMouseOut={(e) => (e.currentTarget.style.color = theme.text)}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ backgroundColor: theme.background }}
          >
            <div
              className="flex justify-between items-center p-4 border-b border-opacity-20"
              style={{ borderColor: theme.textLight }}
            >
              <Link
                to={createPageUrl("Home")}
                onClick={handleMobileLinkClick}
                className="font-serif text-2xl font-bold"
                style={{ color: theme.text }}
              >
                Joshna Sethi
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: theme.text }}
              >
                <X className="w-8 h-8" />
              </Button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-center">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1 * index,
                  }}
                >
                  <Link
                    to={createPageUrl(item.path)}
                    onClick={handleMobileLinkClick}
                    className="font-serif text-4xl transition-colors duration-300"
                    style={{
                      color:
                        currentPageName === item.path
                          ? theme.accent
                          : theme.text,
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = theme.accent)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color =
                        currentPageName === item.path
                          ? theme.accent
                          : theme.text)
                    }
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="p-8 flex justify-center space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.text }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = theme.accent)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = theme.text)}
                className="transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:aria@ariachen.com"
                style={{ color: theme.text }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = theme.accent)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = theme.text)}
                className="transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+1234567890"
                style={{ color: theme.text }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = theme.accent)
                }
                onMouseOut={(e) => (e.currentTarget.style.color = theme.text)}
                className="transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        className="border-t border-opacity-20 py-12"
        style={{ backgroundColor: theme.surface, borderColor: theme.textLight }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3
                className="font-serif text-2xl font-bold"
                style={{ color: theme.text }}
              >
                Joshna Sethi
              </h3>
              <p className="font-sans mt-2" style={{ color: theme.textLight }}>
                Professional Model & Creative
              </p>
            </div>

            <div className="text-center md:text-right">
              <p
                className="font-sans text-sm"
                style={{ color: theme.textLight }}
              >
                © 2025 Joshna Sethi. All rights reserved.
              </p>
              <p
                className="font-sans text-sm mt-1"
                style={{ color: theme.textLight }}
              >
                Available for bookings worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Layout({ children, currentPageName }) {
  return (
    <ThemeProvider>
      <AppLayout children={children} currentPageName={currentPageName} />
    </ThemeProvider>
  );
}
