import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import type { SectionId } from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Speakers from '../components/Speakers';
import Schedule from '../components/Schedule';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId | ''>('');
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    speakers: useRef<HTMLDivElement>(null),
    schedule: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const handleNavClick = (sectionId: SectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId | '');
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const refs = Object.values(sectionRefs);
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);


  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <main className="pt-24">
        <Hero />
        <div id="about" ref={sectionRefs.about} className="scroll-mt-24">
          <About />
        </div>
        <div id="speakers" ref={sectionRefs.speakers} className="scroll-mt-24">
          <Speakers />
        </div>
        <div id="schedule" ref={sectionRefs.schedule} className="scroll-mt-24">
          <Schedule />
        </div>
        <div id="contact" ref={sectionRefs.contact} className="scroll-mt-24">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage; 