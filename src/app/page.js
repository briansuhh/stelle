"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTER_MESSAGE = `Dear Kristelle Joy,\n\nI know na you are always surprising me with letters and stuff like this and I don't give back the love you deserve. Now I'm writing this letter the way I wanted it to be — a letter na gawa ng isang IT student. I hope you like it.\n\nYou are very special to me and it will stay that way. I will always support you and I will always be here for you whenever you need me by your side. We are partners nga diba so don't be shy to ask me for help. I love you so much. I miss you na agad. To more exciting dates and more exciting memories.✨💖\n\nWith love,\nBrian Sebastian\n`;

export default function Home() {
  const [stage, setStage] = useState(0);

  const handleEnvelopeClick = () => {
    if (stage === 0) {
      setStage(1);
      setTimeout(() => setStage(2), 600);
      setTimeout(() => setStage(3), 1400);
      if (navigator.vibrate) navigator.vibrate(100);
    } else {
      setStage(0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-fuchsia-100 to-rose-200 font-sans px-4 py-10">
      <style jsx global>{`
        html { font-family: 'Poppins', 'Inter', 'Quicksand', 'Segoe UI', Arial, sans-serif; }
      `}</style>

      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-pink-600 drop-shadow-md">Happy Monthsary!!</h1>
        <p className="text-fuchsia-600 text-lg mt-1">Tap the envelope to open my message for you.</p>
      </div>

      <div className="relative w-64 h-48 sm:w-72 sm:h-56 md:w-80 md:h-60 cursor-pointer perspective-1000" onClick={handleEnvelopeClick}>
        {/* Envelope Base */}
        <div className="absolute bottom-0 w-full h-2/3 bg-white border border-pink-300 rounded-b-2xl shadow-md z-10"></div>

        {/* Flap with realistic 3D open effect */}
        <motion.div
          className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-pink-200 to-white rounded-t-2xl border border-pink-300 z-30 origin-bottom"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: stage > 0 ? -120 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d", transformOrigin: "bottom center", boxShadow: "0 6px 14px rgba(255, 182, 193, 0.3)" }}
        />

        {/* Heart Seal */}
        {stage === 0 && (
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-3xl">
            ❤️
          </div>
        )}

        {/* Letter Animation */}
        <AnimatePresence>
          {stage >= 2 && (
            <motion.div
              key="letter"
              className={`fixed left-0 top-0 w-full h-full flex items-center justify-center z-[60] pointer-events-none ${stage === 3 ? '' : 'pointer-events-none'}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={stage === 3
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 1, y: -64, scale: 0.95 }
              }
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div
                className="w-[90vw] max-w-md bg-white text-fuchsia-700 rounded-xl px-4 py-6 text-sm sm:text-base md:text-lg font-medium shadow-lg border border-fuchsia-200 max-h-[70vh] overflow-y-auto whitespace-pre-line flex flex-col items-center justify-center"
                style={{ boxShadow: '0 8px 32px 0 rgba(255, 182, 193, 0.18)' }}
              >
                <div className="flex justify-center gap-2 mb-2 text-xl">
                </div>
                {LETTER_MESSAGE}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative Hearts */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2 z-40 pointer-events-none">
          <span className="text-pink-400 text-2xl animate-bounce">💌</span>
          <span className="text-fuchsia-400 text-xl animate-pulse">💖</span>
          <span className="text-rose-400 text-lg animate-bounce">✨</span>
        </div>
      </div>
    </div>
  );
}
