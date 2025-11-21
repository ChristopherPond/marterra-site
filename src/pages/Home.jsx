import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#0E1726] text-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden min-h-[80vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          preload="auto"
          poster="/assets/250228_Family_Portrait_Square0120_Levels-Edit.png"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/HomePageAnimation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1726]/85 via-[#0E1726]/70 to-[#0E1726]" />

        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "Poppins" }}
          >
            AI-Powered Physical Security  
            <br />
            for Modern Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="max-w-3xl text-white/80 text-lg"
          >
            Transform your security approach with our comprehensive, cloud-based physical AI security solution. Experience a unified platform that offers a range of tailored security services, empowering you to proactively monitor and identify security risks. Stay ahead of potential threats as our system continuously enhances its intelligence, providing unparalleled protection and peace of mind. Secure your environment, harnessing the power of AI

          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 flex gap-4"
          >
            <a
              className="rounded-xl bg-[#2771E9] px-6 py-3 font-semibold hover:bg-[#3A88FF] transition-colors"
              href="#demo"
            >
              Get a Demo
            </a>
            <a
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white/85 hover:bg-white/10 transition-colors"
              href="#audit"
            >
              Free Security Audit
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-[#0E1726] py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Why MarTerra
          </h2>

          <p className="text-white/70 max-w-2xl mb-10">
            A unified, AI-enhanced security ecosystem that empowers organizations to
            detect, deter, and respond with unparalleled insight.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "High Performance",
                desc: "Accelerate rollout and reduce operational overhead.",
              },
              {
                title: "Predictive Security",
                desc: "AI-driven analytics identify threats before they escalate.",
              },
              {
                title: "Critical Infrastructure Ready",
                desc: "Built for ports, marinas, campuses, and high-value environments.",
              },
              {
                title: "Unified Cloud Platform",
                desc: "Video, access, sensors, and analytics — all in one dashboard.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <div className="font-semibold text-white">{item.title}</div>
                <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* MarTerra Features */}
<div className="mx-auto max-w-6xl px-6">
  <section id="features" className="mt-16">
    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
      MarTerra Features
    </h2>

    <p className="text-white/70 max-w-3xl mb-8">
      Built on a unified, cloud-connected platform, MarTerra combines
      real-time visibility, AI, and smart integrations to give you a 
      continuously improving security posture.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {/* Feature Card 1 */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
        <div className="flex items-start gap-3">
          <img src="/assets/icons/Voice Alert.png" className="h-7 w-7" />
          <div>
            <h3 className="text-white font-semibold mb-1">
              Real-Time Monitoring & Alerts
            </h3>
            <p className="text-white/80">
              With cloud connectivity, users get instant alerts for unusual 
              activities — from unauthorized access to motion anomalies or 
              environmental changes.
            </p>
          </div>
        </div>
        <p className="mt-3 text-[#9CC4FF] text-sm">
          Respond faster, prevent incidents, and reduce risk in real time.
        </p>
      </div>

      {/* Feature Card 2 */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
        <div className="flex items-start gap-3">
          <img src="/assets/icons/Integration.png" className="h-7 w-7" />
          <div>
            <h3 className="text-white font-semibold mb-1">
              Smart Integration Capabilities
            </h3>
            <p className="text-white/80">
              Integrates with identity systems, monitoring, and access control 
              for unified situational awareness.
            </p>
          </div>
        </div>
        <p className="mt-3 text-[#9CC4FF] text-sm">
          Gives you a 360° view of your facilities and operations.
        </p>
      </div>

      {/* Feature Card 3 */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
        <div className="flex items-start gap-3">
          <img src="/assets/icons/Ai Analytics.png" className="h-7 w-7" />
          <div>
            <h3 className="text-white font-semibold mb-1">
              AI-Powered Intelligence
            </h3>
            <p className="text-white/80">
              Machine learning and computer vision detect anomalies and 
              identify patterns automatically.
            </p>
          </div>
        </div>
        <p className="mt-3 text-[#9CC4FF] text-sm">
          Transforms your cameras into proactive detection tools.
        </p>
      </div>

      {/* Feature Card 4 */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
        <div className="flex items-start gap-3">
          <img src="/assets/icons/Scalable.png" className="h-7 w-7" />
          <div>
            <h3 className="text-white font-semibold mb-1">
              Scalable & Future-Proof
            </h3>
            <p className="text-white/80">
              Add new cameras, sensors, or access points across any number 
              of sites in minutes.
            </p>
          </div>
        </div>
        <p className="mt-3 text-[#9CC4FF] text-sm">
          Perfect for growing or distributed organizations.
        </p>
      </div>

      {/* Feature Card 5 */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
        <div className="flex items-start gap-3">
          <img src="/assets/icons/Auto Software Update.png" className="h-7 w-7" />
          <div>
            <h3 className="text-white font-semibold mb-1">
              Automatic Updates & Continuous Innovation
            </h3>
            <p className="text-white/80">
              Software and firmware updates deploy automatically — 
              no downtime or maintenance windows.
            </p>
          </div>
        </div>
        <p className="mt-3 text-[#9CC4FF] text-sm">
          Your system improves every single month.
        </p>
      </div>

      {/* Feature Card 6 */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
        <div className="flex items-start gap-3">
          <img src="/assets/icons/Streamline Cost.png" className="h-7 w-7" />
          <div>
            <h3 className="text-white font-semibold mb-1">
              Reduced Total Cost of Ownership
            </h3>
            <p className="text-white/80">
              With no on-prem hardware or maintenance costs, organizations 
              dramatically reduce operational overhead.
            </p>
          </div>
        </div>
        <p className="mt-3 text-[#9CC4FF] text-sm">
          High performance, lower cost, and faster ROI.
        </p>
      </div>

    </div>
  </section>
</div>

      {/* INDUSTRIES & PRODUCTS ENTRY */}
      <section className="bg-[#0E1726] py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            className="text-3xl font-extrabold mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Explore Solutions
          </h2>

          <p className="text-white/70 max-w-2xl mb-10">
            Tailored for marinas, events, construction sites, schools, and
            enterprise-scale operations.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="/industries"
              className="rounded-xl bg-[#2771E9] px-6 py-3 font-semibold text-center hover:bg-[#3A88FF] transition-colors"
            >
              Explore Industries →
            </Link>

            <Link
              to="/products"
              className="rounded-xl bg-white/10 border border-white/20 px-6 py-3 font-semibold text-center text-white/85 hover:bg-white/5 transition-colors"
            >
              Explore Products →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
