import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  // Split pathname ("/industries/marina" → ["industries","marina"])
  const segments = location.pathname
    .split("/")
    .filter(Boolean);

  // If no segments (home page), return nothing
  if (segments.length === 0) return null;

  let path = "";

  return (
    <nav className="px-6 py-3 text-sm text-gray-400">
      {segments.map((segment, index) => {
        path += `/${segment}`;
        const isLast = index === segments.length - 1;

        return (
          <span key={path}>
            {!isLast ? (
              <Link className="text-blue-500 hover:text-blue-700" to={path}>
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            ) : (
              <span className="text-gray-500">
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </span>
            )}

            {!isLast && <span className="mx-2">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
