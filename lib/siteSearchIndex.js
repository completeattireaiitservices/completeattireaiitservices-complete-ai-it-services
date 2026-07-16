import { BLOG_POSTS } from "./blogPosts";

/**
 * @typedef {{ id: string; title: string; href: string; description: string; group: string; searchText: string }} SiteSearchEntry
 */

/** @type {Omit<SiteSearchEntry, "searchText">[]} */
const STATIC_PAGES = [
  {
    id: "home",
    title: "Home",
    href: "/",
    description: "Complete AI IT Services—AI automation, n8n, and intelligent operations in Pleasanton, CA.",
    group: "Site",
  },
  {
    id: "services",
    title: "Services",
    href: "/services",
    description: "Our AI and automation services, integrations, and implementation support.",
    group: "Site",
  },
  {
    id: "blog",
    title: "The Blog",
    href: "/blog",
    description: "Thought leadership on AI, RAG, SEO, n8n, quote-to-cash, and more.",
    group: "Site",
  },
  {
    id: "about",
    title: "About Us",
    href: "/about",
    description:
      "Bulletproof Agentic AI backbones, founder Kavitha Raman, and our three-pillar QA and data governance standard.",
    group: "Site",
  },
  {
    id: "contact",
    title: "Contact us",
    href: "/contact-us",
    description: "Get in touch, book a call, and request a quote or discovery session.",
    group: "Site",
  },
  {
    id: "privacy",
    title: "Privacy policy",
    href: "/legal/privacy-policy",
    description:
      "How Complete AI IT Services handles website data, client RAG/AI processing, cookies, CCPA rights, and security.",
    group: "Legal",
  },
  {
    id: "terms",
    title: "Terms of service",
    href: "/legal/terms-of-service",
    description:
      "Service terms for AI automation engagements: accuracy, QA retainer, fees, IP, liability, and California law.",
    group: "Legal",
  },
  {
    id: "refund",
    title: "Satisfaction & Refund Policy",
    href: "/legal/satisfaction-refund-policy",
    description:
      "Milestone-based refunds for setup fees, monthly retainer guarantee, ownership after cancellation, and billing FAQ.",
    group: "Legal",
  },
];

/**
 * @param {Omit<SiteSearchEntry, "searchText">} row
 * @returns {SiteSearchEntry}
 */
function withSearchText(row) {
  const searchText = [row.title, row.description, row.href, row.id, row.group]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return { ...row, searchText };
}

/** All pages and blog posts, searchable in the header modal. */
export const SITE_SEARCH_ENTRIES = (() => {
  const fromBlog = BLOG_POSTS.map((p) =>
    withSearchText({
      id: `blog-${p.slug}`,
      title: p.title,
      href: `/blog/${p.slug}`,
      description: p.date,
      group: "Blog",
    }),
  );
  return [...STATIC_PAGES.map(withSearchText), ...fromBlog];
})();

/**
 * @param {string} query
 * @param {SiteSearchEntry[]} entries
 * @returns {SiteSearchEntry[]}
 */
export function filterSiteSearch(query, entries = SITE_SEARCH_ENTRIES) {
  const q = String(query).trim().toLowerCase();
  if (!q) {
    // Show key site pages first, then a sample of blog posts (full list is long).
    const siteIds = new Set(STATIC_PAGES.map((r) => r.id));
    const site = entries.filter((e) => siteIds.has(e.id));
    const rest = entries.filter((e) => e.group === "Blog").slice(0, 6);
    return [...site, ...rest];
  }
  const parts = q.split(/\s+/).filter(Boolean);
  return entries.filter((e) => {
    const t = e.searchText;
    return parts.every((p) => t.includes(p));
  });
}
