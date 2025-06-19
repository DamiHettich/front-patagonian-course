import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">¿Listo para unirte?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          No pierdas la oportunidad de aprender de los mejores en un entorno inigualable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/inscribirse"
            className="bg-teal-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-teal-700 transition duration-300 text-xl"
          >
            Inscribirme Ahora
          </Link>
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Para otras consultas, puedes contactarnos a través de:</p>
          <div className="flex justify-center items-center space-x-6">
            <a 
              href="https://wa.me/56912345678" // Replace with actual WhatsApp number
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-teal-600 text-teal-700 font-bold py-3 px-8 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300 ease-in-out"
            >
              Contactar por WhatsApp
            </a>
            <a 
              href="https://seremi10.redsalud.gob.cl/" // Example link for the region, should be verified
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              SEREMI de Salud Los Lagos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 