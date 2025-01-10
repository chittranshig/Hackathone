import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoanForm = () => {
  // State to store form data
  const [borrowerName, setBorrowerName] = useState('');
  const [borrowerEmail, setBorrowerEmail] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [purpose, setPurpose] = useState('');

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (
      !borrowerName ||
      !borrowerEmail ||
      !loanAmount ||
      !loanType ||
      !loanDuration ||
      !annualIncome ||
      !employmentStatus ||
      !purpose
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
    
    // Prepare the data to be sent to the backend
    const formData = {
      borrowerName,
      borrowerEmail,
      loanAmount,
      loanType,
      loanDuration,
      annualIncome,
      employmentStatus,
      purpose,
    };

    try {
      // Send a POST request to your backend
      const response = await axios.post('http://localhost:8080/api/v1/loans/apply-loan', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,  // Add token if available
        }
      });
      console.log('Loan request submitted:', response.data);
      alert('Loan request submitted successfully!');
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting loan request:', error);
      alert('Error submitting loan request.');
    }
  };

  return (
    <div className="loan-form-container grd">
      <h2 className='heading'>Loan Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Borrower Name</label>
          <input
            type="text"
            className="form-control"
            name="borrowerName"
            value={borrowerName}
            onChange={(e) => setBorrowerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Borrower Email</label>
          <input
            type="email"
            className="form-control"
            name="borrowerEmail"
            value={borrowerEmail}
            onChange={(e) => setBorrowerEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Loan Amount</label>
          <input
            type="number"
            className="form-control"
            name="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Loan Type</label>
          <select
            className="form-control"
            name="loanType"
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            required
          >
            <option value="">Select Loan Type</option>
            <option value="Personal">Personal</option>
            <option value="Home">Home</option>
            <option value="Car">Car</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div className="form-group">
          <label>Loan Duration (in months)</label>
          <input
            type="number"
            className="form-control"
            name="loanDuration"
            value={loanDuration}
            onChange={(e) => setLoanDuration(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Annual Income</label>
          <input
            type="number"
            className="form-control"
            name="annualIncome"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Employment Status</label>
          <select
            className="form-control"
            name="employmentStatus"
            value={employmentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
            required
          >
            <option value="">Select Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Purpose of Loan</label>
          <textarea
            className="form-control"
            name="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit Loan Request</button>
        </div>
      </form>
    </div>
  );
};

export default LoanForm;