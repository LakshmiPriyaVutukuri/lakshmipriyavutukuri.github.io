import Image from 'next/image';
import PageNav from '@/components/PageNav';
import { INTRO, PROFILE } from '@/lib/site_content';
import profilePhoto from '@/public/images/profile_photo.jpg';

export default function HomePage() {
  return (
    <>
      {/* Phone: name, title, and degree beside the photo; intro and button full width below.
          Tablet/desktop: everything on the left, photo on the right. */}
      <section className="hero" aria-labelledby="hero_name">
        <div className="hero_heading">
          <h1 id="hero_name" className="hero_name">
            {PROFILE.name}
          </h1>
          <p className="hero_title">{PROFILE.title}</p>
          <p className="hero_degree">
            {PROFILE.degree}
            <br />
            {PROFILE.school}
          </p>
        </div>

        <div className="hero_photo">
          <Image
            src={profilePhoto}
            alt={`Portrait of ${PROFILE.name}`}
            priority
            sizes="(max-width: 767px) 42vw, 340px"
            className="hero_photo_img"
          />
        </div>

        <p className="hero_intro">{INTRO}</p>


      </section>

      <PageNav current="/" />
    </>
  );
}
