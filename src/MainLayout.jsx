import { useState, useEffect } from "react";
import SubjectDropdown from "./SubjectDropdown";
import TopicList from "./TopicList";
import { Menu } from "lucide-react";

export default function MainLayout({ grade }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (grade.subjects.length > 0) {
      setSelectedSubject(grade.subjects[0]);
      setSelectedChapter(grade.subjects[0].chapters[0]);
    }
  }, [grade]);

  return (
    <div className="flex w-full h-screen relative">
      <button
        className="absolute top-4 left-4 z-30 p-2 bg-blue-500 text-white rounded-md lg:hidden"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={20} />
      </button>

      <div
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white border-r p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out z-20
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:w-2/5`}
      >
        {grade.subjects.map((subject, idx) => (
          <SubjectDropdown
            key={idx}
            subject={subject}
            expanded={subject === selectedSubject}
            onExpand={() => setSelectedSubject(subject)}
            selectedChapter={selectedChapter}
            onSelectChapter={(ch) => {
              setSelectedChapter(ch);
              setMenuOpen(false);
            }}
          />
        ))}
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className="flex-1 lg:w-3/5 p-6 overflow-y-auto">
        {selectedChapter && <TopicList topics={selectedChapter.topics} />}
      </div>
    </div>
  );
}