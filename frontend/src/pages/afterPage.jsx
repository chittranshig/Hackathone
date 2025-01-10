import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Example user data (replace this with real data from your API or state management)
  const userName = "John Doe"; // Replace with actual user name from context/store
  const recentActivities = [
    "Applied for a loan of $10,000",
    "Updated profile information",
    "Browsed loan offers",
  ]; // Replace with actual data

  // Handle navigation function
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="sub">Welcome, {userName}!</h1>
        <p>Your lending platform dashboard</p>
      </header>

      <section className="dashboard-content">
        <div className="card">
          <h2>Quick Links</h2>
          <button
            className="btn btn-primary"
            onClick={() => handleNavigation("/loan-form")}
          >
            Apply for a Loan
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleNavigation("/loan-offers")}
          >
            View Loan Offers
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleNavigation("/repayment-options")}
          >
            Repayment Options
          </button>
        </div>

        <div className="card">
          <h2>Recent Activities</h2>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>Account Details</h2>
          <p>Name: {userName}</p>
          <p>Email: johndoe@example.com</p>
          <button
            className="btn btn-secondary"
            onClick={() => handleNavigation("/profile")}
          >
            Update Profile
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;