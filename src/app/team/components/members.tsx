import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/lib/constants";
import {
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import React from "react";

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
              className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-start ${
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
                        className="w-full h-100 object-cover rounded-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b243a]/20 to-transparent rounded-none"></div>
                    </div>
                  </div>

                  {/* Education & Expertise - Side by side */}
                  <div className="flex  gap-4">
                    {/* Education */}
                    <Card className="border-neon/20 hover:border-neon/40 transition-colors flex-1 shadow-none rounded-none">
                      <CardContent className="p-4 py-0">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-neon rounded-none flex items-center justify-center mr-2">
                            <GraduationCap className="w-4 h-4 text-[#0b243a]" />
                          </div>
                          <h4 className="text-sm font-semibold text-[#0b243a]">
                            Education
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {member.education?.map((edu, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-1 h-1 bg-neon rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              <span className="text-xs text-gray-700 leading-relaxed">
                                {edu}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Expertise */}
                    <Card className="border-neon/20 hover:border-neon/40 transition-colors flex-1 shadow-none rounded-none">
                      <CardContent className="p-4 py-0">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-[#0b243a] rounded-none flex items-center justify-center mr-2">
                            <Award className="w-4 h-4 text-neon" />
                          </div>
                          <h4 className="text-sm font-semibold text-[#0b243a]">
                            Expertise
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {member.expertise?.map((skill, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-1 h-1 bg-[#0b243a] rounded-full mr-2 flex-shrink-0"></div>
                              <span className="text-xs text-gray-700 font-medium">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Content Column - With Social Links */}
              <div
                className={`lg:col-span-3 space-y-8 ${
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
                <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                  <Button className="bg-neon hover:bg-[#20d4a0] text-[#0b243a] font-semibold rounded-none">
                    <Mail className="w-4 h-4 mr-2" />
                    Mail
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#0b243a]/20 text-[#0b243a] hover:border-neon hover:text-neon bg-transparent rounded-none"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-[#0b243a] hover:text-neon hover:bg-neon/10 rounded-none"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Portfolio
                  </Button>
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
