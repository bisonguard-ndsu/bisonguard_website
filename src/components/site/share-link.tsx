"use client";
import { useState } from "react";
import { Check, Link as LinkIcon } from "lucide-react";
export function ShareLink() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  return (
    <button
      type="button"
      className="share-link"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setState("copied");
        } catch {
          setState("failed");
        }
      }}
    >
      {state === "copied" ? <Check size={15} /> : <LinkIcon size={15} />}
      <span aria-live="polite">
        {state === "copied"
          ? "Link copied"
          : state === "failed"
            ? "Copy the address from your browser"
            : "Copy article link"}
      </span>
    </button>
  );
}
