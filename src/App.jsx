import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

// Pages
import Home from "./pages/Home";

// Industry pages
import IndustryHub from "./pages/industries/Index";
import MarinaIndustryPage from "./pages/industries/Marina";
import VenuesIndustryPage from "./pages/industries/Venues";
import ConstructionIndustryPage from "./pages/industries/Construction";
import SchoolsIndustryPage from "./pages/industries/Schools";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumbs />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Industry Hub */}
          <Route path="/industries" element={<IndustryHub />} />

          {/* Industry Detail Pages */}
          <Route path="/industries/marina" element={<MarinaIndustryPage />} />
          <Route path="/industries/venues" element={<VenuesIndustryPage />} />
          <Route
            path="/industries/construction"
            element={<ConstructionIndustryPage />}
          />
          <Route path="/industries/schools" element={<SchoolsIndustryPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
