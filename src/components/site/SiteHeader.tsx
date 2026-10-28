import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useMobileMenuScrollLock } from "@/hooks/useMobileMenuScrollLock";
import { ABOUT_ITEMS, ALL_INDUSTRIES, ALL_SYSTEMS, BUSINESS, type NavLink } from "@/data/site/nav";
import logo from "@/assets/site/logo-legacy-industrial.png";

/**
 * Global header — mirrors legacycommercialfloors.com: white bar, uppercase
 * letter-spaced Space Grotesk links with underline hover, simple dropdowns,
 * outlined "Contact Us" button, centered full-screen mobile menu.
 */

const LINK_TEXT =
  "font-heading text-[12px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300";
const UNDERLINE =
  "absolute -bottom-1 left-0 h-[1.5px] bg-foreground transition-all duration-300 w-0 group-hover:w-full";
const DROP_ITEM =
  "block w-full text-left px-5 py-2.5 font-heading text-[12px] font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors";

const Dropdown = ({
  label,
  items,
  columns = 1,
}: {
  label: string;
  items: NavLink[];
  columns?: 1 | 2;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="relative group flex items-center gap-1"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={LINK_TEXT}>{label}</span>
        <ChevronDown
          size={12}
          className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        <span className={UNDERLINE} />
      </button>
      <div
        className={`absolute top-full pt-3 left-0 transition-opacity duration-150 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-background border border-border shadow-lg py-2 ${
            columns === 2 ? "grid grid-cols-2 w-[560px]" : "min-w-[240px]"
          }`}
        >
          {items.map((item) => (
            <a key={item.path + item.label} href={item.path} className={DROP_ITEM}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileAccordion = ({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: NavLink[];
  onNavigate: () => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="font-heading text-xl font-light tracking-wide text-foreground flex items-center gap-2"
      >
        {label}
        <ChevronDown size={20} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="flex flex-col items-center gap-1">
          {items.map((item) => (
            <a
              key={item.path + item.label}
              href={item.path}
              onClick={onNavigate}
              className="font-heading text-base text-muted-foreground text-center py-1.5"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  useMobileMenuScrollLock(isMenuOpen, closeMenu, location.key);

  const goContact = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    const target = document.getElementById("request-info");
    if (target) {
      history.replaceState(null, "", "#request-info");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <>
      {isMenuOpen && <div aria-hidden="true" className="h-16 lg:hidden" />}
      <header
        className={`lcf bg-background sticky top-0 z-50 border-b border-border${
          isMenuOpen ? " mobile-menu-panel" : ""
        }`}
      >
        <div
          className={`max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-12${isMenuOpen ? " mobile-menu-layout" : ""}`}
        >
          <div className="flex shrink-0 items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center" aria-label="Legacy Industrial Coatings home">
              <img
                src={logo}
                alt="Legacy Industrial Coatings — DFW commercial epoxy and polished concrete contractor"
                className="h-10 md:h-12 w-auto"
                width={896}
                height={289}
                loading="eager"
                decoding="async"
              />
            </a>

            {/* Desktop */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main">
              <Dropdown label="About" items={ABOUT_ITEMS} />
              <Dropdown label="Industries" items={ALL_INDUSTRIES} columns={2} />
              <Dropdown label="Systems" items={ALL_SYSTEMS} columns={2} />
              <a href="/who-we-serve" className="relative group">
                <span className={LINK_TEXT}>Who We Serve</span>
                <span className={UNDERLINE} />
              </a>
              <a href="/case-studies" className="relative group">
                <span className={LINK_TEXT}>Case Studies</span>
                <span className={UNDERLINE} />
              </a>
              <a
                href="/contact"
                onClick={goContact}
                className="ml-2 border border-foreground text-foreground px-7 py-2.5 font-heading text-[12px] font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="lg:hidden text-foreground flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div id="mobile-navigation" className="mobile-menu-scroll lg:hidden border-t border-border bg-background">
              <nav className="flex flex-col items-center gap-8 px-6 py-10" aria-label="Mobile">
                <MobileAccordion label="About" items={ABOUT_ITEMS} onNavigate={closeMenu} />
                <MobileAccordion label="Industries" items={ALL_INDUSTRIES} onNavigate={closeMenu} />
                <MobileAccordion label="Systems" items={ALL_SYSTEMS} onNavigate={closeMenu} />
                <a
                  href="/who-we-serve"
                  onClick={closeMenu}
                  className="font-heading text-xl font-light tracking-wide text-foreground"
                >
                  Who We Serve
                </a>
                <a
                  href="/case-studies"
                  onClick={closeMenu}
                  className="font-heading text-xl font-light tracking-wide text-foreground"
                >
                  Case Studies
                </a>
                <a
                  href="/contact"
                  onClick={goContact}
                  className="border border-foreground text-foreground px-7 py-2.5 font-heading text-xs font-medium tracking-[0.2em] uppercase"
                >
                  Contact Us
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  className="font-heading text-sm tracking-[0.15em] text-muted-foreground"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default SiteHeader;
