import React from 'react';

const stepsData = [
  {
    step: 1,
    title: 'Sign Up and Create an Account',
    description:
      'Start by creating an account on our platform. Fill out the necessary details, including personal information and contact details.',
    icon: '📝',
  },
  {
    step: 2,
    title: 'Fill Out Loan Application Form',
    description:
      'Once you have an account, complete the loan application form by providing details such as loan amount, type, and purpose.',
    icon: '💼',
  },
  {
    step: 3,
    title: 'Submit Your Application',
    description:
      'After filling out the form, review your application and submit it. Our system will process your request and send it for evaluation.',
    icon: '✅',
  },
  {
    step: 4,
    title: 'Loan Evaluation and Approval',
    description:
      'Our team will evaluate your application based on various criteria such as your credit score, income, and loan type. Once approved, you will be notified.',
    icon: '🔍',
  },
  {
    step: 5,
    title: 'Receive the Loan Amount',
    description:
      'Once approved, the loan amount will be disbursed to your bank account or as per the agreed method.',
    icon: '💰',
  },
  {
    step: 6,
    title: 'Repay the Loan',
    description:
      'Start making repayments based on the terms of your loan. You can track your payment schedule and make payments through our platform.',
    icon: '💳',
  },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-heading">How It Works</h2>
      <div className="steps-container">
        {stepsData.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">Step {step.step}: {step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
