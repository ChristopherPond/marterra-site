import React from "react";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function MarinaIndustryPage({ onNav }) {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        onNav={onNav}
        items={[
          { label: "Home", key: "home" },
          { label: "Industries", key: null },
          { label: "Marina & Port Security", key: null },
        ]}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src="/assets/industries/marina.png"
          alt="Marina Security"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0E1726]/60" />

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Marina & Port Security
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-3xl text-white/85 text-lg"
          >
            Protect slips, docks, fuel docks, and water-side perimeters with a
            unified cloud-managed physical security platform engineered for
            marine environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#demo"
              className="rounded-xl bg-[#2771E9] px-5 py-3 font-semibold hover:bg-[#3A88FF] transition-colors"
            >
              Get a Demo
            </a>
            <a
              href="#audit"
              className="rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Free Security Audit
            </a>
            <a
              href="/assets/case-studies/marina-case-study.pdf"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Download Case Study
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-extrabold"
            style={{ fontFamily: "Poppins" }}
          >
            Built for Demanding Waterfront Environments
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Slip & Dock Monitoring",
                desc: "AI-powered cameras provide live visibility and anomaly detection across docks, walkways, and slips.",
                icon: "/assets/icons/Adaptive Image.png",
              },
              {
                title: "Fuel Dock Safety",
                desc: "Monitor activity with smart alerts to identify unauthorized access or unsafe behavior.",
                icon: "/assets/icons/Access Control.png",
              },
              {
                title: "Access Control for Tenants",
                desc: "Manage gates, docks, storage areas, and facilities with mobile and badge-based credentials.",
                icon: "/assets/icons/Access & Alarms.png",
              },
              {
                title: "After-Hours Alerts",
                desc: "Receive real-time notifications for unexpected motion, perimeter breach, or water-side access.",
                icon: "/assets/icons/AD33.png",
              },
              {
                title: "360° Perimeter Awareness",
                desc: "Integrate cameras, sensors, and alarms into a unified command view.",
                icon: "/assets/icons/Ai Analytics.png",
              },
              {
                title: "Environment-Ready Hardware",
                desc: "IP67-rated, NDAA-compliant hardware designed for harsh salt-air environments.",
                icon: "/assets/icons/Streamline Cost.png",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-[#E6E9EF] p-6 bg-white hover:shadow-lg transition-shadow"
              >
                <img src={feature.icon} alt="" className="h-10 w-10 mb-4" />
                <div className="text-lg font-semibold">{feature.title}</div>
                <p className="mt-2 text-[#555] text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE SPLIT */}
      <section className="bg-[#F6F8FB] text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
          <motion.img
            src="/assets/industries/marina.png"
            className="rounded-2xl w-full object-cover shadow-lg"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl font-extrabold"
              style={{ fontFamily: "Poppins" }}
            >
              Designed for Coastal Reliability
            </h3>
            <p className="text-[#444] mt-3 leading-relaxed">
              Whether managing a marina with 50 slips or a port with thousands
              of daily movements, MarTerra ensures operational visibility,
              tenant safety, and always-on protection.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#333] list-disc pl-5">
              <li>Salt-air tested hardware</li>
              <li>24/7 remote command visibility</li>
              <li>Automated alerting for water-side incursions</li>
              <li>Integrates with access control & sensors</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#0E1726] text-white py-16">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="uppercase tracking-wide text-white/70 text-sm">
              Ready to secure your marina?
            </div>
            <h3
              className="text-2xl md:text-3xl font-extrabold mt-2"
              style={{ fontFamily: "Poppins" }}
            >
              Get a tailored waterfront security plan
            </h3>
          </div>

          <div className="flex gap-4">
            <a
              href="#demo"
              className="rounded-xl bg-[#2771E9] px-5 py-3 font-semibold hover:bg-[#3A88FF]"
            >
              Get a Demo
            </a>
            <a
              href="#audit"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Free Security Audit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
