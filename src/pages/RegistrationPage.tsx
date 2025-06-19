import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form data submission
    // For this mockup, we'll just navigate to the confirmation page
    navigate('/confirmacion');
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Inscripción al Evento</h1>
          <p className="text-gray-600 mt-2">Completa tus datos para asegurar tu lugar.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Cargo o Posición</label>
            <input type="text" id="title" name="title" required className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Número Telefónico</label>
            <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
          </div>
          <div className="text-center pt-6">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 active:bg-teal-800 transition duration-300"
            >
              Confirmar Inscripción
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage; 