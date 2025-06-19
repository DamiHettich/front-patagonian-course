import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Programa del Evento</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Day 1 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Día 1: Tópicos Fundamentales</h3>
            <ul className="space-y-4 text-gray-600">
              <li><span className="font-semibold text-gray-800">09:00 - 10:00:</span> Registro y Café de Bienvenida</li>
              <li><span className="font-semibold text-gray-800">10:00 - 12:00:</span> Avances en Cardiología</li>
              <li><span className="font-semibold text-gray-800">12:00 - 13:00:</span> Almuerzo</li>
              <li><span className="font-semibold text-gray-800">13:00 - 15:00:</span> Nuevas Fronteras en Neurología</li>
              <li><span className="font-semibold text-gray-800">15:00 - 15:30:</span> Pausa para Café</li>
              <li><span className="font-semibold text-gray-800">15:30 - 17:00:</span> Taller Interactivo</li>
            </ul>
          </div>
          {/* Day 2 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">Día 2: Especialidades y Futuro</h3>
            <ul className="space-y-4 text-gray-600">
              <li><span className="font-semibold text-gray-800">09:00 - 10:00:</span> Desayuno de Networking</li>
              <li><span className="font-semibold text-gray-800">10:00 - 12:00:</span> Innovaciones en Oncología</li>
              <li><span className="font-semibold text-gray-800">12:00 - 13:00:</span> Almuerzo</li>
              <li><span className="font-semibold text-gray-800">13:00 - 15:00:</span> El Futuro de la Pediatría</li>
              <li><span className="font-semibold text-gray-800">15:00 - 15:30:</span> Pausa para Café</li>
              <li><span className="font-semibold text-gray-800">15:30 - 17:00:</span> Clausura y Conclusiones</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 