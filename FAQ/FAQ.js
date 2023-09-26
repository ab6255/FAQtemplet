import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [faqItems, setFaqItems] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const addFAQItem = () => {
    if (question && answer) {
      setFaqItems([...faqItems, { question, answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-form">
        <input
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={addFAQItem}>Add FAQ</button>
      </div>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;