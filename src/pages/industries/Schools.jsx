import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function SchoolsIndustryPage() {
  return (
    <div className="bg-white text-[#0E1726]">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: "Schools & Campuses" }
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden h-[48vh] min-h-[380px]">
        <img
          src="/assets/industries/schools.png"
          alt="Schools & Campuses"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E1726]/60" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-white">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Schools & Campuses
          </h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Modern cloud-first safety for K–12 districts and higher education —
            unified video, access controls, sensors, and alerts.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>
          Protect Students, Faculty & Facilities
        </h2>
        <p className="text-[#444] mt-4 max-w-3xl">
          Create safer learning environments with a modern, unified security
          platform that integrates with IT systems and scales across districts.
        </p>

        <ul className="mt-6 space-y-3 text-[#444] list-disc pl-6">
          <li>Secure entries and real-time door monitoring</li>
          <li>Unified video for classrooms, hallways & parking lots</li>
          <li>Role-based access for staff, faculty & housing</li>
          <li>Integrates with SSO, SIS, and campus safety workflows</li>
        </ul>

        <div className="mt-10 flex gap-4">
          <a
            href="/demo"
            className="rounded-xl bg-[#2771E9] text-white px-6 py-3 font-semibold"
          >
            Get a Demo
          </a>
          <a
            href="#"
            className="rounded-xl border border-[#2771E9] text-[#2771E9] px-6 py-3 font-semibold"
          >
            Download Case Study
          </a>
        </div>
      </section>
    </div>
  );
}
