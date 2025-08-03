"use client";
import Image from "next/image";

const TestimonialsSection = () => {
  // Placeholder client logos (replace with actual paths in your project)
  const clientLogos = [
    { name: "adco", src: "/logos/adco.png" },
    { name: "sydney-water", src: "/logos/sydney-water.png" },
    { name: "ugl", src: "/logos/ugl.png" },
    { name: "transport-nsw", src: "/logos/transport-nsw.png" },
    { name: "transport-sydney", src: "/logos/transport-sydney.png" },
    { name: "john-holland", src: "/logos/john-holland.png" },
    { name: "veolia", src: "/logos/veolia.png" },
    { name: "buildcorp", src: "/logos/buildcorp.png" },
    { name: "laing-orourke", src: "/logos/laing-orourke.png" },
  ];

  const testimonials = [
    {
      logo: "/logos/oakhill-college.png",
      quote:
        "The traffic control service provided to our College by T&S Traffic Control was exceptional. Planning was thoroughly completed and communicated before the job commenced. The traffic controllers were on site with all the required equipment well before the commencement time. Clear communication, assertiveness and courtesy was shown to all.",
      author: "Bob M",
      company: "Oakhill College",
    },
    {
      logo: "/logos/king-hoist.png",
      quote:
        "T&S Traffic Control have provided great service to us at King Hoists over the years. We have always found them to be willing to help with advice and solutions. We have no hesitation in recommending them.",
      author: "Michael K",
      company: "King Hoist",
    },
    {
      logo: "/logos/brand-right.png",
      quote:
        "Thanks for the great work your team did yesterday. A big thank you to Ben who went above and beyond to help an elderly gentleman across the road. We look forward to working with you again.",
      author: "Gerard W",
      company: "Brand Right",
    },
  ];

  return (
    <section className="w-full py-16 bg-white font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Introductory Text */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-anton uppercase">
            Providing Services to Industrial Sectors and Government Divisions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            As a leading Australia traffic control company, we've had the
            privilege of partnering with clients across various industries, many
            of which are a household name. Check out some of the reviews from
            businesses we've worked with since we first opened our doors.
          </p>
        </div>

        {/* Testimonials Heading */}
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-600 text-center mb-10">
          Client Testimonials
        </h3>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-center text-base leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-blue-600 font-semibold">
                {testimonial.author}
              </p>
              <p className="text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
 