// @ts-check
const { test, expect } = require("@playwright/test");

const ROUTES = ["/", "/services", "/contact-us"];

/** @type {{ name: string; width: number; height: number; mobileNav: boolean }[]} */
const VIEWPORTS = [
  {
    name: "tablet-portrait-768",
    width: 768,
    height: 1024,
    mobileNav: true,
  },
  {
    name: "tablet-landscape-1024",
    width: 1024,
    height: 768,
    mobileNav: false,
  },
];

for (const route of ROUTES) {
  for (const viewport of VIEWPORTS) {
    const label = `${route} @ ${viewport.width}×${viewport.height}`;

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

      if (viewport.mobileNav) {
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
