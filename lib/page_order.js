// Navigation links for the single-page portfolio.
export const PAGES = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#leadership', label: 'Leadership' },
  { href: '/#contact', label: 'Contact' },
];

// Preserve compatibility with existing project pages.
export function neighbors(href) {
  const i = PAGES.findIndex((p) => p.href === href);

  return {
    previous: i > 0 ? PAGES[i - 1] : null,
    next: i >= 0 && i < PAGES.length - 1 ? PAGES[i + 1] : null,
  };
}