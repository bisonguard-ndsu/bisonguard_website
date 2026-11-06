"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function MotionRuntime() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    if (preference.matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealState = "visible";
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.08, rootMargin: "0px 0px -28px 0px" },
    );
    for (const element of elements) {
      if (element.getBoundingClientRect().top > window.innerHeight * 0.95)
        element.dataset.revealState = "pending";
      observer.observe(element);
    }
    const onPreference = () => {
      if (preference.matches) {
        observer.disconnect();
        elements.forEach((e) => (e.dataset.revealState = "visible"));
      }
    };
    preference.addEventListener("change", onPreference);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreference);
      elements.forEach((e) => delete e.dataset.revealState);
    };
  }, [pathname]);
  return null;
}
