"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaTrafficLight, FaRoad, FaPhoneAlt } from 'react-icons/fa';

const TrafficManagementServices = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00726.JPG"
            alt="Traffic Management Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S <span className="text-blue-400">TRAFFIC SOLUTIONS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Professional traffic management and planning for secure and streamlined project delivery
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Reach Out Now
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

      {/* Traffic Guidance Schemes & Management Plans (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Specialization
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              TRAFFIC GUIDANCE & <span className="text-[#13008e]">MANAGEMENT PLANS</span>
            </h2>
            <div className="w-24 h-1 bg-[#13008e] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              For safe and efficient traffic management at your project site, trust T&S Traffic Solutions. Our certified project managers are experts in creating tailored traffic guidance schemes and management plans designed to meet your project's specific needs. These plans specify the exact placement of signage, devices, road markings, barriers, and speed limit adjustments, ensuring smooth coordination and effective traffic flow.
            </p>
            <p>
              Prioritize safety and success for your next project with a professional traffic management plan. Discover the comprehensive traffic management services offered by T&S Traffic Solutions today.
            </p>
          </div>
        </div>
      </section>

      {/* Traffic Guidance Scheme (Black Background, Right Side Image) */}
      <section id="traffic-guidance" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                TRAFFIC GUIDANCE <span className="text-[#13008e]">SCHEME (TGS)</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  At T&S Traffic Solutions, we prioritize worksite safety and minimal public disruption through expertly crafted traffic guidance schemes. Our team collaborates with you to understand your project’s scope and safety requirements, creating certified plans that outline signage, devices, road markings, traffic cones, and speed limit adjustments.
                </p>
                <p className="leading-relaxed">
                  Our traffic management services ensure safe navigation for workers, pedestrians, and road users around your site. We adhere to the Traffic Control at Worksites (TCAWS) Manual and Australian Standards, guaranteeing compliance and clarity in every plan. With T&S Traffic Solutions, you get precise, reliable traffic management tailored to your needs.
                </p>
                <Link
                  href="/traffic-guidance"
                  className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">LEARN MORE</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00862.JPG"
                alt="Traffic Guidance Scheme"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Management Plan (White Background, Left Side Image) */}
      <section id="traffic-plans" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00844.JPG"
                alt="Traffic Management Plan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                TRAFFIC MANAGEMENT <span className="text-[#13008e]">PLAN (TMP)</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Every project has unique traffic management needs, and T&S Traffic Solutions delivers customized Traffic Management Plans (TMPs). Our certified project managers work closely with you to assess your site’s requirements and develop a compliant plan that adheres to Australian Standards and regulations.
                </p>
                <p className="leading-relaxed">
                  Our TMPs include detailed hazard analysis, traffic control strategies, and mitigation measures, factoring in traffic volume, speed limits, site constraints, and pedestrian access. Using advanced tools like RapidPlan and Nearmap, we create clear, actionable plans that ensure seamless implementation and regulatory approval.
                </p>
                <Link
                  href="/traffic-management-plan"
                  className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">LEARN MORE</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Traffic Management Plan (Black Background, Right Side Image) */}
      <section id="construction-plans" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                CONSTRUCTION TRAFFIC MANAGEMENT <span className="text-[#13008e]">PLAN (CTMP)</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Construction sites demand precise traffic management, and T&S Traffic Solutions provides tailored Construction Traffic Management Plans (CTMPs). Our experienced team designs plans that address site-specific hazards, traffic patterns, and safety requirements, ensuring the safety of workers and the public.
                </p>
                <p className="leading-relaxed">
                  Using cutting-edge technology, we map out signage, devices, road markings, barriers, and speed limit adjustments. Our CTMPs comply with the TCAWS Manual and Australian Standards, offering reliable, efficient solutions for safe traffic flow throughout your project.
                </p>
                <Link
                  href="/construction-traffic-management-plan"
                  className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">LEARN MORE</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00847.JPG"
                alt="Construction Traffic Management Plan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Swept Path Plan (White Background, Left Side Image) */}
      <section id="swept-path" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00943.JPG"
                alt="Swept Path Plan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                SWEPT PATH <span className="text-[#13008e]">PLAN (SPP)</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  T&S Traffic Solutions offers comprehensive swept path plans to ensure safe and efficient vehicle movement on your project site. Our expert team uses advanced software to design plans that account for vehicle dimensions, site layout, and potential hazards.
                </p>
                <p className="leading-relaxed">
                  We identify risks and provide practical solutions to minimize them, ensuring compliance with all relevant regulations. With T&S Traffic Solutions, you get reliable, cost-effective swept path plans tailored to your project’s unique needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Movement Plan (Black Background, Right Side Image) */}
      <section id="vehicle-movement" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                VEHICLE MOVEMENT <span className="text-[#13008e]">PLAN (VMP)</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  For projects involving multiple vehicles, a well-designed vehicle movement plan is essential. T&S Traffic Solutions creates customized plans to ensure safe and efficient vehicle operations on your site, fully integrated with comprehensive traffic management strategies.
                </p>
                <p className="leading-relaxed">
                  Our accredited team assesses your project’s needs, designing plans with clear signage, markings, and devices to guide vehicles safely. We conduct thorough site inspections to identify risks and ensure compliance with Australian Standards and TCAWS guidelines, minimizing accidents and delays.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans"
                >
                  <span className="relative z-10">CONTACT US</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00947.JPG"
                alt="Vehicle Movement Plan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00850.JPG"
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
                GET IN TOUCH FOR <span className="text-[#13008e]">CUSTOM TRAFFIC SOLUTIONS</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Ready to enhance your project’s safety and efficiency? Contact T&S Traffic Solutions to explore how our tailored traffic management services can meet your needs.
                </p>
                <p className="leading-relaxed">
                  Have questions? We’re here to help. Reach out today.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans"
              >
                <span className="relative z-10">REQUEST A QUOTE</span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TrafficManagementServices;