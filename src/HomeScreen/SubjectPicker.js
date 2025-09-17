import React from "react";

const subjects = [
  "Maths",
  "English",
  "Chemistry",
  "Physics",
  "Biology",
  "Science",
  "Spanish",
  "French",
  "German",
  "History",
  "Music",
  "Psychology",
  "Politics",
  "All subjects",
];

const SubjectPicker = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f3ef] px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Pick a subject to get started
      </h1>

      {/* Subject Buttons */}
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
        {subjects.map((subject, idx) => (
          <button
            key={idx}
            className={`px-5 py-2 rounded-md border border-gray-300 shadow-sm bg-white text-lg font-medium hover:bg-gray-100 transition ${
              subject === "All subjects" ? "bg-gray-200 hover:bg-gray-300" : ""
            }`}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectPicker;
