"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Pavement Condition Index (PCI)",
    description:
      "Advanced analysis of pavement conditions using AI-powered image processing and machine learning algorithms.",
    list: [
      "Automated condition assessment",
      "Real-time data collection",
      "Predictive analytics for maintenance planning",
    ],
    image: "/pci.png",
  },
  {
    title: "Pavement Distress Evaluation",
    description:
      "AI-powered distress detection and classification for accurate pavement condition assessment.",
    list: [
      "Detailed distress classification",
      "Severity level assessment",
      "Automated reporting and analysis",
    ],
    image: "/pde.gif",
  },
  {
    title: "Traffic Sign Retroreflectivity",
    description:
      " Precise measurement and analysis of traffic sign retroreflectivity for improved road safety.",
    list: [
      "Automated accurate retroreflectivity measurement",
      "Compliance monitoring",
      "Maintenance prioritization",
    ],
    image: "/retroref.png",
  },
];

export default function Insights() {
  return (
    <section
      id="team"
      className="py-20 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto container">
        {/* Header */}
        <div className="text-center mx-auto container mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-neon mr-4" />
            <span className="text-neon text-sm font-medium uppercase tracking-wider">
              Insights
            </span>
            <div className="w-12 h-0.5 bg-neon ml-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
            Don&apos;t replace, <span className="text-neon">Integrate</span>{" "}
          </h2>
          <p className="text-gray-600 text-md lg:text-lg  max-w-3xl mx-auto leading-relaxed">
            We understand the hassle of replacing the tools you&apos;re used to
            in your process. That&apos;s why we integrate with the tools you use
            in your day-to-day work..
          </p>
        </div>

        {/* Insights Grid Layout */}
        <div className="space-y-16">
          {insights.map((insight, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center ${
                  !isEven ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-2 h-full ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative bg-gray-200 w-full h-full">
                    <img
                      src={
                        insight.image || "/placeholder.svg?height=300&width=400"
                      }
                      alt={insight.title}
                      className="w-full h-full  object-cover rounded-none"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-3 space-y-6 p-6 ${
                    !isEven ? "lg:order-1 bg-dark-blue" : "bg-white"
                  }`}
                >
                  <div>
                    <h3
                      className={`text-2xl font-bold  ${
                        isEven ? "text-dark-blue" : "text-white"
                      } mb-4 group-hover:text-neon transition-colors duration-300`}
                    >
                      {insight.title}
                    </h3>
                    <p
                      className={`${
                        isEven ? "text-gray-600" : "text-gray-300"
                      }   leading-relaxed`}
                    >
                      {insight.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {insight.list.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle
                          className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                          style={{ color: "#27ea9c" }}
                        />
                        <span
                          className={`${
                            isEven ? "text-gray-700" : "text-gray-200"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button className="bg-neon text-dark-blue px-5 py-1 rounded-none font-medium transition-all duration-200 hover:bg-neon/90 focus:outline-none hover:scale-105">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
