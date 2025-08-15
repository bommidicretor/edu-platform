import { useState, useEffect } from "react";
import GradeSelection from "./GradeSelection";
import MainLayout from "./MainLayout";
import data from "./data.json";

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [gradeData, setGradeData] = useState([]);

  useEffect(() => {
    setGradeData(data.grades);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100">
      {!selectedGrade ? (
        <GradeSelection grades={gradeData} onSelect={setSelectedGrade} />
      ) : (
        <MainLayout grade={selectedGrade} />
      )}
    </div>
  );
}