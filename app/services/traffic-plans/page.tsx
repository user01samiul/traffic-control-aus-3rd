"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaHardHat, FaPhoneAlt, FaRoad, FaTrafficLight } from "react-icons/fa";

const TrafficManagementPlan = () => {
  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="Traffic Management Plan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton">
              T&S SERVICES <br />
              <span className="text-blue-400">TRAFFIC MANAGEMENT PLAN</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Detailed, customized traffic management plans designed to
              prioritize safety and efficiency for your project.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Reach Out Today
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

      {/* Strategic Planning Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Strategy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              NOT ALL TMPs ARE{" "}
              <span className="text-[#13008e]">CREATED EQUAL</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-600 mb-6">
              Strategic Planning for Maximum Safety and Efficiency
            </h3>
            <div className="w-24 h-1 bg-[#13008e] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              At T&S Traffic Control, we recognize that every project has
              distinct needs, demanding a bespoke traffic management plan (TMP).
              Our certified professionals collaborate closely with you to
              understand your project’s unique requirements and develop a
              comprehensive plan that adheres to Australian Standards, Codes of
              Practice, and legal regulations.
            </p>
            <p>
              Our TMPs form the foundation for safe and efficient project sites,
              covering every phase from initial assessment to project
              completion. This holistic approach ensures uninterrupted
              operations while safeguarding workers and the public.
            </p>
          </div>
        </div>
      </section>

      {/* Customised Plans Section (Black Background, Right Side Image) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-blue-500"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Tailored to Your{" "}
                <span className="text-blue-500">Project’s Needs</span>
              </h3>
              <div className="space-y-5 text-gray-300 mb-10 font-opensans">
                <p className="leading-relaxed">
                  T&S Traffic Control designs traffic management plans that
                  align precisely with your project’s specific conditions,
                  whether it’s a large-scale construction site, a public event,
                  or routine road maintenance. Our plans integrate advanced
                  strategies and full regulatory compliance.
                </p>
                <p className="leading-relaxed">
                  Our customized approach minimizes disruptions, enhances
                  safety, and ensures smooth operations throughout your project,
                  consistently surpassing industry standards.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] border-4 border-blue-500 shadow-xl">
              <Image
                src="/DSC00717.JPG"
                alt="Customised Traffic Management Plans"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tools Section (White Background, Left Side Image) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00844.JPG"
                alt="Advanced Tools and Execution"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                Cutting-Edge Tools and{" "}
                <span className="text-[#13008e]">Skilled Execution</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  T&S Traffic Control employs advanced technology and proven
                  traffic management strategies to create and implement your
                  TMP. Our experienced team uses state-of-the-art software to
                  anticipate and address potential traffic challenges
                  effectively.
                </p>
                <p className="leading-relaxed">
                  This forward-thinking approach ensures smooth traffic flow and
                  significantly reduces incident risks, protecting both workers
                  and the public throughout your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              COMPREHENSIVE{" "}
              <span className="text-blue-500">COVERAGE AND SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              Beyond crafting detailed traffic management plans, T&S Traffic
              Control offers a full suite of traffic management services,
              including precise traffic guidance schemes and rapid-response
              emergency traffic management to address unforeseen challenges.
            </p>
            <p>
              Our goal is to deliver integrated, seamless services that ensure
              project success and safety across diverse scenarios.
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
                Contact Us for{" "}
                <span className="text-[#13008e]">Custom Traffic Solutions</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Ready to optimize your project’s safety and efficiency? Reach
                  out to T&S Traffic Control to explore how our tailored traffic
                  management plans can meet your unique requirements.
                </p>
                <p className="leading-relaxed">
                  We also offer support for traffic guidance schemes and
                  emergency response services to ensure your project’s needs are
                  fully met.
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

      {/* Other Services Section (Black Background) */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              EXPLORE OUR <span className="text-blue-500">OTHER SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Permit Applications",
                icon: <FaHardHat className="text-3xl" />,
                description:
                  "We manage the intricate process of obtaining traffic management permits from relevant authorities, ensuring your project complies with all regulations.",
              },
              {
                name: "Accredited Traffic Controllers",
                icon: <FaTrafficLight className="text-3xl" />,
                description:
                  "Our certified traffic controllers expertly manage vehicle and pedestrian flow around your site, maintaining stringent safety standards in all conditions.",
              },
              {
                name: "Equipment Hire",
                icon: <FaRoad className="text-3xl" />,
                description:
                  "We provide a diverse range of high-quality traffic management equipment for rent, including signs, barriers, and advanced tools to meet your project’s needs.",
              },
              {
                name: "Emergency Response Traffic Management",
                icon: <FaPhoneAlt className="text-3xl" />,
                description:
                  "Our 24/7 emergency response service quickly addresses unexpected traffic issues, deploying resources and expertise to manage disruptions effectively.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-black p-8 text-center border border-gray-800 hover:border-[#13008e] transition-all duration-500 hover:shadow-lg hover:shadow-[#13008e]/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-5 bg-blue-500 rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold relative z-10 group-hover:text-[#13008e] transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 mt-4 relative z-10 font-opensans">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (White Background) */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Have Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton">
              FREQUENTLY ASKED <span className="text-[#13008e]">QUESTIONS</span>
            </h2>
            <div className="w-24 h-1 bg-[#13008e] mx-auto"></div>
          </div>
          <div className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed space-y-6 font-opensans">
            <p>
              For additional information on our Traffic Management Plans or
              other services, visit our FAQ page or contact us directly to
              discuss your specific needs.
            </p>
            <Link
              href="/faqs"
              className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans"
            >
              <span className="relative z-10">VIEW FAQs</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
            </Link>
          </div>
        </div>
      </section>
      {/* Download Sample TMP Button (Bottom of Page) */}
      <section className="py-12 bg-white text-center">
        <a
          href="/TSTGS%202562%20-%20Stage%201%20-%20Bore%20Holing%20-%20Lynch%20St,%20Young.pdf"
          download
          className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans rounded-lg text-lg shadow-md"
        >
          Download a Sample TMP
          <span className="absolute inset-0 bg-[#13008e]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
        </a>
      </section>
      <ContactForm/>
    </main>
  );
};

export default TrafficManagementPlan;
