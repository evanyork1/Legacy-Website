import { useLayoutEffect } from "react";

/** Freeze Safari's background without losing the page's scroll position. */
export function useMobileMenuScrollLock(
  isOpen: boolean,
  closeMenu: () => void,
  routeKey: string,
) {
  useLayoutEffect(() => {
    closeMenu();
  }, [routeKey, closeMenu]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    if (desktop.matches) {
      closeMenu();
      return;
    }

    const body = document.body;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
    };
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = `-${scrollX}px`;
    body.style.width = "100%";

    const onResize = () => {
      if (desktop.matches) closeMenu();
    };
    desktop.addEventListener("change", onResize);
    return () => {
      desktop.removeEventListener("change", onResize);
      Object.assign(body.style, previous);
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(scrollX, scrollY);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [isOpen, closeMenu, routeKey]);
}