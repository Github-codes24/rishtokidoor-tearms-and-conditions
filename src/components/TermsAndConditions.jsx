import { FileText, Mail, Phone } from "lucide-react";
import { introText, sections, contactDetails } from "../data/termsAndConditionsData";
import SectionHeading from "./SectionHeading";

export default function TermsAndConditions() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full py-8 px-4 md:px-8">
  <div className="w-full mx-auto max-w-7xl">
        {/* HERO */}
        <div className="bg-white rounded-2xl shadow-sm border-b-[6px] border-b-[#FF7394] p-6 mb-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF7394] flex items-center justify-center shrink-0">
              <FileText className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Risto Ki Door - Terms & Conditions
              </h1>

              <p className="text-gray-900 text-xs md:text-sm mt-1">
                Home / <span className="text-[#FF7394]">Terms & Conditions</span>
              </p>
            </div>
          </div>
        </div>

        {/* BREADCRUMB / SUBHEADING */}
        <div className="flex flex-col gap-2 px-3 mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#FF7394]">
            <span className="text-lg leading-none mt-[-2px]">{">"}</span> Terms of Service & Usage Policies
            <span className="text-gray-500 ml-2 font-normal text-xs">({currentDate})</span>
          </div>
          <p className="text-gray-900 text-[14px] leading-relaxed mt-2">
            {introText}
          </p>
        </div>

        {/* MAIN WRAPPER */}
        <div className="space-y-10 pb-12">
          
          {/* Sections 1–14 rendered dynamically */}
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.number} className="space-y-5">
                <SectionHeading number={section.number} title={section.title} />

                {section.intro && (
                  <p className="text-gray-900 text-[14px] mb-2">{section.intro}</p>
                )}

                <div className="space-y-3">
                  {section.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="bg-white shadow-sm border border-pink-100 rounded-xl px-4 py-3 flex items-start gap-3"
                    >
                      <Icon className="text-[#FF7394] shrink-0 mt-0.5" size={16} />
                      <p className="text-gray-900 text-[14px] leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Section 15 – Contact Us */}
          <section className="space-y-5">
            <SectionHeading number="15" title="Contact Us" />
            <p className="text-gray-900 text-[14px] mb-4">
              For any questions or complaints, contact us at:
            </p>

            <div className="bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-pink-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                    <Mail className="text-[#FF7394]" size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#FF7394] uppercase tracking-wide mb-1">Email</div>
                    <div className="text-[14px] text-gray-900 font-medium">{contactDetails.email}</div>
                  </div>
                </div>
                <div className="p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                    <Phone className="text-[#FF7394]" size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#FF7394] uppercase tracking-wide mb-1">Phone</div>
                    <div className="text-[14px] text-gray-900 font-medium">{contactDetails.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 pb-4">
              <p className="text-[14px] text-gray-900 font-medium mb-4">
                By using our Platform, you agree to these Terms & Conditions.
              </p>
              <p className="text-[13px] text-gray-400 italic">
                End of Terms & Conditions - Risto Ki Door
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
