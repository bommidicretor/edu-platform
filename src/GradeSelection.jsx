export default function GradeSelection({ grades, onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="text-2xl font-bold">Select Your Grade</h1>
      <div className="grid grid-cols-2 gap-4">
        {grades.map((grade, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(grade)}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            {grade.name}
          </button>
        ))}
      </div>
    </div>
  );
}