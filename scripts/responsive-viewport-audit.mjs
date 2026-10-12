/**
 * Manual responsive audit helper.
 * Run: node scripts/responsive-viewport-audit.mjs
 *
 * Automated equivalent (production):
 *   npm run test:e2e:prod:full
 */
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { AUDIT_ROUTES, AUDIT_VIEWPORTS } = require("../tests/responsive-matrix.js");

console.log("Complete AI IT Services — responsive audit checklist\n");
console.log("Set DevTools device dimensions, then for each route verify:");
console.log("- document.documentElement.scrollWidth <= window.innerWidth + 1");
console.log("- Header nav: hamburger below 1024px, centered nav at 1024px+");
console.log("- No clipped hero, forms, or footer links\n");
console.log(
  "Or run automated full matrix: npm run test:e2e:prod:full\n",
);
console.log("Routes:", AUDIT_ROUTES.join(", "));
console.log("\nViewports:");
for (const v of AUDIT_VIEWPORTS) {
  console.log(`  ${v.name}: ${v.width}×${v.height}`);
}
