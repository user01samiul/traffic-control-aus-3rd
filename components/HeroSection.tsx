
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaTrafficLight, FaRoad, FaPhoneAlt, FaClock } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="font-opensans relative min-h-screen w-full overflow-hidden flex items-center justify-center py-26">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DSC00732.JPG"
          alt="Professional traffic control services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-anton font-bold">
            SAFE AND EFFICIENT <br />
            <span className="text-blue-400">TRAFFIC CONTROL</span> SOLUTIONS
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-opensans">
            From lane closures on Motorways to pedestrian management, we provide reliable and effective traffic control services for projects of all sizes.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <FaPhoneAlt className="text-xl" />
              Contact Us Today
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="bg-blue-600/20 p-4 rounded-full">
                <FaHardHat className="text-3xl text-blue-400" />
              </div>
              <span className="font-medium text-lg">Construction</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="bg-blue-600/20 p-4 rounded-full">
                <FaTrafficLight className="text-3xl text-blue-400" />
              </div>
              <span className="font-medium text-lg">Traffic Control</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="bg-blue-600/20 p-4 rounded-full">
                <FaRoad className="text-3xl text-blue-400" />
              </div>
              <span className="font-medium text-lg">Road Safety</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="bg-blue-600/20 p-4 rounded-full">
                <FaClock className="text-3xl text-blue-400" />
              </div>
              <span className="font-medium text-lg">24/7 Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scrolling Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce flex flex-col items-center">
          {/* <span className="text-sm mb-2">Scroll Down</span> */}
          <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;