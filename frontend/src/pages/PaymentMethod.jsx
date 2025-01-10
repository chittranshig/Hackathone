// PaymentMethod.jsx
import React, { useState } from 'react';


const PaymentMethod = () => {
  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!paymentData.cardName) newErrors.cardName = 'Cardholder name is required.';
    if (!paymentData.cardNumber) {
      newErrors.cardNumber = 'Card number is required.';
    } else if (!/^[0-9]{16}$/.test(paymentData.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }
    if (!paymentData.expiryDate) {
      newErrors.expiryDate = 'Expiry date is required.';
    } else if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(paymentData.expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
    }
    if (!paymentData.cvv) {
      newErrors.cvv = 'CVV is required.';
    } else if (!/^[0-9]{3}$/.test(paymentData.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSuccessMessage("Payment processed successfully!");
      setPaymentData({ cardName: '', cardNumber: '', expiryDate: '', cvv: '' });
    }
  };

  return (
    <div className="container">
      <h1 className='heading'>Payment Method</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardName">Cardholder Name</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={paymentData.cardName}
            onChange={handleChange}
            placeholder="Enter cardholder name"
          />
          {errors.cardName && <span className="error">{errors.cardName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            placeholder="Enter 16-digit card number"
          />
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
          />
          {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleChange}
            placeholder="Enter 3-digit CVV"
          />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>
        <button type="submit">Submit Payment</button>
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
};

export default PaymentMethod;