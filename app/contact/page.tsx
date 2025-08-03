"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHardHat, FaPhoneAlt, FaRoad, FaTrafficLight } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Section (Black Background) */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center font-opensans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/DSC00810.JPG"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-anton uppercase">
              T&S <span className="text-blue-400">SERVICES</span> <br />
              <span className="text-blue-400">GET IN TOUCH</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
              Have questions or need assistance? Reach out to us today!
            </p>
            <div className="flex justify-center">
              <Link
                href="tel:(02)96757731"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-opensans"
              >
                <FaPhoneAlt className="text-xl" />
                Call Us Now
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

      {/* Contact Form Section (White Background, Left Side Image) */}
      <section id="contact-form" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl">
              <Image
                src="/DSC00844.JPG"
                alt="Contact Us"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
                CONTACT <span className="text-[#13008e]">US</span>
              </h3>
              <div className="space-y-5 text-gray-600 mb-10 font-opensans">
                <p className="leading-relaxed">
                  Got any questions or comments? Don’t hesitate to call us at
                  (02) 9675 7731 or fill out the form below, and we’ll get back
                  to you promptly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium"
                    >
                      Select Service
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Traffic Management Plans">
                        Traffic Management Plans
                      </option>
                      <option value="Permit Applications">
                        Permit Applications
                      </option>
                      <option value="Accredited Traffic Controllers">
                        Accredited Traffic Controllers
                      </option>
                      <option value="Equipment Hire">Equipment Hire</option>
                      <option value="Emergency Response">
                        Emergency Response
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      rows={4}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`inline-block px-10 py-4 bg-[#13008e] text-white font-bold transition-all duration-300 border border-[#13008e] group relative overflow-hidden font-opensans ${
                      isLoading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white hover:text-[#13008e]"
                    }`}
                  >
                    <span className="relative z-10">
                      {isLoading ? "Submitting..." : "SUBMIT"}
                    </span>
                    {!isLoading && (
                      <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
                    )}
                  </button>
                  {submitStatus === "success" && (
                    <p className="text-green-600">
                      Form submitted successfully!
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600">
                      Error submitting form. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section (Black Background) */}
      <section id="contact-info" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
              Reach Out
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              OUR <span className="text-blue-500">CONTACT DETAILS</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-5 bg-blue-500 rounded-full">
                  <FaPhoneAlt className="text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-opensans">Call Us</h3>
              <p className="text-gray-300 font-opensans">
                <Link
                  href="tel:1300008782"
                  className="hover:text-blue-400 transition-colors"
                >
                  1300 008 782
                </Link>
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-5 bg-blue-500 rounded-full">
                  <FaRoad className="text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-opensans">Email Us</h3>
              <p className="text-gray-300 font-opensans">
                <Link
                  href="mailto:Operations@tstc.com.au"
                  className="hover:text-blue-400 transition-colors"
                >
                  Operations@tstc.com.au
                </Link>
                <br />
                {/* <Link
                  href="mailto:HR@Tstc.com.au"
                  className="hover:text-blue-400 transition-colors"
                >
                  HR@Tstc.com.au
                </Link> */}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-5 bg-blue-500 rounded-full">
                  <FaHardHat className="text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-opensans">
                Office Location
              </h3>
              <p className="text-gray-300 font-opensans">
                10 Coventry Place <br />
                Mt Druitt, NSW 2770
              </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
              EXPLORE OUR <span className="text-blue-500">OTHER SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Traffic Management Plans",
                icon: <FaHardHat className="text-3xl" />,
                description:
                  "Customized plans designed to ensure safety and efficiency, tailored to your project’s unique requirements.",
              },
              {
                name: "Permit Applications",
                icon: <FaTrafficLight className="text-3xl" />,
                description:
                  "Streamlined permit application services for hassle-free project compliance with councils and authorities.",
              },
              {
                name: "Equipment Hire",
                icon: <FaRoad className="text-3xl" />,
                description:
                  "Access a wide range of high-quality traffic management equipment, including signs, barriers, and more.",
              },
              {
                name: "Emergency Response",
                icon: <FaPhoneAlt className="text-3xl" />,
                description:
                  "Our 24/7 emergency response service addresses unexpected traffic issues with rapid deployment and expertise.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-black p-8 text-center border border-gray-800 hover:border-blue-500 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#13008e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-5 bg-blue-500 rounded-full group-hover:rotate-[15deg] transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold relative z-10 group-hover:text-blue-600 transition-colors duration-300 font-opensans">
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
    </main>
  );
};

export default ContactUs;
