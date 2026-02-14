
import React, { useState, useEffect } from 'react';
import p1 from "../images/IMG_20260207_113314.jpg";
import p2 from "../images/IMG_20260207_215144.jpg";
import p3 from "../images/Snapchat-1306110730.jpg";
import p4 from "../images/Snapchat-1696702662.jpg";
import p5 from "../images/Snapchat-1916835537.jpg";
import p6 from "../images/Snapchat-2073354247.jpg";
import p7 from "../images/photooo.jpeg";


const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with your actual photos
 const photos = [p1, p2, p3, p4,p5,p6,p7];
  const captions = [
  "Tujhyasobat pratyek moment special vatto ❤️",
  "Tujhyamule majha jag khup sundar jhala 💖",
  "Majha happiness cha reason fakta tu ahes 😊",
  "Tu ahes mhanun mi complete ahe 💕",
  "Tujhi smile majha divas banavte ☀️"
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="photo-slider-container">
      <h2 className="slider-title">Our Beautiful Memories</h2>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="photo-frame">
            <img 
              src={photos[currentSlide]} 
              alt={captions[currentSlide]}
              className="slider-image slider-image-animated"
              key={currentSlide}
            />
            <div className="photo-overlay">
              <p className="photo-caption">{captions[currentSlide]}</p>
            </div>
          </div>
        </div>
        
        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
