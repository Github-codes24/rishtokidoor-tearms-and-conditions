import { Mail, Phone, ShieldCheck } from "lucide-react";
import { introText, sections, contactDetails } from "../data/childSafetyData";
import SectionHeading from "./SectionHeading";

export default function ChildSafety() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full py-8 px-4 md:px-8">
      <div className="w-full mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-sm border-b-[6px] border-b-[#FF7394] p-6 md:p-8 mb-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF7394] flex items-center justify-center shrink-0">
              <ShieldCheck className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Risto Ki Door - Child Safety Standards
              </h1>

              <p className="text-gray-900 text-xs md:text-sm mt-1">
                Home / <span className="text-[#FF7394]">Child Safety</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-3 md:px-6 mb-8">
          <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-[#FF7394]">
            <span className="text-lg leading-none mt-[-2px]">{">"}</span>{" "}
            Child Safety and Human Safety Policy
            <span className="text-gray-500 ml-2 font-normal text-xs">
              ({currentDate})
            </span>
          </div>
          <p className="text-gray-900 text-[14px] md:text-[16px] leading-relaxed mt-2">
            {introText}
          </p>
        </div>

        <div className="space-y-10 pb-12">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <section key={section.number} className="space-y-5">
                <SectionHeading number={section.number} title={section.title} />

                <div className="space-y-3">
                  {section.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="bg-white shadow-sm border border-pink-100 rounded-xl px-4 py-3 flex items-start gap-3"
                    >
                      <Icon
                        className="text-[#FF7394] shrink-0 mt-0.5"
                        size={16}
                      />
                      <p className="text-gray-900 text-[14px] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          <section className="space-y-5">
            <SectionHeading number="9" title="Contact for Safety Reports" />
            <p className="text-gray-900 text-[14px] mb-4">
              For child safety concerns, abuse reports, fake profiles, fraud,
              harassment, or urgent platform safety complaints, contact us at:
            </p>

            <div className="bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-pink-100 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                    <Mail className="text-[#FF7394]" size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-[#FF7394] uppercase tracking-wide mb-1">
                      Email
                    </div>
                    <div className="text-[14px] text-gray-900 font-medium">
                      {contactDetails.email}
                    </div>
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
                    <div className="text-[14px] text-gray-900 font-medium">
                      {contactDetails.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 pb-4">
              <p className="text-[14px] text-gray-900 font-medium mb-4">
                We review safety reports and may take action to protect users,
                children, and the wider community.
              </p>
              <p className="text-[13px] text-gray-400 italic">
                End of Child Safety Standards - Risto Ki Door
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
