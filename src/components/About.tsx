import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Acerca del Curso</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-600 text-center">
          <p className="mb-6">
            Únase a nosotros para un evento exclusivo de 2 días que reúne a destacados especialistas médicos de todo el mundo. Este curso está diseñado para fomentar el intercambio de conocimientos, la creación de redes profesionales y la exploración de las últimas innovaciones en el campo de la medicina.
          </p>
          <p>
            Todo esto, enmarcado en la belleza inigualable de la Patagonia chilena, ofreciendo una experiencia educativa y rejuvenecedora.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About; 