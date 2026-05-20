export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1 h-6 bg-[#FF7394] rounded-sm" />
      <h2 className="text-[17px] font-bold text-gray-900">
        {number}. {title}
      </h2>
    </div>
  );
}
