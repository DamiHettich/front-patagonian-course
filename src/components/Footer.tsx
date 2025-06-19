import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2026 Curso Internacional de Especialistas Médicos. Todos los derechos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">
          Diseñado con ❤️ en la Patagonia.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 