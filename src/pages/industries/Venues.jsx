import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function VenuesIndustryPage() {
  return (
    <div className="bg-white text-[#0E1726]">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: "Public Venues & Events" }
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden h-[48vh] min-h-[380px]">
        <img
          src="/assets/industries/venues.png"
          alt="Public Venues & Events"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E1726]/60" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-white">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Public Venues & Events
          </h1>
          <p className="mt-4 max-w-3xl text-white/85">
            Modern security for stadiums, arenas, civic centers, and public
            gathering spaces — all unified through MarTerra’s cloud platform.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold" style={{ fontFamily: "Poppins" }}>
          Unified Crowd & Facility Security
        </h2>
        <p className="text-[#444] mt-4 max-w-3xl">
          Public venues require hyper-modern situational awareness. MarTerra
          helps operators protect entrances, concourses, VIP access, and
          back-of-house operations — all in one pane of glass.
        </p>

        <ul className="mt-6 space-y-3 text-[#444] list-disc pl-6">
          <li>Monitor crowd flow and ingress/egress in real time</li>
          <li>Unify cameras, access control, sensors, and alarms</li>
          <li>Protect VIP and restricted areas with cloud credentials</li>
          <li>Accelerate investigations with AI-based event search</li>
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
