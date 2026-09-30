"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const AUTH_NAV: NavItem[] = [
  { label: "Sign In", href: "/signin" },
  { label: "Join Us", href: "/signup" },
];

function BagIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
        fill="#F5F5F6"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block size-6">
      <span
        className={`absolute left-1/2 top-[7px] h-0.5 w-5 -translate-x-1/2 bg-current transition-transform ${
          open ? "translate-y-[4px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-1/2 top-[11px] h-0.5 w-5 -translate-x-1/2 bg-current transition-opacity ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-1/2 top-[15px] h-0.5 w-5 -translate-x-1/2 bg-current transition-transform ${
          open ? "-translate-y-[4px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function NavLink({
  href,
  children,
  onClick,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition-opacity hover:opacity-70 ${className}`}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileNav = useMemo(() => [...PRIMARY_NAV, ...AUTH_NAV], []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className="relative z-50 bg-primary text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(71, 130, 238, 0.52) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 130, 238, 0.52) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      <div className="mx-auto flex h-[118px] w-full max-w-[1200px] items-center justify-between px-6 lg:px-0">
        {/* Logo */}
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="flex items-center gap-2.5"
        >
          <Image
            src="/images/logo2.svg"
            alt=""
            width={29}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-heading text-[22px] font-bold tracking-[-0.04em]">
            ByteSpace
          </span>
        </Link>

        {/* Desktop primary nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-base">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop auth + bag */}
        <div className="hidden items-center gap-7 text-base md:flex">
          {AUTH_NAV.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            aria-label="Open shopping bag"
            className="transition-opacity hover:opacity-70"
          >
            <BagIcon />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="grid size-11 place-items-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={toggleMenu}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      {/* Mobile drawer – full height, from the right */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col bg-white text-[#171717] shadow-xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <span className="font-heading text-lg font-bold">Menu</span>
          <button
            type="button"
            aria-label="Close navigation"
            className="grid size-10 place-items-center rounded-lg hover:bg-neutral-100"
            onClick={closeMenu}
          >
            <MenuIcon open />
          </button>
        </div>

        <ul className="flex-1 space-y-1 overflow-y-auto p-4">
          {mobileNav.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-neutral-100 hover:opacity-100"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
