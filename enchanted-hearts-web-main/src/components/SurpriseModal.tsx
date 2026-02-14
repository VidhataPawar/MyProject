import React, { useState, useEffect } from "react";


interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Create sparkles
      const sparklesData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Show letter after sparkles animation
      setTimeout(() => setShowLetter(true), 1000);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="surprise-modal-overlay" onClick={onClose}>
      <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sparkles Animation */}
        <div className="modal-sparkles">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="modal-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`handwritten-letter ${showLetter ? "show" : ""}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <h2 className="handwritten-title">My Dearest Love</h2>
            </div>
           <div className="handwritten-content">
  <p className="handwritten-line">
    Tujhyasobat ghallela pratyek moment majhyasathi ek sundar swapna aahe...
  </p>
  <p className="handwritten-line">
    Tu majhya andharya divsanmadhe prakash ghenari roshni aahes,
  </p>
  <p className="handwritten-line">
    Tu majhya hrudayat vajnar sundar gaan aahes,
  </p>
  <p className="handwritten-line">
    Ani tu majhya ayushyatil ti swapna aahes,
    je mala kadhi suddha sampu naye asa watta.
  </p>
  <p className="handwritten-line">
    Mi tujhyavar khup khup prem karto / karte,
    je shabdat sangna shakat nahi.
  </p>

  <div className="handwritten-signature">
    Tujhya sathi nehmich,
    <br />
    <span className="signature-name">Tujhach / Tujhich ❤️</span>
  </div>
</div>



          </div>
        </div>

        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
