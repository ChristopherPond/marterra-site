import React, { useState } from "react";

function Header({ onNav }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/MarTerra-Logomark-Transparent.png" alt="MarTerra" className="h-8 w-auto" />
          <span className="font-extrabold tracking-tight" style={{fontFamily:'Poppins'}}>MarTerra</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{fontFamily:'Poppins'}}>
          {/* PRODUCTS MEGA MENU */}
          <div className="relative group">
            <button className="hover:opacity-80">Products ▾</button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 mt-4 w-[720px]">
              <div className="rounded-2xl bg-white text-[#0E1726] shadow-2xl ring-1 ring-black/5 p-6 grid grid-cols-3 gap-4">
                {/* Access links to FULL product page */}
                <a onClick={() => onNav('access')} className="rounded-xl p-4 hover:bg-[#F6F8FB] cursor-pointer">
                  <div className="text-xs font-semibold text-[#2771E9]">Product</div>
                  <div className="mt-1 font-semibold">Access Management</div>
                  <p className="mt-1 text-xs text-[#555]">Doors, gates, mobile/badge credentials, cloud control.</p>
                  <div className="mt-3 rounded-lg bg-[#F6F8FB] p-2">
                    <img src="/assets/241017_Access_Control_Family_hard_shadow.png" alt="Access" className="h-24 w-full object-contain" />
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs font-semibold text-[#2771E9]">View Product Page →</div>
                </a>
                <a className="rounded-xl p-4 hover:bg-[#F6F8FB] opacity-60 cursor-not-allowed">
                  <div className="text-xs font-semibold text-[#2771E9]">Product</div>
                  <div className="mt-1 font-semibold">Cameras</div>
                  <p className="mt-1 text-xs text-[#555]">Perimeter, dock, and LPR coverage with AI search.</p>
                  <div className="mt-3 rounded-lg bg-[#F6F8FB] p-2">
                    <img src="/assets/250228_Family_Portrait_Square0120_Levels-Edit.png" alt="Cameras" className="h-24 w-full object-contain" />
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs text-[#888]">Coming soon</div>
                </a>
                <a className="rounded-xl p-4 hover:bg-[#F6F8FB] opacity-60 cursor-not-allowed">
                  <div className="text-xs font-semibold text-[#2771E9]">Product</div>
                  <div className="mt-1 font-semibold">Intercom & Sensors</div>
                  <p className="mt-1 text-xs text-[#555]">2‑way video, environmental sensors, alarms.</p>
                  <div className="mt-3 rounded-lg bg-[#F6F8FB] p-2">
                    <img src="/assets/250228_Family_Portrait_Square0120_Levels-Edit.png" alt="Intercom Sensors" className="h-24 w-full object-contain" />
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs text-[#888]">Coming soon</div>
                </a>
              </div>
            </div>
          </div>

          {/* INDUSTRIES MEGA MENU */}
          <div className="relative group">
            <button className="hover:opacity-80">Industries ▾</button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 mt-4 w-[720px]">
              <div className="rounded-2xl bg-white text-[#0E1726] shadow-2xl ring-1 ring-black/5 p-6 grid grid-cols-3 gap-4">
                {/* Marina links to FULL industry page */}
                <a onClick={() => onNav('marina')} className="rounded-xl p-4 hover:bg-[#F6F8FB] cursor-pointer">
                  <div className="text-xs font-semibold text-[#2771E9]">Industry</div>
                  <div className="mt-1 font-semibold">Marina & Port Security</div>
                  <p className="mt-1 text-xs text-[#555]">Gates, slips, fuel docks, perimeter.</p>
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <video className="w-full h-24 object-cover" src="/assets/13483787_3840_2160_30fps.mp4" autoPlay muted loop playsInline />
                  </div>
                  <div className="mt-3 inline-flex items-center text-xs font-semibold text-[#2771E9]">View Industry Page →</div>
                </a>
                <div className="rounded-xl p-4 border border-dashed border-[#E6E9EF] text-[#888]">
                  <div className="text-xs font-semibold text-[#2771E9]/60">Industry</div>
                  <div className="mt-1 font-semibold">Schools & Campuses</div>
                  <p className="mt-1 text-xs">Coming soon</p>
                </div>
                <div className="rounded-xl p-4 border border-dashed border-[#E6E9EF] text-[#888]">
                  <div className="text-xs font-semibold text-[#2771E9]/60">Industry</div>
                  <div className="mt-1 font-semibold">Construction Sites</div>
                  <p className="mt-1 text-xs">Coming soon</p>
                </div>
              </div>
            </div>
          </div>

          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#resources" className="hover:opacity-80">Resources</a>
          <a href="#about" className="hover:opacity-80">About</a>
          <a className="ml-2 rounded-xl bg-[#FF7A00] px-4 py-2 font-semibold" href="#demo">Get a Demo</a>
        </nav>
      </div>
    </header>
  )
}

function Breadcrumbs({ items, onNav }) {
  return (
    <nav className="bg-white text-[#0E1726] border-b border-[#E6E9EF]" aria-label="Breadcrumb">
      <div className="mx-auto max-w-6xl px-6 py-3 text-sm">
        {items.map((item, idx) => (
          <span key={idx}>
            {idx > 0 && <span className="mx-2 text-[#888]">/</span>}
            {item.key ? (
              <button onClick={() => onNav(item.key)} className="text-[#2771E9] hover:underline">
                {item.label}
              </button>
            ) : (
              <span className="text-[#444]">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

function Home({ onNav }) {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover opacity-70" src="/assets/250801_Partner_Loop 2.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1726]/80 via-[#0E1726]/60 to-[#0E1726]" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{fontFamily:'Poppins'}}>AI Security Solutions — from Cloud to Coast</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">Unify video, access control, intercom, sensors and alarms on a single cloud-managed platform. Deploy fast, scale easily, and get proactive, real-time protection.</p>
          <div className="mt-8 flex gap-4">
            <a className="rounded-xl bg-[#2771E9] px-5 py-3 font-semibold" href="#demo">Get a Demo</a>
            <a className="rounded-xl border border-white/20 px-5 py-3 font-semibold" href="#audit">Free Security Audit</a>
          </div>
<div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl md:text-4xl font-extrabold" style={{fontFamily:'Poppins'}}>Why MarTerra?</h2>
          <p className="mt-3 max-w-3xl text-[#444]">Secure, intelligent, and unified — built for performance, scalability, and real‑world outcomes.</p>
          <div className="mt-8">
            <p className="text-sm text-[#555]">Security & Compliance — Achieve modernization without disruption, while integrating legacy systems.</p>
            <a href="#about" className="inline-flex items-center text-[#2771E9] font-semibold mt-2">Learn more about us →</a>
          </div>
        </div>
         <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
    <div className="font-semibold" style={{fontFamily:'Poppins'}}>High Performance, Lower Cost, Faster ROI</div>
    <p className="mt-2 text-white/85 text-sm">High performance, lower cost, and faster ROI.</p>
  </div>
  <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
    <div className="font-semibold" style={{fontFamily:'Poppins'}}>Predictive Security</div>
    <p className="mt-2 text-white/85 text-sm">Proactively detect risks and adapt in real time.</p>
  </div>
  <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
    <div className="font-semibold" style={{fontFamily:'Poppins'}}>Secure Critical Infrastructure</div>
    <p className="mt-2 text-white/85 text-sm">Modernize your perimeter and access control systems with cloud-based integration.</p>
  </div>
  <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
    <div className="font-semibold" style={{fontFamily:'Poppins'}}>Protect High-Value Assets</div>
    <p className="mt-2 text-white/85 text-sm">Safeguard operations through AI analytics, automation, and intelligence.</p>
  </div>
</div>
<div className="mt-4 text-xs text-white/70">
  Security &amp; Compliance — Achieve modernization without disruption, while integrating legacy systems.
</div>
        </div>
      </section>
      {/* MARINA PREVIEW */}
      <section id="marina" className="relative isolate overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src="/assets/13483787_3840_2160_30fps.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-[#0E1726]/60" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <h2 className="text-3xl md:text-5xl font-extrabold" style={{fontFamily:'Poppins'}}>Marina & Port Security — Unified, Cloud‑Managed</h2>
          <p className="mt-4 text-white/85">Detect, deter, and respond across docks, slips, and fuel docks on one platform.</p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-xl bg-[#2771E9] px-4 py-2 font-semibold" onClick={() => onNav('marina')}>View Industry Page</button>
          </div>
        </div>
      </section>

      {/* ACCESS PREVIEW */}
      <section id="access" className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-20 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold" style={{fontFamily:'Poppins'}}>Access Management — Secure Every Door with Cloud Control</h3>
            <p className="mt-4 text-[#444]">Badge, mobile, and cloud-based access that scales from a single gate to global facilities.</p>
            <div className="mt-8 flex gap-3">
              <a className="rounded-xl bg-[#0E1726] text-white px-5 py-3 font-semibold" href="#">Request an Access Audit</a>
              <button className="rounded-xl border border-[#E6E9EF] px-5 py-3 font-semibold" onClick={() => onNav('access')}>View Product Page</button>
            </div>
          </div>
          <div className="rounded-2xl bg-[#F6F8FB] p-6">
            <img src="/assets/241017_Access_Control_Family_hard_shadow.png" alt="Access Control Hardware" className="mx-auto h-[420px] w-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}

function MarinaIndustryPage({ onNav }) {
  return (
    <>
      <Breadcrumbs onNav={onNav} items={[{label:'Home', key:'home'},{label:'Industries', key:null},{label:'Marina & Port Security', key:null}]} />
      {/* MARINA HERO */}
      <section className="relative isolate overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src="/assets/13483787_3840_2160_30fps.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-[#0E1726]/60" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">Industry</div>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold" style={{fontFamily:'Poppins'}}>Marina & Port Security — Unified, Cloud‑Managed</h1>
            <p className="mt-4 text-white/85">Detect, deter, and respond across docks, slips, fuel docks, and perimeter gates — on one platform.</p>
            <div className="mt-6 flex gap-3">
              <a className="rounded-xl bg-[#2771E9] px-4 py-2 font-semibold" href="#demo">Get a Sector Demo</a>
              <a className="rounded-xl border border-white/20 px-4 py-2 font-semibold" href="#usecases">View Use Cases</a>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified content placeholder */}
      <section className="bg-white text-[#0E1726]"><div className="mx-auto max-w-6xl px-6 py-16">[Industry content continues — Pain Points, Stack, Use Cases, Outcomes, CTA]</div></section>
    </>
  )
}

function AccessProductPage({ onNav }) {
  return (
    <>
      <Breadcrumbs onNav={onNav} items={[{label:'Home', key:'home'},{label:'Products', key:null},{label:'Access Management', key:null}]} />
      {/* PRODUCT HERO */}
      <section className="bg-gradient-to-b from-[#0E1726] to-[#152238] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold" style={{fontFamily:'Poppins'}}>Access Management — Secure Every Door with Cloud Control</h1>
            <p className="mt-4 text-white/85">Badge, mobile, and cloud-based access that scales from a single gate to global facilities.</p>
            <div className="mt-6 flex gap-3">
              <a className="rounded-xl bg-[#2771E9] px-5 py-3 font-semibold" href="#demo">Request an Access Audit</a>
              <a className="rounded-xl border border-white/20 px-5 py-3 font-semibold" href="#specs">View Specs</a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
            <img src="/assets/241017_Access_Control_Family_hard_shadow.png" alt="Access Control Hardware" className="mx-auto h-[420px] w-auto object-contain" />
          </div>
        </div>
      </section>
      <section className="bg-white text-[#0E1726]"><div className="mx-auto max-w-6xl px-6 py-16">[Product content continues — Benefits, Specs, Integrations, Warranty]</div></section>
    </>
  )
}

export default function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="min-h-screen bg-[#0E1726] text-white">
      <Header onNav={setPage} />
      {page === 'home' && <Home onNav={setPage} />}
      {page === 'marina' && <MarinaIndustryPage onNav={setPage} />}
      {page === 'access' && <AccessProductPage onNav={setPage} />}
      {/* FOOTER */}
      <footer className="bg-white text-[#0E1726]">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <img src="/assets/MarTerra-Logomark-Transparent.png" alt="MarTerra" className="h-8 w-auto" />
            <p className="text-sm text-[#444]">Unified, AI‑powered physical security solutions. Local expertise, global reach.</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Explore</div>
            <ul className="mt-3 space-y-2 text-[#444]">
              <li>Products</li>
              <li>Industries</li>
              <li>Services</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-[#444]">
              <li>info@marterra.example</li>
              <li>+1 (555) 555‑5555</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E6E9EF]">
          <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
            <span className="text-xs text-[#888]">© {new Date().getFullYear()} MarTerra. All rights reserved.</span>
            <img src="/assets/MarTerra-Logomark-BlueCircle.png" alt="Mark" className="h-8 w-8" />
          </div>
        </div>
      </footer>
    </div>
  );
}
