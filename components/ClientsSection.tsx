"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ClientsSection = () => { 
  const logos = [
    { src: "/client logos/D&M Logo.png", alt: "D&M Logo" },
    { src: "/client logos/QMC Logo.jpeg", alt: "QMC Logo" },
    { src: "/client logos/EMO Civil Logo.avif", alt: "EMO Civil Logo" },
    { src: "/client logos/Stateline LOGO.png", alt: "Stateline LOGO" },
    { src: "/client logos/Impact Cranes Logo.png", alt: "Impact Cranes Logo" },
    { src: "/client logos/TQM Logo.jpeg", alt: "TQM Logo" },
  ];

  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let position = 0;
    const speed = 1; // Adjust speed

    const animate = () => {
      position -= speed;
      if (position <= -container.scrollWidth / 2) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-anton">
          OUR <span className="text-blue-600">CLIENTS</span>
        </h2>

        <div className="relative overflow-hidden">
          <div ref={containerRef} className="flex items-center py-4">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 mx-0 lg:mx-4 grayscale hover:grayscale-0 transition-all duration-300"
                style={{
                  width: "180px",
                  height: "100px",
                  position: "relative",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
