import express from "express";

import {
  applyLoan
} from "../controllers/loanController.js";

const router = express.Router(); 

router.post("/apply-loan", applyLoan);

export default router;