const ICONS = {
  email: (
    <path d="M3 5h18v14H3z M3 5l9 8 9-8" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7 M8 7v.01 M12 17v-4a2 2 0 0 1 4 0v4 M12 10v7" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.5-4-2-6-2.5 M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
};

export default function ContactCard({ contact }) {
  const external = contact.href.startsWith('http');
  return (
    <a
      href={contact.href}
      className="card contact_card"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <svg
        className="contact_icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {ICONS[contact.kind]}
      </svg>
      <span className="contact_text">
        <span className="contact_label">{contact.label}</span>
        <span className="contact_value">{contact.value}</span>
      </span>
      {external && <span className="visually_hidden"> (opens in a new tab)</span>}
    </a>
  );
}
