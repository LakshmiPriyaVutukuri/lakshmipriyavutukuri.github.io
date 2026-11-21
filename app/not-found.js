import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page_header">
      <h1>Page not found</h1>
      <p className="lead">That page doesn&apos;t exist.</p>
      <Link href="/" className="button">
        Back to Home
      </Link>
    </section>
  );
}
