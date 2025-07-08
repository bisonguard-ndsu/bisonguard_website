"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    position: "Infrastructure & Mobility Research Director, NDSU",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
    testimonial:
      "InfiniCity Labs' big data analytics platform has revolutionized how we approach infrastructure and mobility research. Their innovative use of machine learning algorithms has provided unprecedented insights into mobility patterns and infrastructure performance.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Smart Cities Program Manager, NDDOT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
    testimonial:
      "Working with InfiniCity Labs on our digital twin implementation has been transformative. Their expertise in real-time data processing and predictive modeling has enabled us to optimize our infrastructure and mobility networks like never before.",
  },
  {
    id: 3,
    name: "Dr. Chen Wei",
    position: "Infrastructure Research Lead, USNSF",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
    testimonial:
      "The quality of research and technological innovation from InfiniCity Labs consistently exceeds expectations. Their asset management solutions have set new standards for infrastructure monitoring and maintenance optimization.",
  },
  {
    id: 4,
    name: "Lisa Thompson",
    position: "Urban Planning Director, Smart Cities Initiative",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
    testimonial:
      "InfiniCity Labs' intelligent systems have been game-changing for our city planning efforts. Their safety analytics and predictive modeling capabilities have helped us reduce accidents and improve system flow significantly.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsVisible(true);
      }, 300);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern - Right Side */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #27ea9c 2px, transparent 2px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto container relative">
        {/* Vertical Line - Full Height */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon" />

        <div className="pl-16">
          <div className="mb-16">
            <div className="mb-4">
              <span className="text-neon text-sm font-medium uppercase tracking-wider">
                Testimonials
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl leading-tight mb-8">
              Trusted by infrastructure and mobility leaders. What our{" "}
              <span className="text-neon">clients and partners say.</span>
            </h2>
          </div>
          {/* Testimonial Box - Bottom */}
          <div className="bg-dark-blue min-h-[200px] p-12 relative max-w-5xl">
            <div
              className={`transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: "200px" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-8 gap-2">
                {/* Left Side - Image, Name, Position */}
                <div className="col-span-2 text-center md:text-left">
                  {/* Profile Image */}
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-32 h-32 object-cover rounded mx-auto md:mx-0 mb-6"
                  />

                  {/* Name and Position */}
                  <div>
                    <h4 className="text-white text-xl font-bold mb-2">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-neon font-medium">
                      {currentTestimonial.position}
                    </p>
                  </div>
                </div>

                {/* Right Side - Quote and Testimonial */}
                <div className="col-span-6">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-neon fill-current mb-6" />

                  {/* Testimonial Text */}
                  <p className="text-white text-lg leading-relaxed">
                    {currentTestimonial.testimonial}
                  </p>

                  {/* Pagination Dots - Below testimonial text */}
                  <div className="flex gap-2 mt-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 transition-colors duration-300 ${
                          index === currentIndex
                            ? "bg-neon"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
