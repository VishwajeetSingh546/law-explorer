import { useState } from "react";

const ModulePage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});

  const pages = [
    {
      type: "lesson",
      title: "Introduction to Article 21",
      content: [
        "Article 21 of the Indian Constitution states, 'No person shall be deprived of his life or personal liberty except according to procedure established by law.' This article provides one of the most significant fundamental rights available to individuals in India.",
        "The scope of Article 21 has expanded over time through various judicial interpretations. Initially, it was seen as a basic right protecting against arbitrary actions by the state. However, through landmark judgments, it now encompasses various other rights essential for a dignified life.",
        "This right is enforceable against the state, meaning that the government must ensure laws do not unjustly infringe on a person's life or personal liberty. Article 21 is fundamental to human existence and serves as a bedrock for the enforcement of many other rights.",
      ],
      image: "https://picsum.photos/400",
    },
    {
      type: "quiz",
      question: "What does Article 21 primarily guarantee?",
      options: [
        "Right to Education",
        "Right to Life and Personal Liberty",
        "Right to Property",
        "Right to Equality",
      ],
      // image: "https://picsum.photos/200",
    },
    {
      type: "quiz",
      question: "Article 21 is enforceable against whom?",
      options: [
        "The State",
        "Private Individuals",
        "Corporations",
        "All of the above",
      ],
      // image: "https://picsum.photos/200",
    },
    {
      type: "lesson",
      title: "Scope and Interpretation of Right to Life",
      content: [
        "The term 'right to life' under Article 21 has been interpreted by the courts to include more than mere survival. It encompasses the right to live with dignity, health, education, and a clean environment. Thus, Article 21 is not confined to physical existence but includes all essentials that make life meaningful.",
        "The Supreme Court has often expanded the scope of Article 21, recognizing it as a source of many derived rights, such as the right to livelihood, privacy, shelter, and healthcare. This judicial interpretation emphasizes the role of the judiciary in upholding a high standard for the right to life.",
        "In India, the courts have played a vital role in ensuring that the right to life is protected in all aspects. For instance, the right to a pollution-free environment, health care, and a fair trial have all been considered part of the right to life under Article 21.",
      ],
      image: "https://picsum.photos/400",
    },
    {
      type: "quiz",
      question: "What does the right to life include under Article 21?",
      options: [
        "Only physical survival",
        "Living with dignity",
        "Right to own property",
        "Only health care",
      ],
      // image: "https://picsum.photos/200",
    },
    {
      type: "quiz",
      question:
        "Which of the following is NOT included in the right to life under Article 21?",
      options: [
        "Right to privacy",
        "Right to livelihood",
        "Right to own property",
        "Right to health care",
      ],
      // image: "https://picsum.photos/200",
    },
    {
      type: "lesson",
      title: "Right to Personal Liberty Explained",
      content: [
        "Article 21 also guarantees the right to personal liberty, protecting individuals from unlawful detention and ensuring they are not deprived of their freedom arbitrarily. Personal liberty is fundamental for the free and fair functioning of society.",
        "The right to personal liberty includes various freedoms, such as the right to travel, the right to privacy, and protection against unlawful arrest. The Supreme Court has interpreted personal liberty to mean that every individual is entitled to lead their life according to their own preferences within the limits of the law.",
        "Through judicial interpretation, the concept of personal liberty has been expanded to include the freedom to make personal choices without unnecessary interference from the state, underscoring the balance between individual freedom and legal regulation.",
      ],
      image: "https://picsum.photos/400",
    },
    {
      type: "quiz",
      question:
        "Which freedom is protected under the right to personal liberty in Article 21?",
      options: [
        "Freedom of speech",
        "Freedom to travel",
        "Freedom of religion",
        "Freedom to own property",
      ],
      // image: "https://picsum.photos/200",
    },
    {
      type: "quiz",
      question: "Personal liberty under Article 21 protects against what?",
      options: [
        "Unlawful detention",
        "Freedom to conduct business",
        "Right to free speech",
        "Right to education",
      ],
      // image: "https://picsum.photos/200",
    },
    {
      type: "lesson",
      title: "Landmark Cases and Judgments",
      content: [
        "Several landmark cases have shaped the interpretation of Article 21 over the years. One of the most significant cases is the Maneka Gandhi v. Union of India, where the Supreme Court ruled that the right to life and personal liberty cannot be deprived without just, fair, and reasonable procedure. This case expanded the understanding of 'procedure established by law.'",
        "In another landmark case, the K. S. Puttaswamy v. Union of India, the right to privacy was recognized as an intrinsic part of the right to life and personal liberty under Article 21. This judgment paved the way for data protection and privacy laws in India.",
        "These landmark cases have not only expanded the scope of Article 21 but have also ensured that this fundamental right evolves with time, adapting to the needs and challenges of contemporary society.",
      ],
      image: "https://picsum.photos/400",
    },
    {
      type: "quiz",
      question:
        "Which case expanded the interpretation of 'procedure established by law' under Article 21?",
      options: [
        "Maneka Gandhi v. Union of India",
        "Golaknath v. State of Punjab",
        "Kesavananda Bharati v. State of Kerala",
        "None of the above",
      ],
      // image: "https://picsum.photos/200",
    },
    {
      type: "quiz",
      question:
        "The right to privacy was recognized under Article 21 in which case?",
      options: [
        "K. S. Puttaswamy v. Union of India",
        "Minerva Mills v. Union of India",
        "State of West Bengal v. Anwar Ali Sarkar",
        "None of the above",
      ],
      // image: "https://picsum.photos/200",
    },

    // {
    //   type: "lesson",
    //   title: "Introduction to Web Development",
    //   content:
    //     "Web development is the work involved in developing a website for the Internet...",
    //   image: "https://picsum.photos/400",
    // },
    // {
    //   type: "quiz",
    //   question: "Which of the following is a programming language?",
    //   options: ["HTML", "CSS", "JavaScript", "JSON"],
    //   image: "https://picsum.photos/200",
    // },
  ];

  const currentPage = pages[pageIndex];

  const handleOptionSelect = (selectedIndex) => {
    setQuizAnswers((prevAnswers) => ({
      ...prevAnswers,
      [pageIndex]: selectedIndex,
    }));
  };

  const handleNextPage = () => {
    if (pageIndex < pages.length - 1) setPageIndex(pageIndex + 1);
  };

  const handlePreviousPage = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 flex flex-col items-center justify-between py-12">
      <div className="max-w-2xl w-full bg-base-100 p-6 rounded-lg shadow-md">
        {currentPage.type === "lesson" ? (
          <>
            <h2 className="text-2xl font-bold mb-4">{currentPage.title}</h2>
            {currentPage.image && (
              <img
                src={currentPage.image}
                alt="Lesson"
                className="w-full h-auto mb-4"
              />
            )}
            {currentPage.content?.map((para, idx) => (
              <p key={idx} className="text-base-content">
                {para}
              </p>
            ))}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              {currentPage.question}
            </h2>
            {currentPage.image && (
              <img
                src={currentPage.image}
                alt="Quiz"
                className="max-w-full h-auto mb-4 object-contain mx-auto"
              />
            )}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {currentPage.options?.map((option, index) => (
                <button
                  key={index}
                  className={`p-3 rounded-lg text-left ${
                    quizAnswers[pageIndex] === index
                      ? "bg-primary text-white"
                      : "bg-base-200"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between w-full max-w-2xl mt-4">
        <button
          className="btn btn-secondary"
          disabled={pageIndex === 0}
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          disabled={pageIndex === pages.length - 1}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ModulePage;
