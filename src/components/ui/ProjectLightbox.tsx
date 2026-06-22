"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectLightboxProps {
  lightboxIndex: number | null;
  setLightboxIndex: (index: number | null) => void;
  activeEvidence: string[];
  handlePrev: () => void;
  handleNext: () => void;
}

export default function ProjectLightbox({
  lightboxIndex,
  setLightboxIndex,
  activeEvidence,
  handlePrev,
  handleNext,
}: ProjectLightboxProps) {
  return (
    <AnimatePresence>
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
            onClick={() => setLightboxIndex(null)}
          >
            <FaTimes size={28} />
          </button>

          {/* Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-[85vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeEvidence[lightboxIndex]}
              alt="Evidence full"
              className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl w-auto h-auto"
            />

            {activeEvidence.length > 1 && (
              <>
                {lightboxIndex > 0 && (
                  <button
                    className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all cursor-pointer hidden md:block"
                    onClick={handlePrev}
                  >
                    <FaChevronLeft size={40} />
                  </button>
                )}
                {lightboxIndex < activeEvidence.length - 1 && (
                  <button
                    className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all cursor-pointer hidden md:block"
                    onClick={handleNext}
                  >
                    <FaChevronRight size={40} />
                  </button>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
