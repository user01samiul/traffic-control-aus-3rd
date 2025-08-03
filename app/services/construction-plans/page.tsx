
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaTrafficLight, FaRoad, FaPhoneAlt } from 'react-icons/fa';

const ConstructionTrafficManagementPlan = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00943.JPG"
            alt="Construction Traffic Management Plan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S SERVICES <br />
              <span className="text-blue-400">CONSTRUCTION TRAFFIC MANAGEMENT PLAN</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Secure your site with expert construction traffic management plans
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Consult with Our Experts
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Plans Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              COMPREHENSIVE <span className="text-[#13008e]">CONSTRUCTION TRAFFIC MANAGEMENT</span> PLANS
            </h2>
            <div className="w-24 h-1 bg-[#13008e] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Each construction site is unique, requiring customised traffic management plans designed to fit specific needs and environments. At T&S Traffic Control, we specialise in developing construction traffic management plans that address the particular challenges of your site.
            </p>
            <p>
              Our plans consider all aspects — from the volume and type of vehicles involved to the specific layout of your site — to facilitate a seamless integration of traffic flow with minimal disruption to your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Implementation Section (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Expert <span className="text-[#13008e]">Implementation and Monitoring</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Implementing an effective construction traffic management plan requires meticulous attention to detail and expert oversight. Our team of certified traffic management professionals are equipped to oversee every phase of your project.
                </p>
                <p className="leading-relaxed">
                  From the initial setup of signs and barriers to the ongoing management of traffic patterns, T&S Traffic Control precisely executes every element. We make continuous monitoring and adjustments as needed to respond to any evolving challenges, keeping your site safe and functional throughout the construction process.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00844.JPG"
                alt="Expert Implementation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00847.JPG"
                alt="Innovative Traffic Management"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton">
                Leverage <span className="text-[#13008e]">Innovation</span> for Enhanced Control
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Leverage the latest in traffic management technology with T&S Traffic Control. Our advanced tools, including real-time monitoring systems and automated traffic control devices, provide enhanced capabilities for managing and directing construction site traffic effectively.
                </p>
                <p className="leading-relaxed">
                  These technologies allow for real-time adjustments and provide detailed data that aid in optimising traffic flow and reducing potential bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              ADHERENCE TO <span className="text-[#13008e]">REGULATIONS</span> FOR PEACE OF MIND
            </h2>
            <div className="w-24 h-1 bg-[#13008e] mx-auto"></div>
          </div>
          <div className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At T&S Traffic Control, we understand the importance of compliance with local and national safety regulations. We design our construction traffic management plans to enhance efficiency and deliver full compliance with all safety standards.
            </p>
            <p>
              This commitment to regulatory adherence protects your project from potential legal issues and enhances the overall safety of your construction site, giving you peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00811.JPG"
                alt="Get in Touch"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Connect with Our <span className="text-[#13008e]">Experts</span> for Construction Traffic Management Plans
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Streamline your construction safety by partnering with T&S Traffic Control for your traffic management needs. Our team is ready to assist you in developing and implementing construction traffic management plans that meet your specific requirements.
                </p>
                <p className="leading-relaxed">
                  Contact us today to schedule a consultation for our services — let us help you create a safer and more efficient construction site.
                </p>
                <p className="leading-relaxed">
                  Choose T&S Traffic Control for reliable, expertly managed traffic guidance schemes that prioritise safety and efficiency. Request a quote today and see how we can help you achieve a successful project outcome with minimal public impact and comprehensive regulatory compliance.
                </p>
                <p className="leading-relaxed">
                  Have questions or concerns? Feel free to contact us.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10">GET A QUOTE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConstructionTrafficManagementPlan;
