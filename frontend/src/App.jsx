import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layouts/header.jsx'
import Footer from './layouts/footer.jsx'
import Home from './pages/Home.jsx'
import LoanForm from "./pages/LoanForm.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import About from "./pages/about.jsx"
import OurServices from "./pages/OurServices.jsx"
import HowItWorks from "./pages/HowItWorks.jsx";
import RepaymentOptions from "./pages/RepaymentOptions.jsx";
import FAQ from "./pages/Faq.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import PaymentMethod from "./pages/PaymentMethod.jsx";
import Dashboard from "./pages/afterPage.jsx";
import CustomerSupport from "./pages/customersupport.jsx";
import RegulatoryDisclosures from "./pages/RegulatoryDisclosures.jsx";
import Privacy from "./pages/Privacy.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
function App() {
  return (
    <>
      <Router>
        <Header />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"></link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loan-form" element={<LoanForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/me" element={<UserProfile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/repayment-options" element={<RepaymentOptions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Customersupport" element={<CustomerSupport />} />
          <Route path="/paymentMethod" element={<PaymentMethod />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/regulatoryDisclosures" element={<RegulatoryDisclosures />} />
          <Route path="/cookiePolicy" element={<CookiePolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"></link>
      </Router>
    </>
  )
}

export default App
