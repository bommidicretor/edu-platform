import { useEffect, useState } from "react";

export default function TopicList({ topics }) {
  const [displayTopics, setDisplayTopics] = useState(topics);
  const [fadeState, setFadeState] = useState("opacity-100 translate-y-0");

  useEffect(() => {
    setFadeState("opacity-0 translate-y-4");
    const timeout = setTimeout(() => {
      setDisplayTopics(topics);
      setFadeState("opacity-100 translate-y-0");
    }, 200);
    return () => clearTimeout(timeout);
  }, [topics]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out transform ${fadeState}`}
    >
      <h2 className="text-xl font-bold mb-4">Topics</h2>
      <ul className="space-y-2">
        {displayTopics.map((topic, idx) => (
          <li
            key={idx}
            className="p-3 bg-white shadow rounded-lg hover:shadow-md transition"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}