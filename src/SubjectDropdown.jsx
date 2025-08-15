import { ChevronDown, ChevronRight } from "lucide-react";

export default function SubjectDropdown({
  subject,
  expanded,
  onExpand,
  selectedChapter,
  onSelectChapter
}) {
  return (
    <div className="mb-4 border rounded-lg overflow-hidden">
      <button
        onClick={onExpand}
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 font-semibold"
      >
        {subject.name}
        {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {expanded &&
          subject.chapters.map((ch, idx) => (
            <div
              key={idx}
              onClick={() => onSelectChapter(ch)}
              className={`px-6 py-2 cursor-pointer transition ${
                ch === selectedChapter
                  ? "bg-blue-100 font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              {ch.name}
            </div>
          ))}
      </div>
    </div>
  );
}