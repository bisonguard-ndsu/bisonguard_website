import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-dark-blue via-foreground to-dark-blue overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/038/946/939/non_2x/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-6xl container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-neon mr-4" />
              <span className="text-neon text-sm font-medium uppercase tracking-wider">
                About Us
              </span>
              <div className="w-12 h-0.5 bg-neon ml-4" />
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
              Delivering Smart Transportation Solutions & Services
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-md lg:text-lg leading-relaxed mb-12 max-w-lg">
              InfiniCity Labs provides cutting-edge transportation technology
              services based on our research expertise in big data analytics,
              digital twins, and intelligent systems. We deliver practical
              solutions for infrastructure asset management, traffic control
              systems, and wildlife monitoring that help cities optimize their
              transportation networks and improve safety.
            </p>

            {/* Call to Action Box */}
            <Button className="bg-neon hover:bg-[#22d18a] text-dark-blue capitalize px-12 py-7 text-base font-semibold tracking-wider transition-all duration-300 rounded-none">
              Learn More
              {/* <ArrowRight className="ml-2" /> */}
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/038/946/939/non_2x/ai-generated-construction-site-is-laying-new-asphalt-pavement-road-construction-workers-and-road-construction-machinery-scene-highway-construction-site-scene-photo.jpg"
                  alt="Architecture team working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
