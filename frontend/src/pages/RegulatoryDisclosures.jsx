import React from "react";

function RegulatoryDisclosures() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }} className="grd">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }} className="heading">Regulatory Disclosures</h1>

      {/* Introduction Section */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">Welcome to Our Regulatory Disclosure Page</h2>
        <p>
          At <strong>Your Lending Company</strong>, we are committed to maintaining the highest standards of
          transparency and compliance with all applicable laws and regulations. This page outlines important
          disclosures to help you make informed decisions about our products and services.
        </p>
      </section>

      {/* Licensing Information */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">Licensing Information</h2>
        <p>
          We are licensed and regulated by the relevant financial authorities in the jurisdictions where we
          operate. Below are the details of our licenses:
        </p>
        <ul>
          <li>
            <strong>State License Number:</strong> 12345-XYZ
          </li>
          <li>
            <strong>Regulating Authority:</strong> State Department of Financial Regulation
          </li>
          <li>
            <strong>Address:</strong> 123 Regulatory Lane, Finance City, ST, 12345
          </li>
          <li>
            <strong>Contact:</strong> (123) 456-7890
          </li>
        </ul>
      </section>

      {/* Privacy and Data Security */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">Privacy and Data Security</h2>
        <p>
          We prioritize the privacy and security of your personal information. Our <a href="/privacy-policy">Privacy Policy</a> explains how we
          collect, use, and protect your data. Key points include:
        </p>
        <ul>
          <li>We do not sell your personal information to third parties.</li>
          <li>Your data is encrypted and securely stored.</li>
          <li>We comply with data protection regulations such as GDPR and CCPA.</li>
        </ul>
      </section>

      {/* Loan Terms and Conditions */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">Loan Terms and Conditions</h2>
        <p>
          Please review the full terms and conditions of our lending products before applying. Highlights
          include:
        </p>
        <ul>
          <li>Annual Percentage Rate (APR): Ranges from 5% to 35%, depending on your creditworthiness.</li>
          <li>Loan amounts: From $1,000 to $50,000.</li>
          <li>Repayment terms: Flexible options ranging from 12 to 60 months.</li>
        </ul>
        <p>
          <a href="/loan-terms">View Full Terms and Conditions</a>
        </p>
      </section>

      {/* Consumer Rights */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">Consumer Rights and Complaints</h2>
        <p>
          As a borrower, you have rights protected by federal and state laws. If you believe your rights have
          been violated or you have a complaint, please contact our customer service team immediately. You may
          also escalate your concerns to the regulatory authority mentioned above.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="sub">Contact Us</h2>
        <p>
          If you have any questions or need further information regarding our regulatory disclosures, please
          feel free to contact us:
        </p>
        <ul>
          <li>Email: <a href="mailto:support@yourlendingcompany.com">support@yourlendingcompany.com</a></li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 456 Lending Street, Finance City, ST, 12345</li>
        </ul>
      </section>

      <footer style={{ marginTop: "20px", textAlign: "center", fontSize: "12px", color: "gray" }}>
        &copy; {new Date().getFullYear()} Your Lending Company. All rights reserved.
      </footer>
    </div>
  );
}

export default RegulatoryDisclosures;
