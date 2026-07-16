"use client";

import React, { useId, useState } from "react";
import clsx from "clsx";

/**
 * Expandable FAQ list with a small triangle indicator.
 *
 * @param {{
 *   items: { q: string; a: string }[];
 *   className?: string;
 *   itemClassName?: string;
 *   questionClassName?: string;
 *   answerClassName?: string;
 *   defaultOpenIndex?: number | null;
 * }} props
 */
export default function FaqAccordion({
  items,
  className,
  itemClassName,
  questionClassName,
  answerClassName,
  defaultOpenIndex = null,
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(
    typeof defaultOpenIndex === "number" ? defaultOpenIndex : null,
  );

  return (
    <ul className={clsx("space-y-3", className)} role="list">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li
            key={item.q}
            className={clsx(
              "overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/60 transition hover:border-slate-300/90 hover:bg-slate-50",
              itemClassName,
            )}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className={clsx(
                  "flex w-full items-start gap-3 px-5 py-4 text-left transition sm:gap-3.5 sm:px-6 sm:py-5",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                )}
              >
                <span
                  className={clsx(
                    "mt-1.5 inline-block h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-slate-700 transition-transform duration-200",
                    open && "translate-y-0.5 rotate-90",
                  )}
                  aria-hidden
                />
                <span
                  className={clsx(
                    "min-w-0 flex-1 text-[17px] font-bold leading-snug text-slate-900 sm:text-[18px]",
                    questionClassName,
                  )}
                >
                  {item.q}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={clsx(!open && "hidden")}
            >
              <p
                className={clsx(
                  "m-0 border-t border-slate-200/70 px-5 pb-5 pt-3 text-[16px] leading-relaxed text-slate-600 sm:px-6 sm:pb-6 sm:pl-[2.65rem] sm:text-[17px]",
                  answerClassName,
                )}
              >
                {item.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
