import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Adds .is-visible to any element with .reveal when it enters the viewport.
 * Re-scans on every route change so newly mounted route content animates in.
 */
export function useReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Slight delay to let the route content mount before scanning
    const id = window.setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
      if (!els.length) return;

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );

      els.forEach((el) => io.observe(el));
    }, 30);

    return () => window.clearTimeout(id);
  }, [pathname]);
}
