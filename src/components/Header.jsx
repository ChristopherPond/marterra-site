import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="font-extrabold tracking-tight"
            style={{ fontFamily: "Poppins" }}
          >
            MarTerra
          </span>
        </div>

        {/* Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm relative"
          style={{ fontFamily: "Poppins" }}
        >
          {/* PRODUCTS MENU */}
          <div className="relative group">
            <button className="hover:opacity-80">Products ▾</button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 mt-4 w-[720px]">
              <div className="rounded-2xl bg-white text-[#0E1726] shadow-2xl ring-1 ring-black/5 p-6 grid grid-cols-3 gap-4">
                
                {/* Access */}
                <Link
                  to="/products/access"
                  className="rounded-xl p-4 hover:bg-[#F6F8FB]"
                >
                  <div className="text-xs font-semibold text-[#2771E9]">
                    Product
                  </div>
                  <div className="mt-1 font-semibold">Access Management</div>
                  <p className="mt-1 text-xs text-[#555]">
                    Doors, gates, mobile/badge credentials, cloud control.
                  </p>
                  <div className="mt-3 rounded-lg bg-[#F6F8FB] p-2">
                    <img
                      src="/assets/241017_Access_Control_Family_hard_shadow.png"
                      alt="Access"
                      className="h-24 w-full object-contain"
                    />
                  </div>
                  <div className="mt-3 text-xs font-semibold text-[#2771E9]">
                    Explore →
                  </div>
                </Link>

                {/* Cameras - Disabled */}
                <div className="rounded-xl p-4 bg-[#F6F8FB] opacity-60 cursor-not-allowed">
                  <div className="text-xs font-semibold text-[#2771E9]">
                    Product
                  </div>
                  <div className="mt-1 font-semibold">Cameras</div>
                  <p className="mt-1 text-xs text-[#666]">
                    Perimeter & dock monitoring with AI search.
                  </p>
                  <div className="mt-3 rounded-lg bg-white p-2 h-24 flex items-center justify-center text-[#999]">
                    Coming Soon
                  </div>
                </div>

                {/* Intercom - Disabled */}
                <div className="rounded-xl p-4 bg-[#F6F8FB] opacity-60 cursor-not-allowed">
                  <div className="text-xs font-semibold text-[#2771E9]">
                    Product
                  </div>
                  <div className="mt-1 font-semibold">Intercom & Sensors</div>
                  <p className="mt-1 text-xs text-[#666]">
                    2-way video, environmental sensors, alarms.
                  </p>
                  <div className="mt-3 rounded-lg bg-white p-2 h-24 flex items-center justify-center text-[#999]">
                    Coming Soon
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* INDUSTRIES MENU */}
          <div className="relative group">
            <button className="hover:opacity-80">Industries ▾</button>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 mt-4 w-[900px]">
              <div className="rounded-t-2xl bg-white text-[#0E1726] shadow-2xl ring-1 ring-black/5 p-6 grid grid-cols-4 gap-6">

                {/* Marina */}
                <Link
                  to="/industries/marina"
                  className="p-4 rounded-xl hover:bg-[#F6F8FB]"
                >
                  <div className="font-semibold text-sm">Marina & Ports</div>
                  <div className="text-xs text-[#666]">Slips, fuel docks, perimeter.</div>
                  <img
                    src="/assets/industries/marina.png"
                    className="mt-3 rounded-lg h-20 w-full object-cover"
                  />
                  <div className="mt-3 text-xs font-semibold text-[#2771E9]">
                    Explore →
                  </div>
                </Link>

                {/* Venues */}
                <Link
                  to="/industries/venues"
                  className="p-4 rounded-xl hover:bg-[#F6F8FB]"
                >
                  <div className="font-semibold text-sm">Public Venues</div>
                  <div className="text-xs text-[#666]">Arenas & civic centers.</div>
                  <img
                    src="/assets/industries/venues.png"
                    className="mt-3 rounded-lg h-20 w-full object-cover"
                  />
                  <div className="mt-3 text-xs font-semibold text-[#2771E9]">
                    Explore →
                  </div>
                </Link>

                {/* Construction */}
                <Link
                  to="/industries/construction"
                  className="p-4 rounded-xl hover:bg-[#F6F8FB]"
                >
                  <div className="font-semibold text-sm">Construction Sites</div>
                  <div className="text-xs text-[#666]">Yards & laydown zones.</div>
                  <img
                    src="/assets/industries/construction.png"
                    className="mt-3 rounded-lg h-20 w-full object-cover"
                  />
                  <div className="mt-3 text-xs font-semibold text-[#2771E9]">
                    Explore →
                  </div>
                </Link>

                {/* Schools */}
                <Link
                  to="/industries/schools"
                  className="p-4 rounded-xl hover:bg-[#F6F8FB]"
                >
                  <div className="font-semibold text-sm">Schools & Campuses</div>
                  <div className="text-xs text-[#666]">K–12 & higher ed.</div>
                  <img
                    src="/assets/industries/schools.png"
                    className="mt-3 rounded-lg h-20 w-full object-cover"
                  />
                  <div className="mt-3 text-xs font-semibold text-[#2771E9]">
                    Explore →
                  </div>
                </Link>

              </div>

              {/* Footer bar with rounded bottom */}
              <div className="rounded-b-2xl bg-white border-t border-[#E6E9EF] p-4 flex justify-center">
                <Link
                  to="/industries"
                  className="text-sm font-semibold text-[#2771E9] hover:underline"
                >
                  View All Industries →
                </Link>
              </div>
            </div>
          </div>

          <Link to="/services" className="hover:opacity-80">
            Services
          </Link>
          <Link to="/resources" className="hover:opacity-80">
            Resources
          </Link>
          <Link to="/about" className="hover:opacity-80">
            About
          </Link>

          <Link
            to="/demo"
            className="ml-2 rounded-xl bg-[#FF7A00] px-4 py-2 font-semibold text-white hover:bg-[#ff8c1a]"
          >
            Get a Demo
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
