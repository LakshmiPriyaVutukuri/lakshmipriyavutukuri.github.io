// Single source for the nav menu and the Previous/Next buttons.
export const PAGES = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export function neighbors(href) {
  const i = PAGES.findIndex((p) => p.href === href);
  return {
    previous: i > 0 ? PAGES[i - 1] : null,
    next: i >= 0 && i < PAGES.length - 1 ? PAGES[i + 1] : null,
  };
}
