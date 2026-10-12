// @ts-check
const { test, expect } = require("@playwright/test");
const {
  AUDIT_ROUTES,
  AUDIT_VIEWPORTS,
  SMOKE_VIEWPORTS,
  expectsMobileNav,
} = require("./responsive-matrix");

const fullMatrix = process.env.PLAYWRIGHT_FULL_MATRIX === "1";
const ROUTES = AUDIT_ROUTES;
const VIEWPORTS = fullMatrix ? AUDIT_VIEWPORTS : SMOKE_VIEWPORTS;

for (const route of ROUTES) {
  for (const viewport of VIEWPORTS) {
    const label = `${route} @ ${viewport.name} ${viewport.width}×${viewport.height}`;
    const mobileNav = expectsMobileNav(viewport.width);

    test(`${label} — no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await page.locator("header.caits-hdr").waitFor({ state: "visible" });

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      );
      expect(overflow, "page should not scroll horizontally").toBe(false);
    });

    test(`${label} — header navigation mode`, async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto(route, { waitUntil: "domcontentloaded" });
      await page.locator("header.caits-hdr").waitFor({ state: "visible" });

      const burger = page.locator(".caits-hdr-burger");
      const primaryNav = page.getByRole("navigation", { name: "Primary" });

      if (mobileNav) {
        await expect(
          page.getByRole("button", { name: /^open menu$/i }),
        ).toBeVisible();
        await expect(burger).toBeVisible();
        await expect(primaryNav).toBeHidden();
      } else {
        await expect(burger).toBeHidden();
        await expect(primaryNav).toBeVisible();
        await expect(primaryNav.getByRole("link")).toHaveCount(5);
      }
    });
  }
}
