import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the type for a single speaker
interface Speaker {
  name: string;
  specialty: string;
  image: string | null; // Allow image to be null
  description: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        {speaker.image ? (
          <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        )}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-teal-800 bg-opacity-90 text-white flex items-center justify-center p-4"
            >
              <p className="text-center text-sm">{speaker.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-800">{speaker.name}</h3>
        <p className="text-teal-600">{speaker.specialty}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
export type { Speaker }; 