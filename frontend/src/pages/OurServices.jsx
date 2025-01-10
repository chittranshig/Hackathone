import React from 'react'; // You can create a separate CSS file to style the page

const servicesData = [
  {
    title: 'Personal Loans',
    description: 'Get quick and easy personal loans with flexible repayment options to help you manage your personal expenses.',
    icon: '💵', // You can use icons or images here
  },
  {
    title: 'Home Loans',
    description: 'Affordable home loans with low-interest rates, so you can make your dream home a reality.',
    icon: '🏡',
  },
  {
    title: 'Car Loans',
    description: 'Whether you need a new or used car, we offer financing options to help you get on the road.',
    icon: '🚗',
  },
  {
    title: 'Education Loans',
    description: 'Invest in your future with our education loans, designed to help students pursue their dreams without financial worries.',
    icon: '🎓',
  },
  {
    title: 'Business Loans',
    description: 'Grow your business with our affordable business loans that offer competitive rates and flexible repayment terms.',
    icon: '💼',
  },
];

const OurServices = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
