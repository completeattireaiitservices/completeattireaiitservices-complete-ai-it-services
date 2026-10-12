/**
 * Manual responsive audit helper (no Playwright in project).
 * Run with dev server: node scripts/responsive-viewport-audit.mjs
 * Opens checklist + viewport list for QA in the browser console on each route.
 */
const VIEWPORTS = [
  { name: "compact-desktop", w: 1024, h: 768 },
  { name: "laptop-1280", w: 1280, h: 720 },
  { name: "laptop-1366", w: 1366, h: 768 },
  { name: "laptop-1440", w: 1440, h: 900 },
  { name: "fhd", w: 1920, h: 1080 },
  { name: "qhd", w: 2560, h: 1440 },
  { name: "4k", w: 3840, h: 2160 },
  { name: "tablet-sm-portrait", w: 600, h: 800 },
  { name: "ipad-mini-portrait", w: 768, h: 1024 },
  { name: "ipad-portrait", w: 810, h: 1080 },
  { name: "ipad-air-portrait", w: 834, h: 1194 },
  { name: "ipad-pro-portrait", w: 1024, h: 1366 },
  { name: "tablet-sm-landscape", w: 800, h: 600 },
  { name: "ipad-mini-landscape", w: 1024, h: 768 },
  { name: "ipad-landscape", w: 1080, h: 810 },
  { name: "ipad-air-landscape", w: 1194, h: 834 },
  { name: "ipad-pro-landscape", w: 1366, h: 1024 },
];

const ROUTES = [
  "/",
  "/services",
  "/about",
  "/blog",
  "/contact-us",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
  "/legal/satisfaction-refund-policy",
];

console.log("Complete AI IT Services — responsive audit checklist\n");
console.log("Set DevTools device dimensions, then for each route verify:");
console.log("- document.documentElement.scrollWidth <= window.innerWidth + 1");
console.log("- Header nav: hamburger below 1024px, centered nav at 1024px+");
console.log("- No clipped hero, forms, or footer links\n");
console.log("Routes:", ROUTES.join(", "));
console.log("\nViewports:");
for (const v of VIEWPORTS) {
  console.log(`  ${v.name}: ${v.w}×${v.h}`);
}
