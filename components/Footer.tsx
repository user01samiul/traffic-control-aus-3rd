"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Acknowledgment */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.JPG"
                alt="T&S Traffic Control Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              We acknowledge Aboriginal Traditional Owners of Country throughout
              the Darug of the Eora Nation. We honour and respect all Elders
              past, present, and emerging and respectfully acknowledge all
              Aboriginal and Torres Strait Islander people. We are committed to
              safe and inclusive workplaces, policies, and services for people
              of all communities and their families.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/services/traffic-management-planning"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Traffic Management Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/permit-application"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Permit Application
                </Link>
              </li>
              <li>
                <Link
                  href="/services/accredited-traffic-controllers"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Accredited TFNSW Traffic Controllers
                </Link>
              </li>
              <li>
                <Link
                  href="/services/equipment-hire"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Traffic Control Equipment for Hire
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emergency-response"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Emergency Traffic Management Response
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/quote"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  News and Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Traffic Control and Management Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-700 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <FaPhoneAlt className="text-blue-600" />
              <a
                href="tel:1300008782"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors duration-300"
              >
                1300 008 782
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <a
                href="mailto:Operations@tstc.com.au"
                className="text-sm text-gray-600 hover:text-blue-700 transition-colors duration-300"
              >
                Operations@tstc.com.au
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <a
              href="https://au.linkedin.com/company/t-s-traffic-control"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/people/TS-Traffic/100090085386224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/ts.traffic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          T&S Traffic Control © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
