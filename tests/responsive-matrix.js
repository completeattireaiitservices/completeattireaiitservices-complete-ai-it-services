/** @typedef {{ name: string; width: number; height: number }} ViewportSpec */

/** Routes aligned with scripts/responsive-viewport-audit.mjs */
const AUDIT_ROUTES = [
  "/",
  "/services",
  "/about",
  "/contact-us",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/satisfaction-refund-policy",
];

/** All 17 desktop/laptop + tablet viewports from the manual audit checklist */
/** @type {ViewportSpec[]} */
const AUDIT_VIEWPORTS = [
  { name: "compact-desktop", width: 1024, height: 768 },
  { name: "laptop-1280", width: 1280, height: 720 },
  { name: "laptop-1366", width: 1366, height: 768 },
  { name: "laptop-1440", width: 1440, height: 900 },
  { name: "fhd", width: 1920, height: 1080 },
  { name: "qhd", width: 2560, height: 1440 },
  { name: "4k", width: 3840, height: 2160 },
  { name: "tablet-sm-portrait", width: 600, height: 800 },
  { name: "ipad-mini-portrait", width: 768, height: 1024 },
  { name: "ipad-portrait", width: 810, height: 1080 },
  { name: "ipad-air-portrait", width: 834, height: 1194 },
  { name: "ipad-pro-portrait", width: 1024, height: 1366 },
  { name: "tablet-sm-landscape", width: 800, height: 600 },
  { name: "ipad-mini-landscape", width: 1024, height: 768 },
  { name: "ipad-landscape", width: 1080, height: 810 },
  { name: "ipad-air-landscape", width: 1194, height: 834 },
  { name: "ipad-pro-landscape", width: 1366, height: 1024 },
];

/** Primary nav uses Tailwind `lg` (min-width 1024px). */
function expectsMobileNav(width) {
  return width < 1024;
}

/** Quick smoke: iPad Mini portrait + landscape (one entry per size; avoids duplicate 1024×768). */
/** @type {ViewportSpec[]} */
const SMOKE_VIEWPORTS = AUDIT_VIEWPORTS.filter((v) =>
  ["ipad-mini-portrait", "ipad-mini-landscape"].includes(v.name),
);

module.exports = {
  AUDIT_ROUTES,
  AUDIT_VIEWPORTS,
  SMOKE_VIEWPORTS,
  expectsMobileNav,
};
