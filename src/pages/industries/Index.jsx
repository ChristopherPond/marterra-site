import React from "react";
import { Link } from "react-router-dom";

export default function IndustryHub() {
  return (
    <div className="bg-white text-[#0E1726]">

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0E1726] to-[#1A2234] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold" style={{ fontFamily: "Poppins" }}>
            Industries We Serve
          </h1>
          <p className="mt-4 max-w-3xl text-white/80">
            MarTerra provides unified, AI-powered physical security solutions across
            diverse environments—from marinas and ports to public venues,
            construction sites, and modern campuses.
          </p>
        </div>
      </section>

      {/* TOP GRID — 4 MAIN INDUSTRIES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Marina */}
          <Link to="/industries/marina" className="group rounded-2xl overflow-hidden border border-[#E6E9EF] shadow-sm hover:shadow-md transition">
            <img
              src="/assets/industries/marina.png"
              alt="Marina & Port Security"
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Marina & Port Security</h3>
              <p className="mt-2 text-sm text-[#555]">
                Waterfront protection for docks, slips, fuel docks, and perimeters.
              </p>
              <div className="mt-3 text-[#2771E9] font-semibold text-sm">
                View Industry →
              </div>
            </div>
          </Link>

          {/* Venues */}
          <Link to="/industries/venues" className="group rounded-2xl overflow-hidden border border-[#E6E9EF] shadow-sm hover:shadow-md transition">
            <img
              src="/assets/industries/venues.png"
              alt="Public Venues & Events"
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Public Venues & Events</h3>
              <p className="mt-2 text-sm text-[#555]">
                Protect arenas, stadiums, civic spaces, and live events.
              </p>
              <div className="mt-3 text-[#2771E9] font-semibold text-sm">
                View Industry →
              </div>
            </div>
          </Link>

          {/* Construction */}
          <Link to="/industries/construction" className="group rounded-2xl overflow-hidden border border-[#E6E9EF] shadow-sm hover:shadow-md transition">
            <img
              src="/assets/industries/construction.png"
              alt="Construction Sites"
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Construction Sites</h3>
              <p className="mt-2 text-sm text-[#555]">
                Protect equipment, materials, and remote teams.
              </p>
              <div className="mt-3 text-[#2771E9] font-semibold text-sm">
                View Industry →
              </div>
            </div>
          </Link>

          {/* Schools */}
          <Link to="/industries/schools" className="group rounded-2xl overflow-hidden border border-[#E6E9EF] shadow-sm hover:shadow-md transition">
            <img
              src="/assets/industries/schools.png"
              alt="Schools & Campuses"
              className="h-40 w-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg">Schools & Campuses</h3>
              <p className="mt-2 text-sm text-[#555]">
                Unified security for K–12 and higher education.
              </p>
              <div className="mt-3 text-[#2771E9] font-semibold text-sm">
                View Industry →
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="bg-[#F6F8FB] py-20 border-y border-[#E6E9EF]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: "Poppins" }}>
            Solutions for Every Site
          </h2>
          <p className="mt-3 text-[#444] max-w-3xl">
            Whether it’s perimeter detection, access control, intelligent video,
            or cloud-managed sensors—MarTerra unifies all components into a single platform.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              { title: "Cloud Video Security", desc: "AI-powered detection, analytics, and rapid search." },
              { title: "Access Control", desc: "Mobile credentials, badge readers, and cloud-managed entries." },
              { title: "Sensors", desc: "Environmental monitoring, air quality, noise, and more." },
              { title: "Alarms & Monitoring", desc: "Automated alerts with optional professional monitoring." },
            ].map((box) => (
              <div key={box.title} className="rounded-2xl bg-white p-6 border border-[#E6E9EF]">
                <h3 className="font-semibold">{box.title}</h3>
                <p className="mt-2 text-sm text-[#555]">{box.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ fontFamily: "Poppins" }}>
            Additional Markets
          </h2>
          <p className="mt-3 text-[#444] max-w-3xl">
            MarTerra also extends to a wide range of specialized environments.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Public Works & Utilities",
              "Hospitality",
              "Retail & Franchises",
              "Corporate Offices",
              "Manufacturing",
              "Multi-site Operations",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[#E6E9EF] bg-white p-6">
                <div className="font-semibold">{item}</div>
                <p className="mt-2 text-sm text-[#555]">
                  Tailored deployments built for unique operational needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0E1726] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          <div>
            <div className="text-sm uppercase tracking-wide text-white/70">Ready to modernize?</div>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-2" style={{ fontFamily: "Poppins" }}>
              Get a tailored security plan
            </h3>
            <p className="mt-2 text-white/80 max-w-xl">
              Our team will evaluate your sites and design a unified security roadmap.
            </p>
          </div>

          <div className="flex gap-4">
            <a className="rounded-xl bg-[#2771E9] px-5 py-3 font-semibold" href="#demo">
              Get a Demo
            </a>
            <a className="rounded-xl border border-white/20 px-5 py-3 font-semibold" href="#audit">
              Free Security Audit
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
