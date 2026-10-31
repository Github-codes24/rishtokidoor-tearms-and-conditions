import { FileText, Mail, Phone, Building2, MapPin, ExternalLink } from "lucide-react";
import { companyInfo, introText, sections, contactDetails } from "../data/termsAndConditionsData";
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
        <div className="bg-white rounded-2xl shadow-sm border-b-[6px] border-b-[#FF7394] p-6 md:p-8 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF7394] flex items-center justify-center shrink-0 shadow-md">
              <FileText className="text-white" size={26} />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                {companyInfo.appName} - Terms & Conditions
              </h1>

              <p className="text-gray-600 text-xs md:text-sm mt-1">
                Operated by{" "}
                <span className="font-semibold text-gray-900">
                  {companyInfo.legalEntity}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* BREADCRUMB / SUBHEADING */}
        <div className="flex flex-col gap-2 px-3 md:px-6 mb-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#FF7394]">
            <span className="text-lg leading-none mt-[-2px]">{">"}</span> Terms
            of Service & Usage Policies
            <span className="text-gray-500 ml-2 font-normal text-xs">
              ({currentDate})
            </span>
          </div>
          <p className="text-gray-900 text-[14px] md:text-[16px] leading-relaxed mt-2">
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
                      className="bg-white shadow-sm border border-pink-100 rounded-xl px-4 py-3 flex items-start gap-3 hover:border-pink-300 transition-all"
                    >
                      <Icon className="text-[#FF7394] shrink-0 mt-0.5" size={16} />
                      <p className="text-gray-900 text-[14px] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Section 15 – Contact Us & Legal Entity */}
          <section className="space-y-5">
            <SectionHeading number="15" title="Contact Us & Corporate Information" />
            <p className="text-gray-900 text-[14px] mb-4">
              For any legal notices, queries, or policy inquiries regarding these
              Terms, please contact:
            </p>

            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 bg-pink-50 border-b border-pink-100 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Building2 className="text-[#FF7394]" size={20} />
                  <span className="text-sm font-bold text-gray-900">
                    {contactDetails.company}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <MapPin size={14} className="text-[#FF7394]" />
                  <span>{contactDetails.address}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-pink-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                    <Mail className="text-[#FF7394]" size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#FF7394] uppercase tracking-wide mb-1">
                      Email
                    </div>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-[14px] text-gray-900 font-medium hover:text-[#FF7394]"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
                <div className="p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                    <Phone className="text-[#FF7394]" size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#FF7394] uppercase tracking-wide mb-1">
                      Phone
                    </div>
                    <a
                      href={`tel:${contactDetails.phone}`}
                      className="text-[14px] text-gray-900 font-medium hover:text-[#FF7394]"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-pink-50/50 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-gray-700">
                  Account Deletion Portal (Public Web Request):
                </span>
                <a
                  href={contactDetails.deletionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF7394] font-bold hover:underline inline-flex items-center gap-1"
                >
                  {contactDetails.deletionUrl} <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 pb-4">
              <p className="text-[14px] text-gray-900 font-medium mb-4">
                By accessing or using our Platform, you agree to these Terms &
                Conditions.
              </p>
              <p className="text-[13px] text-gray-400 italic">
                End of Terms & Conditions - {companyInfo.appName} (Operated by{" "}
                {companyInfo.legalEntity})
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
