import React from 'react';
import SpeakerCard from './SpeakerCard';
import type { Speaker } from './SpeakerCard';

const Speakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      name: 'Dr. Alejandro Soto',
      specialty: 'Cardiología Intervencionista',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop',
      description: 'Líder en técnicas de cateterismo y procedimientos mínimamente invasivos. Fundador del Instituto Cardiovascular Patagónico.'
    },
    {
      name: 'Dra. Isabela Reyes',
      specialty: 'Neurología Pediátrica',
      image: null, // No photo available, skeleton will be shown
      description: 'Especialista en trastornos del neurodesarrollo en niños. Reconocida por su investigación en diagnóstico temprano.'
    },
    {
      name: 'Dr. Martín Cárdenas',
      specialty: 'Oncología Molecular',
      image: null,
      description: 'Pionero en terapias dirigidas y medicina de precisión para el tratamiento del cáncer. Publicado en numerosas revistas científicas.'
    },
    {
      name: 'Dra. Valentina Ríos',
      specialty: 'Inmunología y Alergias',
      image: null,
      description: 'Experta en el manejo de enfermedades autoinmunes complejas y alergias raras. Jefa del departamento de Inmunología del Hospital Austral.'
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Ponentes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers; 