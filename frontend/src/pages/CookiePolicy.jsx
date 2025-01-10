import React from "react";

function CookiePolicy() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }} className="grd">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }} className="heading">Cookie Policy</h1>

      {/* Introduction Section */}
      <section style={{ marginBottom: "20px" }}>
        <p>
          At <strong>Lendify</strong>, we use cookies to enhance your browsing experience, improve our
          website, and deliver personalized content and advertisements. This Cookie Policy explains what cookies are,
          how we use them, and how you can manage your preferences.
        </p>
      </section>

      {/* What Are Cookies Section */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a
          website. They help the website recognize your device and store information about your preferences or past
          actions.
        </p>
      </section>

      {/* Types of Cookies We Use */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">Types of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our website.
            Without them, certain features may not be available.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our
            website by collecting information about usage patterns and error reporting.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies allow us to remember your preferences and provide
            personalized features, such as saved login details or preferred language.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> These cookies are used to deliver relevant advertisements to you and
            measure the effectiveness of our marketing campaigns.
          </li>
        </ul>
      </section>

      {/* How We Use Cookies */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">How We Use Cookies</h2>
        <p>
          We use cookies to:
        </p>
        <ul>
          <li>Ensure our website functions as intended.</li>
          <li>Analyze website traffic and improve usability.</li>
          <li>Provide personalized content and recommendations.</li>
          <li>Deliver targeted advertisements based on your browsing behavior.</li>
        </ul>
      </section>

      {/* Managing Your Cookie Preferences */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">Managing Your Cookie Preferences</h2>
        <p>
          You can control and manage cookies in several ways:
        </p>
        <ul>
          <li>
            <strong>Browser Settings:</strong> Most browsers allow you to manage cookies through their settings. You can
            choose to block or delete cookies, but this may impact your browsing experience.
          </li>
          <li>
            <strong>Cookie Banner:</strong> When you first visit our website, you can set your cookie preferences using
            the cookie consent banner.
          </li>
        </ul>
        <p>
          For more information on how to manage cookies, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a>.
        </p>
      </section>

      {/* Third-Party Cookies */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub"> Third-Party Cookies</h2>
        <p>
          We may allow third-party service providers to place cookies on your device for analytics, advertising, or
          other purposes. These cookies are subject to the privacy policies of the respective third parties.
        </p>
      </section>

      {/* Updates to the Cookie Policy */}
      <section style={{ marginBottom: "20px" }}>
        <h2 className="sub">Updates to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and
          regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
        </p>
      </section>
    </div>
  );
}

export default CookiePolicy;
