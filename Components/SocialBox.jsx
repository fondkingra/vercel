import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const SocialBox = ({ href, icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-50 h-60 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      initial={{ boxShadow: "0px 0px 0px 0px rgba(255, 215, 0, 0)" }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 20px 5px rgba(255, 215, 0, 0.7)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <FontAwesomeIcon icon={icon} size="7x" className="text-white" />
    </motion.a>
  );
};

export default SocialBox;