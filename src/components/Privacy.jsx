import React from 'react'
import "../styling/terms.css"
const Privacy = () => {
  return (
    <main className="main-container">


 

  {/* Privacy Policy Section */}
  <div id="privacy" className="content-section active">
    <h2 className="section-title">Privacy Policy</h2>

    <div className="content-text">
      <p>Last updated: [Date]</p>
      <p>
        Welcome to MovieHub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
      </p>
    </div>

    <div className="highlight-box">
      <div className="highlight-title">What Information We Collect</div>
      <p>
        We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, and viewing preferences.
      </p>
    </div>

    <div className="content-text">
      <h3 style={{ color: "#f1c40f", margin: "1.5rem 0 1rem 0" }}>
        How We Use Your Information
      </h3>
      <p>
        We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.
      </p>
    </div>

    <div className="highlight-box">
      <div className="highlight-title">Data Security</div>
      <p>
        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
      </p>
    </div>

    <div className="content-text">
      <h3 style={{ color: "#f1c40f", margin: "1.5rem 0 1rem 0" }}>
        Your Rights
      </h3>
      <p>
        You have the right to access, update, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided below.
      </p>
    </div>
  </div>

  {/* Terms of Service Section */}
  <div id="terms" className="content-section">
    <h2 className="section-title">Terms of Service</h2>

    <div className="content-text">
      <p>Last updated: [Date]</p>
      <p>
        These Terms of Service govern your use of MovieHub and the services we provide. By accessing or using our service, you agree to be bound by these terms.
      </p>
    </div>

    <div className="highlight-box">
      <div className="highlight-title">Acceptance of Terms</div>
      <p>
        By accessing and using MovieHub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
      </p>
    </div>

    <div className="content-text">
      <h3 style={{ color: "#f1c40f", margin: "1.5rem 0 1rem 0" }}>
        User Responsibilities
      </h3>
      <p>
        You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
      </p>
    </div>

    <div className="highlight-box">
      <div className="highlight-title">Prohibited Activities</div>
      <p>
        You agree not to engage in any activity that interferes with or disrupts our services, violates any applicable laws, or infringes upon the rights of others. This includes but is not limited to unauthorized access, data mining, or transmission of malicious code.
      </p>
    </div>

    <div className="content-text">
      <h3 style={{ color: "#f1c40f", margin: "1.5rem 0 1rem 0" }}>
        Limitation of Liability
      </h3>
      <p>
        MovieHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      </p>
    </div>

    <div className="content-text">
      <h3 style={{ color: "#f1c40f", margin: "1.5rem 0 1rem 0" }}>
        Modifications to Terms
      </h3>
      <p>
        We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date.
      </p>
    </div>
  </div>

  {/* Contact Section */}
  <div className="contact-section">
    <h3 style={{ marginBottom: "1rem" }}>Questions About Our Policies?</h3>
    <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "1rem" }}>
      If you have any questions about our Privacy Policy or Terms of Service, please don't hesitate to contact us.
    </p>
    <button className="contact-button" onClick=''>
      Contact Support
    </button>
  </div>
</main>

  )
}

export default Privacy