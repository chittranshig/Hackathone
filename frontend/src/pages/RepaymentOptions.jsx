import React from 'react';
const repaymentMethods = [
  {
    title: 'Bank Transfer',
    description:
      'Transfer the loan repayment amount directly from your bank account. You can make manual payments from any bank of your choice.',
    icon: '🏦',
  },
  {
    title: 'Online Payment Gateway',
    description:
      'Use our integrated online payment gateway to repay your loan securely using a credit card, debit card, or UPI.',
    icon: '💳',
  },
  {
    title: 'EMI Deductions',
    description:
      'Choose an automatic EMI deduction method, where the loan repayment will be deducted from your salary or bank account on a fixed date each month.',
    icon: '💸',
  },
  {
    title: 'Mobile Payments',
    description:
      'Repay your loan through popular mobile payment apps like PayPal, Google Pay, or Apple Pay. Fast and convenient.',
    icon: '📱',
  },
];

const RepaymentOptions = () => {
  return (
    <div className="repayment-options-container">
      <h2 className="repayment-options-heading">Repayment Options</h2>
      <div className="repayment-methods-container">
        {repaymentMethods.map((method, index) => (
          <div key={index} className="repayment-method-card">
            <div className="method-icon">{method.icon}</div>
            <h3 className="method-title">{method.title}</h3>
            <p className="method-description">{method.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepaymentOptions;
