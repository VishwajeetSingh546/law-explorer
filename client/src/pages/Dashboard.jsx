import { Link } from "react-router-dom";

// Mock data for chapters and subchapters
const modules = [
  //   {
  //     id: 1,
  //     title: "Introduction to Web Development",
  //     completed: true,
  //     subchapters: [
  //       { id: 11, title: "HTML Basics", completed: true },
  //       { id: 12, title: "CSS Fundamentals", completed: true },
  //       { id: 13, title: "JavaScript Essentials", completed: true },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Front-end Frameworks",
  //     completed: false,
  //     subchapters: [
  //       { id: 21, title: "React Fundamentals", completed: true },
  //       { id: 22, title: "Vue.js Basics", completed: false },
  //       { id: 23, title: "Angular Introduction", completed: false },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Back-end Development",
  //     completed: false,
  //     subchapters: [
  //       { id: 31, title: "Node.js and Express", completed: false },
  //       { id: 32, title: "Database Integration", completed: false },
  //       { id: 33, title: "RESTful API Design", completed: false },
  //     ],
  //   },
  {
    id: 1,
    title: "Understanding Article 21: Right to Life and Personal Liberty",
    completed: false,
    subchapters: [
      { id: 11, title: "Introduction to Article 21", completed: false },
      {
        id: 12,
        title: "Scope and Interpretation of Right to Life",
        completed: false,
      },
      {
        id: 13,
        title: "Right to Personal Liberty Explained",
        completed: false,
      },
      { id: 14, title: "Landmark Cases and Judgments", completed: false },
    ],
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-6">Module Selection</h1>
        {modules.map((module) => (
          <div key={module.id} className="card bg-base-100 w-full shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">{module.title}</h2>
              <div className="pl-6">
                <ul className="space-y-2">
                  {module.subchapters.map((subchapter) => (
                    <li key={subchapter.id} className="flex items-center">
                      <span
                        className={`mr-2 h-4 w-4 ${
                          subchapter.completed
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                      >
                        {subchapter.completed ? "✔️" : "○"}
                      </span>
                      <span>{subchapter.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-actions justify-end">
                <Link to="/module" className="btn btn-primary">
                  Start Module
                </Link>
              </div>
            </div>
          </div>
          //   <div
          //     key={module.id}
          //     className="shadow-md rounded-lg mb-6 p-4"
          //   >
          //     <div className="flex items-center mb-2">
          //       <span
          //         className={`mr-2 h-5 w-5 ${
          //           module.completed ? "text-green-500" : "text-gray-300"
          //         }`}
          //       >
          //         {module.completed ? "✔️" : "○"}
          //       </span>
          //       <h2 className="font-semibold">{module.title}</h2>
          //     </div>
          //     <div className="pl-6">
          //       <ul className="space-y-2">
          //         {module.subchapters.map((subchapter) => (
          //           <li key={subchapter.id} className="flex items-center">
          //             <span
          //               className={`mr-2 h-4 w-4 ${
          //                 subchapter.completed
          //                   ? "text-green-500"
          //                   : "text-gray-300"
          //               }`}
          //             >
          //               {subchapter.completed ? "✔️" : "○"}
          //             </span>
          //             <span>{subchapter.title}</span>
          //           </li>
          //         ))}
          //       </ul>
          //       <button className="mt-4 w-full p-2 bg-blue-500 text-white rounded">
          //         Start Module
          //       </button>
          //     </div>
          //   </div>
        ))}
      </main>
    </div>
  );
}
