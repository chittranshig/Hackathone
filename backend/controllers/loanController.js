import {Loan} from "../models/loanSchema.js"
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";

export const applyLoan = catchAsyncErrors(async (req, res, next) => {
  const {
    borrowerName,
    borrowerEmail,
    loanAmount,
    loanType,
    loanDuration,
    annualIncome,
    employmentStatus,
    purpose,
  } = req.body;

  // Validate required fields
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
    return next(new ErrorHandler("All fields are required.", 400));
  }

  // Create a new loan application
  const loan = await Loan.create({
    borrowerName,
    borrowerEmail,
    loanAmount,
    loanType,
    loanDuration,
    annualIncome,
    employmentStatus,
    purpose,
  });

  res.status(201).json({
    success: true,
    message: "Loan application submitted successfully.",
    loan,
  });
});

// Get all loan applications (admin access)
export const getAllLoans = catchAsyncErrors(async (req, res, next) => {
  const loans = await Loan.find();

  res.status(200).json({
    success: true,
    loans,
  });
});

// Get a specific loan by ID
export const getLoanById = catchAsyncErrors(async (req, res, next) => {
  const loan = await Loan.findById(req.params.id);

  if (!loan) {
    return next(new ErrorHandler("Loan not found.", 404));
  }

  res.status(200).json({
    success: true,
    loan,
  });
});

// Approve or reject loan application
export const updateLoanStatus = catchAsyncErrors(async (req, res, next) => {
  const { status } = req.body; // Accepts 'Approved' or 'Rejected'

  if (!status) {
    return next(new ErrorHandler("Status is required.", 400));
  }

  // Find loan by ID and update status
  const loan = await Loan.findByIdAndUpdate(
    req.params.id,
    { loanStatus: status },
    { new: true }
  );

  if (!loan) {
    return next(new ErrorHandler("Loan not found.", 404));
  }

  res.status(200).json({
    success: true,
    message: `Loan application ${status.toLowerCase()} successfully.`,
    loan,
  });
});

// Delete a loan application (for admins)
export const deleteLoan = catchAsyncErrors(async (req, res, next) => {
  const loan = await Loan.findByIdAndDelete(req.params.id);

  if (!loan) {
    return next(new ErrorHandler("Loan not found.", 404));
  }

  res.status(200).json({
    success: true,
    message: "Loan application deleted successfully.",
  });
});
