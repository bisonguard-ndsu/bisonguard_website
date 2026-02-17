import { Button } from "@/components/ui/button";
import { team } from "@/lib/constants";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";

const Members = () => {
  return (
    <div id="members">
      {team.map((member, index) => (
        <section
          id={member.id.toLowerCase()}
          key={member.name}
          className={`py-20 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="container mx-auto max-w-6xl relative z-10">
            <div
              className={`grid grid-cols-1 lg:grid-cols-6 gap-12 items-start ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image Column - With Education & Expertise */}
              <div
                className={`lg:col-span-2 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="sticky top-8 space-y-6">
                  <div className="relative group">
                    <div className="relative">
                      <img
                        src={member.image || "/user.jpg"}
                        alt={member.name}
                        className="w-full h-80 object-cover object-top rounded-none"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b243a]/20 to-transparent rounded-none"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column - With Social Links */}
              <div
                className={`lg:col-span-4 space-y-8 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div>
                  <h2
                    className="text-3xl lg:text-4xl font-bold mb-2"
                    style={{ color: "#0b243a" }}
                  >
                    {member.name}
                  </h2>
                  <p className="text-xl font-semibold text-neon mb-6">
                    {member.position}
                  </p>
                </div>

                {/* Bio paragraphs */}
                <div className="space-y-6">
                  {member.bio.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 leading-relaxed text-sm lg:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Social Links - Moved to content side */}
                <div className="flex flex-wrap gap-3 pt-6">
                  <Link href={member.socialLinks[1].href} target="_blank">
                    <Button className="bg-neon hover:bg-[#20d4a0] text-[#0b243a] font-semibold rounded-none">
                      <Mail className="w-4 h-4 mr-2" />
                      Mail
                    </Button>
                  </Link>
                  <Link href={member.socialLinks[0].href} target="_blank">
                    <Button
                      variant="outline"
                      className="border-[#0b243a]/20 text-[#0b243a] hover:border-neon hover:text-neon bg-transparent rounded-none"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href={member.socialLinks[2].href} target="_blank">
                    <Button
                      variant="ghost"
                      className="text-[#0b243a] hover:text-neon hover:bg-neon/10 rounded-none"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Members;
