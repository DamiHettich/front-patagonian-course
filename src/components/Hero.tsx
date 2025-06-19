import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="bg-cover bg-center h-screen text-white flex items-center justify-center relative"
      style={{ backgroundImage: "url('https://live.staticflickr.com/4161/34136738540_43e257f643_b.jpg')" }}
    >
      <div className="absolute inset-0 bg-teal-800 bg-opacity-60"></div>
      <div className="text-center p-10 rounded-lg relative z-10">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Curso Internacional de Especialistas Médicos</h1>
        <p className="text-2xl mb-2 drop-shadow-md">Una experiencia de aprendizaje única en el corazón de la Patagonia</p>
        <p className="text-xl font-semibold mb-8">Primera Semana, Noviembre 2026 | Puerto Varas, Chile</p>
      </div>
    </section>
  );
};

export default Hero; 