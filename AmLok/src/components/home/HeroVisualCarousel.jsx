import { useEffect, useState } from 'react';
import aiAutomationImage from '../../assets/images/carousel/car1.avif';
import cloudImage from '../../assets/images/carousel/car2.avif';
import dataIntelligenceImage from '../../assets/images/carousel/car3.avif';
import digitalEngImage from '../../assets/images/carousel/car4.avif';
import digitalTransformationImage from '../../assets/images/carousel/car5.avif';


function AiAutomationVisual() {
  return (
    <img src={aiAutomationImage} alt="" />
  );
}

function CloudModernizationVisual() {
  return (
    <img src={cloudImage} alt="" />
  );
}

function DataIntelligenceVisual() {
  return (
    <img src={dataIntelligenceImage} alt="" />
  );
}

function DigitalEngineeringVisual() {
  return (
    <img src={digitalEngImage} alt="" />
  );
}

function DigitalTransformationVisual() {
    return (
    <img src={digitalTransformationImage} alt="" />
  );
}

const slides = [
  { id: 'digital-transformation', label: 'Digital Transformation', Visual: DigitalTransformationVisual },
  { id: 'ai-automation', label: 'AI & Automation', Visual: AiAutomationVisual },
  { id: 'cloud-modernization', label: 'Cloud & Modernization', Visual: CloudModernizationVisual },
  { id: 'data-intelligence', label: 'Data & Analytics', Visual: DataIntelligenceVisual },
  { id: 'digital-engineering', label: 'Digital Engineering', Visual: DigitalEngineeringVisual },
];

export default function HeroVisualCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="AmLok technology capabilities"
    >
      <div className="hero-carousel-stage" aria-live="off">
        {slides.map(({ id, label, Visual }, index) => (
          <div
            key={id}
            className={`hero-carousel-slide${index === activeIndex ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${label}`}
            aria-hidden={index !== activeIndex}
          >
            {id === 'digital-transformation'
              ? <Visual idPrefix="hero-digital-transformation" />
              : <Visual />}
          </div>
        ))}
      </div>
    </div>
  );
}