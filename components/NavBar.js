'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PAGES } from '@/lib/page_order';
import { PROFILE } from '@/lib/site_content';

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the phone menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Let Escape close the menu.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site_header">
      <nav className="nav container" aria-label="Main">
        <Link href="/" className="nav_brand">
          {PROFILE.name}
        </Link>
        <button
          type="button"
          className="nav_toggle"
          aria-expanded={open}
          aria-controls="nav_links"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav_toggle_bars" aria-hidden="true" />
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <ul id="nav_links" className={`nav_links${open ? ' is_open' : ''}`}>
          {PAGES.map((page) => {
            const current = pathname === '/' && page.href === '/#home';
            return (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={`nav_link${current ? ' is_current' : ''}`}
                  aria-current={current ? 'page' : undefined}
                >
                  {page.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
