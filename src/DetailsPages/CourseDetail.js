import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

// Sample course data for each subject
const courseData = {
  Maths: {
    title: "Mathematics",
    description: "Explore the world of numbers, patterns, and logical reasoning. Our mathematics course covers everything from basic arithmetic to advanced calculus.",
    duration: "12 weeks",
    level: "Intermediate to Advanced",
    instructor: "Dr. Alan Turing",
    prerequisites: "Basic algebra knowledge",
    syllabus: [
      { week: 1, topic: "Algebra Fundamentals", content: "Linear equations, inequalities, polynomials" },
      { week: 2, topic: "Functions and Graphs", content: "Understanding different types of functions and their graphical representations" },
      { week: 3, topic: "Trigonometry", content: "Trigonometric functions, identities, and equations" },
      { week: 4, topic: "Calculus Introduction", content: "Limits, derivatives, and basic integration" },
      { week: 5, topic: "Advanced Calculus", content: "Applications of derivatives and integrals" },
      { week: 6, topic: "Probability", content: "Basic probability theory and distributions" },
      { week: 7, topic: "Statistics", content: "Descriptive and inferential statistics" },
      { week: 8, topic: "Geometry", content: "Euclidean geometry and coordinate systems" },
      { week: 9, topic: "Linear Algebra", content: "Matrices, vectors, and systems of equations" },
      { week: 10, topic: "Differential Equations", content: "First-order and second-order differential equations" },
      { week: 11, topic: "Number Theory", content: "Prime numbers, modular arithmetic" },
      { week: 12, topic: "Final Project", content: "Application of mathematical concepts to real-world problems" }
    ],
    resources: ["Textbook: 'Advanced Mathematics' by John Doe", "Online calculator", "Graphing software"],
    assessment: "Weekly quizzes (40%), Midterm exam (25%), Final project (35%)"
  },
  // Similar data structures for other subjects would follow
  English: {
    title: "English Literature and Composition",
    description: "Develop critical reading and writing skills through the study of classic and contemporary literature.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    instructor: "Prof. Jane Austen",
    prerequisites: "Basic writing skills",
    syllabus: [
      { week: 1, topic: "Introduction to Literary Analysis", content: "Understanding literary devices and themes" },
      { week: 2, topic: "Poetry", content: "Analysis of poetic forms and techniques" },
      { week: 3, topic: "Shakespeare", content: "Study of selected plays and sonnets" },
      { week: 4, topic: "19th Century Novel", content: "Reading and analysis of classic novels" },
      { week: 5, topic: "Modern Literature", content: "Exploring 20th century works" },
      { week: 6, topic: "Essay Writing", content: "Developing thesis statements and arguments" },
      { week: 7, topic: "Research Techniques", content: "Proper citation and research methods" },
      { week: 8, topic: "Creative Writing", content: "Fiction and non-fiction writing exercises" },
      { week: 9, topic: "Literary Criticism", content: "Different approaches to analyzing literature" },
      { week: 10, topic: "Final Paper", content: "Comprehensive analysis of a literary work" }
    ],
    resources: ["Anthology of English Literature", "Writing Handbook", "Online research database access"],
    assessment: "Reading responses (30%), Essays (40%), Final paper (30%)"
  }
};

