import React from "react";

/**
 * When Tailwind’s emitted CSS chunks fail to load (stale .next, OneDrive locks,
 * wrong dev root), utility classes are inert and the UI collapses to browser defaults.
 * These minimal rules mirror our layout breakpoints so the blog + header stay usable.
 */
export const SITE_HEADER_FALLBACK_CSS = `
.caits-hdr{box-sizing:border-box;position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:.75rem;max-width:80rem;margin-left:auto;margin-right:auto;padding:.75rem;justify-content:flex-end}
.caits-hdr.caits-hdr--withLogo{justify-content:space-between}
@media (min-width:768px){
  .caits-hdr{flex-wrap:nowrap;padding:1rem 2rem;gap:1.5rem}
}
.caits-hdr-desktop{box-sizing:border-box;display:none!important;position:absolute;left:50%;transform:translateX(-50%);align-items:center;gap:2rem;font-size:16px;font-weight:400;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.95)}
.caits-hdr-burger{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;padding:.5rem;color:#fff;border-radius:.25rem}
.caits-hdr-mobile{box-sizing:border-box;display:none;position:absolute;left:0;right:0;top:100%;z-index:50;padding:.75rem;border-top:1px solid rgba(255,255,255,.1);background:rgba(2,6,23,.95);box-shadow:0 12px 40px rgba(0,0,0,.35)}
.caits-hdr-mobile:not([hidden]){display:block}
@media (min-width:768px){
  .caits-hdr-desktop{display:flex!important}
  .caits-hdr-burger{display:none!important}
  .caits-hdr-mobile{display:none!important}
}
@media (max-width:767.98px){
  .caits-hdr-desktop{display:none!important}
  .caits-hdr-burger{display:inline-flex!important}
}
.caits-hdr-tools{box-sizing:border-box;display:flex;align-items:center;gap:.5rem;margin-left:auto}
@media (min-width:768px){
  .caits-hdr-tools{gap:1rem}
}
`;

export const BLOG_ARTICLE_FALLBACK_CSS = `
.caits-blog-main{box-sizing:border-box;width:100%;background:#fff;color:#171717;text-align:left;font-family:"Share",Arial,sans-serif}
.caits-blog-shell{box-sizing:border-box;width:100%;max-width:72rem;margin-left:auto;margin-right:auto;padding:2rem 1.25rem 5rem}
@media (min-width:640px){
  .caits-blog-shell{padding-top:2.5rem;padding-left:2rem;padding-right:2rem}
}
@media (min-width:1024px){
  .caits-blog-shell{padding-left:3rem;padding-right:3rem;padding-top:3rem}
}
.caits-blog-grid{box-sizing:border-box;display:flex;flex-direction:column;gap:2.5rem;margin-top:1.5rem}
@media (min-width:1024px){
  .caits-blog-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:0;row-gap:0;margin-top:2rem}
  .caits-blog-article{grid-column:span 8/span 8;padding-right:2rem;min-width:0}
  .caits-blog-aside{grid-column:span 4/span 4;border-left:1px solid #e5e5e5;padding-left:2rem;min-width:0;border-top:0!important;padding-top:0!important}
}
@media (max-width:1023.98px){
  .caits-blog-aside{border-top:1px solid #e5e5e5;padding-top:2.5rem}
}
.caits-blog-measure{box-sizing:border-box;width:100%;max-width:48rem}
`;

export function SiteHeaderFallbackCss() {
  return <style dangerouslySetInnerHTML={{ __html: SITE_HEADER_FALLBACK_CSS }} />;
}

export function BlogArticleFallbackCss() {
  return <style dangerouslySetInnerHTML={{ __html: BLOG_ARTICLE_FALLBACK_CSS }} />;
}
