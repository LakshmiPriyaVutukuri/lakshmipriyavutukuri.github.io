import Link from 'next/link';
import { neighbors } from '@/lib/page_order';

export default function PageNav({ current }) {
  const { previous, next } = neighbors(current);
  return (
    <nav className="page_nav" aria-label="Previous and next page">
      {previous ? (
        <Link href={previous.href} className="button button_secondary page_nav_prev">
          <span aria-hidden="true">←</span> Previous: {previous.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="button page_nav_next">
          Next: {next.label} <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
