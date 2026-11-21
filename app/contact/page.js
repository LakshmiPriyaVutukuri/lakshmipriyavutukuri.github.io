import ContactCard from '@/components/ContactCard';
import PageNav from '@/components/PageNav';
import { CONTACTS } from '@/lib/site_content';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <header className="page_header">
        <h1>Contact</h1>
        <p className="lead">I&apos;d be glad to hear from you. Reach out through any of these.</p>
      </header>

      <div className="grid grid_contacts">
        {CONTACTS.map((contact) => (
          <ContactCard key={contact.kind} contact={contact} />
        ))}
      </div>

      <div className="save_contact">
        <a href="/api/vcard" className="button" download="srilakshmi_priya_vutukuri.vcf">
          Save Contact (vCard)
        </a>
        <p className="muted">Adds my email, LinkedIn, and GitHub to your contacts app.</p>
      </div>

      <PageNav current="/contact" />
    </>
  );
}