const SubjectPicker = () => {
  const navigate = useNavigate();
  
  const handleSubjectSelect = (subject) => {
    navigate(`/details/${subject}`);
  };

  return (
    <div className="subject-picker">
      <h2>Pick a subject to get started</h2>
      <div className="subject-grid">
        {subjects.map((subject, idx) => (
          <button 
            key={idx} 
            className="subject-btn"
            onClick={() => handleSubjectSelect(subject)}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

const CourseDetails = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Get course data for the selected subject
  const course = courseData[subject] || {
    title: subject,
    description: `Detailed information about ${subject} will be available soon.`,
    duration: "TBD",
    level: "All levels",
    instructor: "TBA",
    prerequisites: "None",
    syllabus: [],
    resources: [],
    assessment: "TBD"
  };

  const renderFlowchart = () => {
    return (
      <div className="flowchart">
        <h3>Course Flowchart</h3>
        <div className="flowchart-steps">
          <div className="flow-step">
            <div className="step-number">1</div>
            <div className="step-content">Prerequisites: {course.prerequisites}</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="step-number">2</div>
            <div className="step-content">Core Concepts</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="step-number">3</div>
            <div className="step-content">Advanced Topics</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="step-number">4</div>
            <div className="step-content">Practical Applications</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <div className="step-number">5</div>
            <div className="step-content">Assessment: {course.assessment}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderSyllabusTable = () => {
    return (
      <table className="syllabus-table">
        <thead>
          <tr>
            <th>Week</th>
            <th>Topic</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {course.syllabus.length > 0 ? (
            course.syllabus.map((item, index) => (
              <tr key={index}>
                <td>{item.week}</td>
                <td>{item.topic}</td>
                <td>{item.content}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Syllabus details coming soon</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };

  return (
    <div className="course-details">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Subjects
      </button>
      
      <header className="course-header">
        <h1>{course.title}</h1>
        <p className="course-description">{course.description}</p>
      </header>

      <div className="course-tabs">
        <button 
          className={activeTab === "overview" ? "tab-active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button 
          className={activeTab === "syllabus" ? "tab-active" : ""}
          onClick={() => setActiveTab("syllabus")}
        >
          Syllabus
        </button>
        <button 
          className={activeTab === "resources" ? "tab-active" : ""}
          onClick={() => setActiveTab("resources")}
        >
          Resources
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "overview" && (
          <div className="overview-tab">
            <div className="course-meta">
              <div className="meta-item">
                <h4>Duration</h4>
                <p>{course.duration}</p>
              </div>
              <div className="meta-item">
                <h4>Level</h4>
                <p>{course.level}</p>
              </div>
              <div className="meta-item">
                <h4>Instructor</h4>
                <p>{course.instructor}</p>
              </div>
              <div className="meta-item">
                <h4>Prerequisites</h4>
                <p>{course.prerequisites}</p>
              </div>
            </div>

            {renderFlowchart()}

            <div className="assessment-info">
              <h3>Assessment</h3>
              <p>{course.assessment}</p>
            </div>
          </div>
        )}

        {activeTab === "syllabus" && (
          <div className="syllabus-tab">
            <h3>Course Syllabus</h3>
            {renderSyllabusTable()}
          </div>
        )}

        {activeTab === "resources" && (
          <div className="resources-tab">
            <h3>Learning Resources</h3>
            {course.resources.length > 0 ? (
              <ul>
                {course.resources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            ) : (
              <p>Resource list coming soon</p>
            )}
          </div>
        )}
      </div>
      <style>
        {`
        /* Subject Picker Styles */
.subject-picker {
  padding: 2rem;
  text-align: center;
}

.subject-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.subject-btn {
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #4a6fa5;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.subject-btn:hover {
  background-color: #3a5a80;
}

/* Course Details Styles */
.course-details {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.back-btn {
  background: none;
  border: none;
  color: #4a6fa5;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.back-btn:hover {
  text-decoration: underline;
}

.course-header {
  margin-bottom: 2rem;
}

.course-header h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.course-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.course-tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
}

.course-tabs button {
  padding: 0.8rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  position: relative;
}

.course-tabs button.tab-active {
  color: #4a6fa5;
  font-weight: bold;
}

.course-tabs button.tab-active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #4a6fa5;
}

.course-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.meta-item {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.meta-item h4 {
  margin-top: 0;
  color: #4a6fa5;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.meta-item p {
  margin-bottom: 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* Flowchart Styles */
.flowchart {
  margin-bottom: 2rem;
}

.flowchart h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.flowchart-steps {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flow-step {
  display: flex;
  align-items: center;
  background-color: #e8f4fc;
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 1rem;
}

.step-number {
  background-color: #4a6fa5;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
}

.step-content {
  font-weight: 500;
}

.flow-arrow {
  font-size: 1.5rem;
  color: #4a6fa5;
  margin: 0.5rem 0;
}

/* Table Styles */
.syllabus-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.syllabus-table th,
.syllabus-table td {
  padding: 0.8rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.syllabus-table th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #2c3e50;
}

.syllabus-table tr:hover {
  background-color: #f8f9fa;
}

/* Resources Styles */
.resources-tab ul {
  list-style-type: none;
  padding: 0;
}

.resources-tab li {
  padding: 0.8rem;
  border-bottom: 1px solid #eee;
}

.resources-tab li:last-child {
  border-bottom: none;
}

.assessment-info {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
}

.assessment-info h3 {
  margin-top: 0;
  color: #2c3e50;
}

/* Responsive Design */
@media (max-width: 768px) {
  .subject-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .course-meta {
    grid-template-columns: 1fr;
  }
  
  .flow-step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
  
  .syllabus-table {
    font-size: 0.9rem;
  }
  
  .course-tabs {
    flex-wrap: wrap;
  }
  
  .course-tabs button {
    flex: 1;
    min-width: 120px;
  }
}
        `}
      </style>
    </div>
  );
};

export { SubjectPicker, CourseDetails };