// PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container grd">
      <h1 className='heading'>Privacy Policy</h1>

      <section>
        <h2 className='sub'>Introduction</h2>
        <p>
          Welcome to Lendify. Your privacy is important to us, and we are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
        </p>
      </section>

      <section>
        <h2 className='sub'>Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Financial information necessary for loan processing</li>
          <li>Technical data such as IP addresses and browser types</li>
        </ul>
      </section>

      <section>
        <h2 className='sub'>How We Use Your Information</h2>
        <p>Your information is used for the following purposes:</p>
        <ul>
          <li>To evaluate and process loan applications</li>
          <li>To communicate with you about your account</li>
          <li>To improve our website and services</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>
      </section>

      <section>
        <h2 className='sub'>Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties, except when necessary to provide our services or comply with legal obligations. Examples include:
        </p>
        <ul>
          <li>Sharing data with financial institutions for loan processing</li>
          <li>Providing information to government agencies as required by law</li>
        </ul>
      </section>

      <section>
        <h2 className='sub'>Data Security</h2>
        <p>
          We take appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction. Our website uses encryption to ensure data safety during transactions.
        </p>
      </section>

      <section>
        <h2 className='sub'>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You may also object to certain uses of your data. To exercise these rights, contact us at [Contact Email].
        </p>
      </section>

      <section>
        <h2 className='sub'>Policy Updates</h2>
        <p>
          We may update this privacy policy to reflect changes in our practices or legal requirements. The latest version will always be available on our website.
        </p>
      </section>

      <section>
        <h2 className='sub'>Contact Us</h2>
        <p>If you have any questions or concerns about this policy, please contact us:</p>
        <address>
          Lendify <br />
          Email: Lendify@gmail.com <br />
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
