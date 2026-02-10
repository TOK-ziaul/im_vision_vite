import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import SupportPage from "@/pages/SupportPage";
import SalesPage from "@/pages/SalesPage";
import ServicePage from "@/pages/ServicePage";
import ContactPage from "@/pages/ContactPage";
import ProjectsPage from "@/pages/ProjectsPage";
import RentalPage from "@/pages/RentalPage";
import FashionIndustryPage from "@/projects/FashionIndustryPage";
import GroceryStorePage from "@/projects/GroceryStorePage";
import AutomotiveIndustryPage from "@/projects/AutomotiveIndustryPage";
import OutdoorAdvertisingPage from "@/projects/OutdoorAdvertisingPage";

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/rental" element={<RentalPage />} />
        <Route
          path="/projects/fashion-industry"
          element={<FashionIndustryPage />}
        />
        <Route path="/projects/grocery-store" element={<GroceryStorePage />} />
        <Route
          path="/projects/automotive-industry"
          element={<AutomotiveIndustryPage />}
        />
        <Route
          path="/projects/outdoor-advertising-dooh"
          element={<OutdoorAdvertisingPage />}
        />
      </Routes>
    </LanguageProvider>
  );
}
