import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-[#0E1726]">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <img
            src="/assets/MarTerra-Logomark-Transparent.png"
            alt="MarTerra"
            className="h-8 w-auto"
          />
          <p className="text-sm text-[#444]">
            Unified, AI-powered physical security solutions. Local expertise,
            global reach.
          </p>
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
            <li>+1 (555) 555-5555</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E6E9EF]">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <span className="text-xs text-[#888]">
            © {new Date().getFullYear()} MarTerra. All rights reserved.
          </span>
          <img
            src="/assets/MarTerra-Logomark-BlueCircle.png"
            alt="Mark"
            className="h-8 w-8"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
