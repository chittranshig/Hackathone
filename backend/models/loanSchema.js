import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  borrowerName: { type: String, required: true },
  borrowerEmail: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  loanType: { type: String, required: true },
  loanDuration: { type: Number, required: true }, // in months
  annualIncome: { type: Number, required: true },
  employmentStatus: { type: String, required: true },
  purpose: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  loanStatus: { type: String, default: "Pending" }, // Pending, Approved, Rejected
});



export const Loan = mongoose.model("Loan", loanSchema); 
