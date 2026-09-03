import React, { useState } from 'react';
import { STORE_CONFIG } from '../config';
import { motion } from 'motion/react';

export const Header: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const activeLogo = STORE_CONFIG.logoUrl;

  return (
    <motion.header
      id="header-section"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full pt-6 sm:pt-8 md:pt-14 pb-6 sm:pb-8 md:pb-12 text-center px-2 sm:px-4"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* LOGO AREA - LARGE SIZE AS REQUESTED WITH GENTLE PULSE */}
        {activeLogo && !imageError ? (
          <div className="relative flex justify-center items-center w-full">
            <motion.img
              src={activeLogo}
              alt={STORE_CONFIG.nomeLoja}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              animate={{
                scale: [1, 1.035, 1],
                filter: [
                  'drop-shadow(0 2px 8px rgba(67, 79, 42, 0.08))',
                  'drop-shadow(0 6px 16px rgba(67, 79, 42, 0.16))',
                  'drop-shadow(0 2px 8px rgba(67, 79, 42, 0.08))',
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="max-h-40 sm:max-h-56 md:max-h-72 lg:max-h-84 w-auto max-w-full object-contain mx-auto will-change-transform"
            />
          </div>
        ) : (
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative inline-block will-change-transform"
          >
            {/* Wireframe-matched uppercase bold display LOGO */}
            <h1
              id="brand-logo-text"
              className="text-6xl md:text-8xl lg:text-9xl tracking-tight font-extrabold uppercase select-none"
              style={{ color: '#434F2A' }}
            >
              LOGO
            </h1>
            <p className="mt-2 text-sm md:text-base tracking-[0.25em] uppercase font-semibold opacity-90" style={{ color: '#6D7833' }}>
              {STORE_CONFIG.nomeLoja}
            </p>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
