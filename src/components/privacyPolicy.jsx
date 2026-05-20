import {
  ShieldCheck,
  User,
  Eye,
  Lock,
  Globe,
  Cookie,
  AlertTriangle,
  RefreshCcw,
  Mail,
  Phone,
  MapPin,
  Database,
  CreditCard,
  Share2,
  MessageCircle,
  FileText,
} from "lucide-react";
import {
  introText,
  informationWeCollect,
  howWeUseInfo,
  profileVisibility,
  sharingOfInformation,
  userCommunication,
  dataSecurity,
  dataRetention,
  yourRights,
  cookiesTracking,
  thirdPartyServices,
  contactDetails,
} from "../data/privacyPolicyData";
import SectionHeading from "./SectionHeading";

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full py-8 px-4 md:px-8">
      <div className="w-full mx-auto max-w-7xl">
        {/* HERO */}
        <div className="bg-white rounded-2xl shadow-sm border-b-[6px] border-b-[#FF7394] p-6 md:p-8 mb-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF7394] flex items-center justify-center shrink-0">
              <ShieldCheck className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Risto Ki Door - Privacy Policy
              </h1>

              <p className="text-gray-900 text-xs md:text-sm mt-1">
                Home / <span className="text-[#FF7394]">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>

        {/* BREADCRUMB / SUBHEADING */}
        <div className="flex flex-col gap-2 px-3 md:px-6 mb-8">
          <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-[#FF7394]">
            <span className="text-lg leading-none mt-[-2px]">{">"}</span>{" "}
            Privacy Policy & Data Protection
            <span className="text-gray-500 ml-2 font-normal text-xs">
              ( {currentDate})
            </span>
          </div>
          <p className="text-gray-900 text-[14px] md:text-[16px] leading-relaxed mt-2">
            {introText}
          </p>
        </div>

        {/* MAIN WRAPPER */}
        <div className="space-y-12 pb-12 md:pb-16">
          {/* 1. Information We Collect */}
          <section className="space-y-6">
            <SectionHeading number="1" title="Information We Collect" />
            <p className="text-gray-900 text-[14px]">
              We may collect the following types of information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {informationWeCollect.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                        <Icon className="text-[#FF7394]" size={20} />
                      </div>
                      <h3 className="text-[16px] font-bold text-[#FF7394]">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#FF7394] rounded-full mt-2 shrink-0"></div>
                          <span className="text-gray-900 text-[14px] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {category.note && (
                      <p className="text-gray-500 text-[13px] italic mt-4">
                        {category.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="space-y-6">
            <SectionHeading number="2" title="How We Use Your Information" />
            <p className="text-gray-900 text-[14px] mb-4">
              We use your information for the following purposes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {howWeUseInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-sm border border-pink-100 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#FF7394] rounded-full shrink-0" />
                  <p className="text-gray-900 text-[14px]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Profile Visibility */}
          <section className="space-y-6">
            <SectionHeading number="3" title="Profile Visibility" />
            <div className="bg-white shadow-sm border border-pink-100 rounded-2xl p-6 space-y-4">
              {profileVisibility.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Eye className="text-[#FF7394] shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-900 text-[14px] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Sharing of Information */}
          <section className="space-y-6">
            <SectionHeading number="4" title="Sharing of Information" />
            <p className="text-gray-900 text-[14px] mb-4">
              We may share your information in the following cases:
            </p>
            <div className="space-y-3 mb-6">
              {sharingOfInformation.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-sm border border-pink-100 rounded-xl p-4 flex items-center gap-3"
                >
                  <Share2 className="text-[#FF7394] shrink-0" size={18} />
                  <p className="text-gray-900 text-[14px]">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-pink-50 shadow-sm border-l-4 border-[#FF7394] rounded-r-xl p-5">
              <p className="text-gray-900 text-[14px] font-bold">
                We do not sell your personal information to third parties.
              </p>
            </div>
          </section>

          {/* 5. User Communication */}
          <section className="space-y-6">
            <SectionHeading number="5" title="User Communication" />
            <p className="text-gray-900 text-[14px] mb-4">
              Messages, chats, and interactions between users may be monitored
              or reviewed for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {userCommunication.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-pink-100 rounded-xl p-5 text-center shadow-sm"
                >
                  <MessageCircle
                    className="text-[#FF7394] mx-auto mb-3"
                    size={24}
                  />
                  <p className="text-gray-900 text-[14px] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Data Security */}
          <section className="space-y-6">
            <SectionHeading number="6" title="Data Security" />
            <p className="text-gray-900 text-[14px] mb-4">
              We use reasonable technical and organizational security measures
              to protect your data. However:
            </p>
            <div className="space-y-3">
              {dataSecurity.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-sm border border-pink-100 rounded-xl p-4 flex items-center gap-3"
                >
                  <Lock className="text-[#FF7394] shrink-0" size={18} />
                  <p className="text-gray-900 text-[14px]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Data Retention */}
          <section className="space-y-6">
            <SectionHeading number="7" title="Data Retention" />
            <p className="text-gray-900 text-[14px] mb-4">
              We retain your personal information:
            </p>
            <div className="bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-sm">
              {dataRetention.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 border-b border-pink-50 last:border-b-0 flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-[#FF7394] rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-900 text-[14px] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Your Rights */}
          <section className="space-y-6">
            <SectionHeading number="8" title="Your Rights" />
            <p className="text-gray-900 text-[14px] mb-4">
              Depending on applicable law, you may have the right to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {yourRights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-sm border border-pink-100 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-[#FF7394] rounded-full shrink-0" />
                  <p className="text-gray-900 text-[14px] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 mt-4 text-center">
              <p className="text-gray-900 text-[14px]">
                Requests may be made by{" "}
                <span className="font-bold text-[#FF7394]">contacting us</span>.
              </p>
            </div>
          </section>

          {/* 9. Cookies and Tracking Technologies */}
          <section className="space-y-6">
            <SectionHeading
              number="9"
              title="Cookies and Tracking Technologies"
            />
            <p className="text-gray-900 text-[14px] mb-4">
              We may use cookies and similar technologies to:
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {cookiesTracking.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-pink-100 text-gray-900 px-4 py-2 rounded-full text-[13px] shadow-sm flex items-center gap-2"
                >
                  <Cookie size={14} className="text-[#FF7394]" /> {item}
                </span>
              ))}
            </div>
            <p className="text-gray-900 text-[14px] italic">
              You may disable cookies through browser settings, but some
              features may not work properly.
            </p>
          </section>

          {/* 10. Third-Party Services */}
          <section className="space-y-6">
            <SectionHeading number="10" title="Third-Party Services" />
            <p className="text-gray-900 text-[14px] mb-4">
              Our Platform may use third-party services such as:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {thirdPartyServices.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-pink-100 rounded-xl p-4 text-center shadow-sm"
                >
                  <p className="text-gray-900 text-[13px] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-900 text-[14px] italic">
              These services may have their own privacy policies.
            </p>
          </section>

          {/* 11. Children's Privacy */}
          <section className="space-y-6">
            <SectionHeading number="11" title="Children’s Privacy" />
            <div className="bg-white shadow-sm border border-pink-100 rounded-xl p-5 flex items-center gap-4">
              <AlertTriangle className="text-[#FF7394] shrink-0" size={24} />
              <p className="text-gray-900 text-[14px] leading-relaxed">
                Our Platform is not intended for persons under 18 years of age.
                We do not knowingly collect personal information from minors.
              </p>
            </div>
          </section>

          {/* 12. International Data Transfers */}
          <section className="space-y-6">
            <SectionHeading number="12" title="International Data Transfers" />
            <div className="bg-white shadow-sm border border-pink-100 rounded-xl p-5 flex items-center gap-4">
              <Globe className="text-[#FF7394] shrink-0" size={24} />
              <p className="text-gray-900 text-[14px] leading-relaxed">
                Your information may be processed or stored on servers located
                in different countries where data protection laws may differ.
              </p>
            </div>
          </section>

          {/* 13. Changes to This Privacy Policy */}
          <section className="space-y-6">
            <SectionHeading
              number="13"
              title="Changes to This Privacy Policy"
            />
            <div className="bg-white shadow-sm border border-pink-100 rounded-xl p-5 flex items-center gap-4">
              <RefreshCcw className="text-[#FF7394] shrink-0" size={24} />
              <p className="text-gray-900 text-[14px] leading-relaxed">
                We may update this Privacy Policy from time to time. Updated
                versions will be posted on the Platform with a revised date.
              </p>
            </div>
          </section>

          {/* 14. Contact Us */}
          <section className="space-y-6">
            <SectionHeading number="14" title="Contact Us" />
            <p className="text-gray-900 text-[14px] mb-4">
              If you have any questions regarding this Privacy Policy, contact
              us:
            </p>
            <div className="bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-pink-100 text-center">
                  <Mail className="text-[#FF7394] mx-auto mb-3" size={24} />
                  <div className="text-[14px] text-gray-900 font-bold">
                    {contactDetails.email}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <Phone className="text-[#FF7394] mx-auto mb-3" size={24} />
                  <div className="text-[14px] text-gray-900 font-bold">
                    {contactDetails.phone}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 pt-8">
              <p className="text-[14px] text-gray-900 mb-8 font-medium">
                Consent: By using our Platform, you agree to this Privacy
                Policy.
              </p>
              <p className="text-[13px] text-gray-400 italic">
                End of Privacy Policy - Risto Ki Door
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
