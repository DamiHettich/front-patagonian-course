import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center text-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="mx-auto w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center"
        >
          <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-800 mt-6">¡Inscripción Recibida!</h1>
        <p className="text-gray-600 mt-2">Hemos recibido tus datos correctamente. Nos contactaremos contigo en los próximos días. Por favor, revisa tu correo electrónico.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Volver al Inicio
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmationPage; 