import './globals.css';
import NavBar from '@/components/NavBar';
import { PROFILE } from '@/lib/site_content';

export const metadata = {
  title: {
    default: `${PROFILE.name} | Portfolio`,
    template: `%s | ${PROFILE.name}`,
  },
  description:
    'Portfolio of Srilakshmi Priya Vutukuri: business analytics, technology, and operations, with projects in embedded systems, robotics, and quantum machine learning.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip_link">
          Skip to content
        </a>
        <NavBar />
        <main id="main" className="container main">
          {children}
        </main>
        <footer className="site_footer">
          <div className="container">
            © {new Date().getFullYear()} {PROFILE.name}
          </div>
        </footer>
      </body>
    </html>
  );
}
