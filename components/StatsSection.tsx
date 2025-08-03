"use client";
import { useEffect, useState } from "react";
import { FaAward, FaProjectDiagram, FaUserTie } from "react-icons/fa";

const StatsSection = () => {
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animateCount = () => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);
      // Only animate projects
      setProjects(Math.floor(progress * 12600));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    animateCount();
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e6f0fa]/20 via-[#e6f0fa]/80 via-50% to-[#e6f0fa]/20 opacity-100"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Years Experience */}
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 hover:border-[#13008e]/30 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#13008e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#13008e] to-[#0b0066] text-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-500">
                  <FaAward className="text-2.4xl" />
                </div>
              </div>
              <h3 className="text-6xl font-bold text-[#13008e] mb-3">10+</h3>
              <p className="text-xl font-semibold text-gray-800">
                Years Experience
              </p>
            </div>
          </div>

          {/* Employees */}
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 hover:border-[#13008e]/30 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#13008e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#13008e] to-[#0b0066] text-white rounded-full shadow-md group-hover:rotate-12 transition-transform duration-500">
                  <FaUserTie className="text-2.4xl" />
                </div>
              </div>
              <h3 className="text-6xl font-bold text-[#13008e] mb-3">60</h3>
              <p className="text-xl font-semibold text-gray-800">Employee's</p>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 hover:border-[#13008e]/30 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#13008e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#13008e] to-[#0b0066] text-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-500">
                  <FaProjectDiagram className="text-2.4xl" />
                </div>
              </div>
              <h3 className="text-6xl font-bold text-[#13008e] mb-3">
                +<span className="countup">{projects.toLocaleString()}</span>
              </h3>
              <p className="text-xl font-semibold text-gray-800">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
