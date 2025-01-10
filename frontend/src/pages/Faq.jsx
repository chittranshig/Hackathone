import React from 'react';

const faqs = [
  {
    question: "How do I apply for a loan?",
    answer: "To apply for a loan, simply fill out the loan application form on our website with your personal and financial details. Once submitted, our team will review your application and get back to you.",
  },
  {
    question: "What documents do I need to apply for a loan?",
    answer: "You will need to provide proof of identity, proof of income, and a valid address proof. Additional documents may be required based on the loan type.",
  },
  {
    question: "How long does it take to get approval for my loan?",
    answer: "Loan approval typically takes 2-3 business days after submission of all required documents. However, it may take longer if additional verification is needed.",
  },
  {
    question: "Can I repay my loan early?",
    answer: "Yes, you can repay your loan early. However, please check the terms and conditions of your loan agreement, as some loans may have early repayment fees.",
  },
  {
    question: "What happens if I miss a loan repayment?",
    answer: "If you miss a repayment, please contact our support team immediately to discuss the options. Missing payments may result in penalties or affect your credit score.",
  },
  {
    question: "How do I check the status of my loan?",
    answer: "You can check your loan status by logging into your account and visiting the 'Loan Status' section. You will also receive email notifications about any updates.",
  },
];

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">
              <h3>{faq.question}</h3>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;