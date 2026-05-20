export default function LegalCard({ title, text }) {
  return (
    <div className="bg-white border border-pink-100 rounded-xl p-5 shadow-sm">
      <h3 className="text-[15px] font-bold text-[#FF7394] mb-2">
        {title}
      </h3>

      <p className="text-gray-900 text-[13px] leading-relaxed">
        {text}
      </p>
    </div>
  );
}
