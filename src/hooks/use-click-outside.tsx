"use client";

import { useEffect, useRef } from "react";

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  handler: () => void
): React.RefObject<T> => {
  const domNode = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);
    
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handler]);

  return domNode as React.RefObject<T>;
};