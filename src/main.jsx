import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./App.jsx";
import Home from "./Pages/Home.jsx";
import PortfolioPage from "./Pages/Portfolio.jsx";
import About from "./Pages/About.jsx";
import Videos from "./Pages/Videos.jsx";
import Contact from "./Pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="about" element={<About />} />
          <Route path="videos" element={<Videos />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
