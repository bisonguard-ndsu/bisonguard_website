// hooks/useHash.ts
"use client";

import { useState, useEffect } from "react";

const getHash = () => {
  if (typeof window !== "undefined") {
    return window.location.hash; // Return with '#' prefix
  }
  return "";
};

export function useHash() {
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
}
