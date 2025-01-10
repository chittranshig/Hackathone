import React from 'react'

const About = () => {
  return (
    <div>
      <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-section">
        <div className="about-us-content">
          <h2>Who We Are</h2>
          <p>
            We are a dedicated team working to provide innovative financial solutions to our customers. Our platform
            connects lenders and borrowers, making the process of borrowing and lending seamless, secure, and efficient.
          </p>
        </div>
        <div className="about-us-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals and businesses by offering flexible loan options and fostering a community
            of trusted lenders. We aim to break down the barriers to financial access and provide fair opportunities for
            everyone.
          </p>
        </div>
        <div className="about-us-content">
          <h2>Our Vision</h2>
          <p>
            To be the leading platform for peer-to-peer lending, revolutionizing how people access and offer loans. We strive
            to create a world where financial inclusion is the norm and not the exception.
          </p>
        </div>
      </section>
      </div>
    </div>
  )
}

export default About
