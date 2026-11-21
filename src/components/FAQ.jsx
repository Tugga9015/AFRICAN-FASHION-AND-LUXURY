import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How can I place an order?",
      answer:
        "Browse our collections, choose your preferred item, and add it to your shopping bag. You can review your selected items in the bag.",
    },
    {
      id: 2,
      question: "Do you offer delivery?",
      answer:
        "Delivery arrangements and availability can be confirmed with our customer support team.",
    },
    {
      id: 3,
      question: "Can I return or exchange an item?",
      answer:
        "Please contact our customer support team for information about returns and exchanges.",
    },
    {
      id: 4,
      question: "How can I contact AFRIQUE LUXE?",
      answer:
        "You can reach us through the contact form on our website or through our available contact channels.",
    },
  ];

  function toggleQuestion(index) {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-content">
        <p className="faq-subtitle">NEED SOME HELP?</p>

        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {questions.map((item, index) => (
            <div className="faq-item" key={item.id}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeQuestion === index}
                aria-controls={`faq-answer-${item.id}`}
              >
                {item.question}

                <span>
                  {activeQuestion === index ? "−" : "+"}
                </span>
              </button>

              {activeQuestion === index && (
                <p
                  className="faq-answer"
                  id={`faq-answer-${item.id}`}
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-image">
        <img
          src="/images/FAQ.png"
          alt="Elegant African fashion design"
        />
      </div>
    </section>
  );
}

export default FAQ;
