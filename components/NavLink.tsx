"use client";

import Link from "next/link";
import { useLinkStatus } from "next/link";
import { useEffect, useState, type ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Link with a pending indicator while the target page loads.
 * The indicator is delayed 300ms so it doesn't flash on instant,
 * prefetched navigations.
 */
export default function NavLink({
  href,
  children,
  className,
  onClick,
}: NavLinkProps) {
  const { pending } = useLinkStatus();
  const [showPending, setShowPending] = useState(false);

  useEffect(() => {
    if (!pending) return;
    const timer = setTimeout(() => setShowPending(true), 300);
    return () => {
      clearTimeout(timer);
      setShowPending(false);
    };
  }, [pending]);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className ?? ""} ${pending ? "opacity-60" : ""} transition-opacity`}
    >
      {children}
      {showPending && (
        <span
          aria-hidden
          className="inline-block w-3 h-3 ml-2 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin align-middle"
        />
      )}
    </Link>
  );
}
