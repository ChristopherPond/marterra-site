import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

function AccessProductPage({ onNav }) {
  return (
    <>
      <Breadcrumbs
        onNav={onNav}
        items={[
          { label: "Home", key: "home" },
          { label: "Products", key: null },
          { label: "Access Management", key: null },
        ]}
      />

      <section className="bg-gradient-to-b from-[#0E1726] to-[#152238] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1
              className="text-3xl md:text-5xl font-extrabold"
              style={{ fontFamily: "Poppins" }}
            >
              Access Management — Secure Every Door with Cloud Control
            </h1>
            <p className="mt-4 text-white/85">
              Badge, mobile, and cloud-based access that scales from a single
              gate to global facilities, managed through a single, intuitive
              platform.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                className="rounded-xl bg-[#2771E9] px-5 py-3 font-semibold"
                href="#demo"
              >
                Request an Access Audit
              </a>
              <a
                className="rounded-xl border border-white/20 px-5 py-3 font-semibold"
                href="#specs"
              >
                View Specs
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            <img
              src="/assets/241017_Access_Control_Family_hard_shadow.png"
              alt="Access Control Hardware"
              className="mx-auto h-[420px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm text-[#444]">
            We&apos;ll expand this page with detailed benefits, door counts,
            credential models, and integration options.
          </p>
        </div>
      </section>
    </>
  );
}

export default AccessProductPage;
