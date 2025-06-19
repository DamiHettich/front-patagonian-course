import React from 'react';

export type SectionId = 'about' | 'speakers' | 'schedule' | 'contact';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  const navLinks: { id: SectionId; title: string }[] = [
    { id: 'about', title: 'Acerca de' },
    { id: 'speakers', title: 'Ponentes' },
    { id: 'schedule', title: 'Programa' },
    { id: 'contact', title: 'Contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
    e.preventDefault();
    onNavClick(sectionId);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          Curso Vale
        </div>
        <nav>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-gray-600 hover:text-teal-600 px-4 py-2 border-b-2 transition-colors duration-300 ${
                activeSection === link.id
                  ? 'border-teal-600 text-teal-600'
                  : 'border-transparent'
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 