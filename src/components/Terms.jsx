import React from 'react'
import "../styling/terms.css"
const Terms = () => {
  return (
    <>
    
  <h2 className="section-title">Terms of Service</h2>

  <div className="content-text">
    <p>Last updated: Date</p>
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
    <h3 style={{ color: "#f1c40f", margin: "1.5rem 0 1rem 0" }}>User Responsibilities</h3>
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
    <h3 style={{ color: "#f1c40f", margin: "1.5rem 0 1rem 0" }}>Limitation of Liability</h3>
    <p>
      MovieHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
    </p>
  </div>

  <div className="content-text">
    <h3 style={{ color: "#f1c40f", margin: "1.5rem 0 1rem 0" }}>Modifications to Terms</h3>
    <p>
      We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date.
    </p>
  </div>

    </>
  )
}

export default Terms