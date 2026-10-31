import {
  ShieldCheck,
  Eye,
  Lock,
  Globe,
  Cookie,
  AlertTriangle,
  RefreshCcw,
  Mail,
  Phone,
  Share2,
  MessageCircle,
  ExternalLink,
  Trash2,
  Building2,
  MapPin,
  Clock,
  CheckCircle2,
  UserCheck,
  Video,
} from "lucide-react";
import {
  companyInfo,
  introText,
  informationWeCollect,
  devicePermissions,
  callingDisclosure,
  thirdPartyProviders,
  accountDeletionPolicy,
  howWeUseInfo,
  profileVisibility,
  sharingOfInformation,
  userCommunication,
  dataSecurity,
  dataRetention,
  yourRights,
  cookiesTracking,
  grievanceOfficer,
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
        <div className="bg-white rounded-2xl shadow-sm border-b-[6px] border-b-[#FF7394] p-6 md:p-8 mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF7394] flex items-center justify-center shrink-0 shadow-md">
                <ShieldCheck className="text-white" size={26} />
              </div>

              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                  {companyInfo.appName} - Privacy Policy
                </h1>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  Operated by{" "}
                  <span className="font-semibold text-gray-900">
                    {companyInfo.legalEntity}
                  </span>
                </p>
              </div>
            </div>

            {/* Compliance Pills */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-pink-50 border border-pink-200 text-[#FF7394] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Google Play Policy Compliant
              </span>
              <span className="bg-pink-50 border border-pink-200 text-[#FF7394] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                <ShieldCheck size={13} /> DPDP Act 2023 & IT Rules
              </span>
            </div>
          </div>
        </div>

        {/* BREADCRUMB / INTRO */}
        <div className="flex flex-col gap-2 px-3 md:px-6 mb-8">
          <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-[#FF7394]">
            <span className="text-lg leading-none mt-[-2px]">{">"}</span>
            Privacy Policy & Data Protection Disclosures
            <span className="text-gray-500 ml-2 font-normal text-xs">
              (Effective Date: {currentDate})
            </span>
          </div>
          <p className="text-gray-900 text-[14px] md:text-[16px] leading-relaxed mt-2">
            {introText}
          </p>
        </div>

        {/* QUICK ACTION HIGHLIGHT BANNER FOR PLAY CONSOLE MANDATORY DISCLOSURES */}
        <div className="mb-10 bg-gradient-to-r from-pink-50 via-white to-pink-50 border border-pink-200 rounded-2xl p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#FF7394] uppercase tracking-wide">
                <Trash2 size={16} /> User Data & Account Rights
              </div>
              <p className="text-gray-800 text-sm mt-1">
                Need to delete your account and personal data? You can submit an
                instant deletion request through our official web portal without
                reinstalling the app.
              </p>
            </div>
            <a
              href={accountDeletionPolicy.channels[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FF7394] hover:bg-[#ff5b83] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-colors whitespace-nowrap"
            >
              Account Deletion Page <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* MAIN SECTIONS */}
        <div className="space-y-12 pb-12 md:pb-16">
          {/* 1. Information We Collect */}
          <section className="space-y-6">
            <SectionHeading number="1" title="Information We Collect" />
            <p className="text-gray-900 text-[14px]">
              We collect information to provide secure and personalized
              matchmaking services. The information we gather includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {informationWeCollect.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm hover:border-pink-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
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
                    </div>
                    {category.note && (
                      <div className="bg-pink-50/70 border border-pink-100 rounded-xl p-3 mt-4">
                        <p className="text-gray-800 text-[12px] leading-relaxed font-medium">
                          {category.note}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. Device Permissions & Hardware Access (Crucial for Google Play) */}
          <section className="space-y-6">
            <SectionHeading
              number="2"
              title="Device Permissions & Hardware Access"
            />
            <p className="text-gray-900 text-[14px]">
              To support core features such as live calling, profile photo
              uploads, and in-chat contact sharing, Rishton Ki Dor requests the
              following specific Android device permissions. We request these
              permissions only when necessary for the corresponding user-invoked
              feature:
            </p>

            <div className="space-y-4">
              {devicePermissions.map((perm, idx) => {
                const Icon = perm.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white shadow-sm border border-pink-100 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-pink-300 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                      <Icon className="text-[#FF7394]" size={22} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[14px] font-bold text-[#FF7394] font-mono">
                        {perm.permission}
                      </div>
                      <p className="text-gray-900 text-[14px] leading-relaxed">
                        {perm.purpose}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-pink-50 border-l-4 border-[#FF7394] rounded-r-xl p-4">
              <p className="text-gray-900 text-[13px] leading-relaxed font-medium">
                <strong>Important Contact Privacy Guarantee:</strong> Rishton Ki
                Dor only accesses contact information when you explicitly choose
                to share an individual contact card within the in-app chat. We do{" "}
                <strong>NOT</strong> upload, harvest, sync, or store your entire
                phone address book on our servers.
              </p>
            </div>
          </section>

          {/* 3. Real-Time Audio & Video Calling Disclosure (Agora RTC) */}
          <section className="space-y-6">
            <SectionHeading
              number="3"
              title="Real-Time Audio and Video Calling (Agora.io RTC)"
            />
            <div className="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                  <Video className="text-[#FF7394]" size={20} />
                </div>
                <h3 className="text-[16px] font-bold text-[#FF7394]">
                  {callingDisclosure.title}
                </h3>
              </div>
              <p className="text-gray-900 text-[14px] leading-relaxed">
                {callingDisclosure.description}
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="flex items-center gap-2 bg-pink-50/50 p-2.5 rounded-lg border border-pink-100">
                  <CheckCircle2 size={16} className="text-[#FF7394] shrink-0" />
                  <span>Peer-to-peer real-time transmission</span>
                </div>
                <div className="flex items-center gap-2 bg-pink-50/50 p-2.5 rounded-lg border border-pink-100">
                  <CheckCircle2 size={16} className="text-[#FF7394] shrink-0" />
                  <span>Audio & video streams are NOT recorded or stored</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Account & Data Deletion Policy (Google Play Mandatory) */}
          <section className="space-y-6">
            <SectionHeading
              number="4"
              title="Account & Data Deletion Policy (Play Console Requirement)"
            />
            <div className="bg-white border border-pink-100 rounded-2xl p-6 shadow-sm space-y-6">
              <p className="text-gray-900 text-[14px] leading-relaxed">
                {accountDeletionPolicy.description}
              </p>

              {/* Channels */}
              <div className="space-y-4">
                <h4 className="text-[15px] font-bold text-gray-900">
                  How You Can Request Account Deletion:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {accountDeletionPolicy.channels.map((ch, idx) => (
                    <div
                      key={idx}
                      className="bg-pink-50/60 border border-pink-100 rounded-xl p-5 flex flex-col justify-between"
                    >
                      <div>
                        <h5 className="text-[14px] font-bold text-[#FF7394] mb-2">
                          {ch.title}
                        </h5>
                        <p className="text-gray-800 text-[13px] leading-relaxed">
                          {ch.description}
                        </p>
                      </div>

                      {ch.url && (
                        <div className="mt-4">
                          <a
                            href={ch.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7394] hover:underline"
                          >
                            {ch.linkText} <ExternalLink size={14} />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Public link callout */}
              <div className="p-4 bg-pink-50 rounded-xl border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[13px] text-gray-800 font-medium">
                  Direct Public Account Deletion Link:{" "}
                  <strong className="text-gray-900">
                    {companyInfo.deletionUrl}
                  </strong>
                </span>
                <a
                  href={companyInfo.deletionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF7394] text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#ff5b83] transition-colors shrink-0 inline-flex items-center gap-1.5"
                >
                  Visit Deletion Page <ExternalLink size={13} />
                </a>
              </div>

              {/* What happens upon deletion */}
              <div className="space-y-3 pt-2 border-t border-pink-100">
                <h4 className="text-[15px] font-bold text-gray-900">
                  What Happens When Your Account Is Deleted:
                </h4>
                <div className="space-y-2">
                  {accountDeletionPolicy.whatHappens.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={17}
                        className="text-[#FF7394] shrink-0 mt-0.5"
                      />
                      <p className="text-gray-900 text-[13px] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Third-Party Service Providers (Matches Data Safety Form) */}
          <section className="space-y-6">
            <SectionHeading
              number="5"
              title="Third-Party Service Providers & SDK Disclosures"
            />
            <p className="text-gray-900 text-[14px]">
              To deliver seamless, secure matchmaking, Rishton Ki Dor
              integrates reputable third-party infrastructure and software
              development kits (SDKs). These providers adhere to strict data
              security, privacy, and confidentiality standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {thirdPartyProviders.map((provider, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm hover:border-pink-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[15px] font-bold text-gray-900">
                        {provider.name}
                      </h4>
                      <span className="text-[11px] font-semibold bg-pink-50 text-[#FF7394] px-2.5 py-0.5 rounded-full border border-pink-100">
                        {provider.category}
                      </span>
                    </div>
                    <p className="text-gray-700 text-[13px] leading-relaxed mt-2">
                      {provider.purpose}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-pink-50">
                    <a
                      href={provider.privacyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#FF7394] hover:underline"
                    >
                      View {provider.name} Privacy Policy{" "}
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. How We Use Your Information */}
          <section className="space-y-6">
            <SectionHeading number="6" title="How We Use Your Information" />
            <p className="text-gray-900 text-[14px] mb-4">
              We process personal information only for legitimate matrimonial
              matchmaking, security, and administrative purposes:
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

          {/* 7. Profile Visibility & Privacy Settings */}
          <section className="space-y-6">
            <SectionHeading
              number="7"
              title="Profile Visibility & User Privacy Controls"
            />
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

          {/* 8. Sharing of Information */}
          <section className="space-y-6">
            <SectionHeading number="8" title="Sharing of Information" />
            <p className="text-gray-900 text-[14px] mb-4">
              We may disclose your data only in the following specific circumstances:
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
                Strict Zero-Sale Commitment: Rishton Ki Dor does not sell, rent,
                or trade your personal data to third parties for marketing
                purposes.
              </p>
            </div>
          </section>

          {/* 9. User Communication & Safety */}
          <section className="space-y-6">
            <SectionHeading
              number="9"
              title="User Communication & Safety Surveillance"
            />
            <p className="text-gray-900 text-[14px] mb-4">
              To ensure user safety and curb fraudulent activities, messages and
              user interactions may be programmatically scanned or reviewed for:
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

          {/* 10. Data Security */}
          <section className="space-y-6">
            <SectionHeading number="10" title="Data Security & Safeguards" />
            <p className="text-gray-900 text-[14px] mb-4">
              We implement comprehensive technical and organizational safeguards:
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

          {/* 11. Data Retention */}
          <section className="space-y-6">
            <SectionHeading number="11" title="Data Retention Schedule" />
            <p className="text-gray-900 text-[14px] mb-4">
              We maintain a defined lifecycle for retained user data:
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

          {/* 12. Your Legal Rights (DPDP Act 2023) */}
          <section className="space-y-6">
            <SectionHeading
              number="12"
              title="Your Legal Rights & Consent Management"
            />
            <p className="text-gray-900 text-[14px] mb-4">
              Under the Digital Personal Data Protection Act 2023 and applicable
              data privacy regulations, you possess the following rights:
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
          </section>

          {/* 13. Cookies & Tracking Technologies */}
          <section className="space-y-6">
            <SectionHeading
              number="13"
              title="Cookies & Tracking Technologies"
            />
            <p className="text-gray-900 text-[14px] mb-4">
              Our website and mobile app services utilize tokens and session
              identifiers to:
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
          </section>

          {/* 14. Children's Privacy (Strict 18+ Rule) */}
          <section className="space-y-6">
            <SectionHeading number="14" title="Children’s Privacy (Strict 18+ Rule)" />
            <div className="bg-white shadow-sm border border-pink-100 rounded-xl p-5 flex items-center gap-4">
              <AlertTriangle className="text-[#FF7394] shrink-0" size={24} />
              <p className="text-gray-900 text-[14px] leading-relaxed">
                Rishton Ki Dor is strictly intended for individuals aged 18 years
                or older. We maintain a zero-tolerance policy against child
                exploitation and do not knowingly collect personal data from
                minors. Any minor profile identified will be immediately deleted.
              </p>
            </div>
          </section>

          {/* 15. International Data Transfers */}
          <section className="space-y-6">
            <SectionHeading number="15" title="International Data Transfers" />
            <div className="bg-white shadow-sm border border-pink-100 rounded-xl p-5 flex items-center gap-4">
              <Globe className="text-[#FF7394] shrink-0" size={24} />
              <p className="text-gray-900 text-[14px] leading-relaxed">
                Your data is primarily hosted on secure cloud infrastructure
                within India. Certain third-party SDKs (such as Agora or
                Firebase) may transmit media signals or telemetry across secure
                global data centers in compliance with international data
                protection benchmarks.
              </p>
            </div>
          </section>

          {/* 16. Changes to This Privacy Policy */}
          <section className="space-y-6">
            <SectionHeading
              number="16"
              title="Changes to This Privacy Policy"
            />
            <div className="bg-white shadow-sm border border-pink-100 rounded-xl p-5 flex items-center gap-4">
              <RefreshCcw className="text-[#FF7394] shrink-0" size={24} />
              <p className="text-gray-900 text-[14px] leading-relaxed">
                We periodically revise this Privacy Policy to reflect evolving
                legal regulations and product features. Updates are immediately
                effective upon publishing on our platform with an updated
                Effective Date.
              </p>
            </div>
          </section>

          {/* 17. Statutory Grievance Officer & Legal Contact */}
          <section className="space-y-6">
            <SectionHeading
              number="17"
              title="Statutory Grievance Officer & Legal Contact"
            />
            <p className="text-gray-900 text-[14px] mb-4">
              In accordance with the Information Technology Act 2000, the
              Information Technology (Intermediary Guidelines and Digital Media
              Ethics Code) Rules 2021, and the Digital Personal Data Protection
              Act 2023, the designated Grievance Officer details are provided
              below:
            </p>

            <div className="bg-white border-2 border-pink-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-pink-50/70 p-4 border-b border-pink-100 flex items-center gap-3">
                <UserCheck className="text-[#FF7394]" size={22} />
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900">
                    Grievance Redressal Mechanism
                  </h4>
                  <p className="text-xs text-gray-600">
                    Designated Compliance and Redressal Office
                  </p>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <UserCheck className="text-[#FF7394] shrink-0 mt-1" size={18} />
                    <div>
                      <div className="text-xs uppercase font-bold text-gray-400">
                        Officer Name & Designation
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {grievanceOfficer.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {grievanceOfficer.designation}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="text-[#FF7394] shrink-0 mt-1" size={18} />
                    <div>
                      <div className="text-xs uppercase font-bold text-gray-400">
                        Legal Entity / Company Name
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {grievanceOfficer.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#FF7394] shrink-0 mt-1" size={18} />
                    <div>
                      <div className="text-xs uppercase font-bold text-gray-400">
                        Physical Office Address
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        {grievanceOfficer.address}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#FF7394] shrink-0 mt-1" size={18} />
                    <div>
                      <div className="text-xs uppercase font-bold text-gray-400">
                        Grievance Email Address
                      </div>
                      <a
                        href={`mailto:${grievanceOfficer.email}`}
                        className="text-sm font-bold text-[#FF7394] hover:underline"
                      >
                        {grievanceOfficer.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-[#FF7394] shrink-0 mt-1" size={18} />
                    <div>
                      <div className="text-xs uppercase font-bold text-gray-400">
                        Direct Helpline
                      </div>
                      <a
                        href={`tel:${grievanceOfficer.phone}`}
                        className="text-sm font-bold text-gray-900 hover:text-[#FF7394]"
                      >
                        {grievanceOfficer.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-[#FF7394] shrink-0 mt-1" size={18} />
                    <div>
                      <div className="text-xs uppercase font-bold text-gray-400">
                        Statutory Redressal Timeline
                      </div>
                      <div className="text-xs font-semibold text-gray-900">
                        {grievanceOfficer.responseWindow}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 pt-8">
              <p className="text-[14px] text-gray-900 mb-2 font-medium">
                Consent: By using our Platform, you acknowledge that you have
                read and agree to this Privacy Policy.
              </p>
              <p className="text-[13px] text-gray-400 italic">
                End of Privacy Policy - {companyInfo.appName} (Operated by{" "}
                {companyInfo.legalEntity})
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
