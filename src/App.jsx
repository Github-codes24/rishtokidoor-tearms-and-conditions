import { useState } from "react";
import PrivacyPolicy from "./components/privacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import { ShieldCheck, FileText } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="relative min-h-screen bg-[#FFF5F7] pb-24 font-sans text-gray-900">
      {/* Content Area */}
      <main className="w-full">
        {activeTab === "privacy" ? <PrivacyPolicy /> : <TermsAndConditions />}
      </main>

      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-pink-100 z-50">
        <div className="max-w-md mx-auto flex items-center justify-around p-3">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`flex flex-col items-center gap-1 transition-all duration-300 w-full py-2 rounded-xl ${
              activeTab === "privacy"
                ? "text-[#FF7394] bg-pink-50 font-bold"
                : "text-gray-400 hover:text-[#FF7394]"
            }`}
          >
            <ShieldCheck
              size={24}
              className={activeTab === "privacy" ? "drop-shadow-md" : ""}
            />
            <span className="text-[11px] uppercase tracking-wide">Privacy</span>
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`flex flex-col items-center gap-1 transition-all duration-300 w-full py-2 rounded-xl ${
              activeTab === "terms"
                ? "text-[#FF7394] bg-pink-50 font-bold"
                : "text-gray-400 hover:text-[#FF7394]"
            }`}
          >
            <FileText
              size={24}
              className={activeTab === "terms" ? "drop-shadow-md" : ""}
            />
            <span className="text-[11px] uppercase tracking-wide">Terms</span>
          </button>
        </div>
      </div>
    </div>
  );
}
