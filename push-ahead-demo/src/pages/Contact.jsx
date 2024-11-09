import React from 'react';
import PageLayout from '../components/PageLayout';
import './About.css'; // Reusing the same CSS file since it has the grid styles

const Contact = () => {
  const contacts = [
    {
      name: "Program Director",
      role: "Sarah Johnson",
      email: "sarah.johnson@pushahead.org",
      phone: "(555) 123-4567",
    },
    {
      name: "Volunteer Coordinator",
      role: "Michael Chen",
      email: "m.chen@pushahead.org",
      phone: "(555) 234-5678",
    },
    {
      name: "Education Specialist",
      role: "Dr. Emily Rodriguez",
      email: "e.rodriguez@pushahead.org",
      phone: "(555) 345-6789",
    },
    {
      name: "Community Outreach",
      role: "James Wilson",
      email: "j.wilson@pushahead.org",
      phone: "(555) 456-7890",
    },
  ];

  return (
    <PageLayout>
      <div className="content">
        <h1 className="title">Contact Us</h1>
        
        <div className="subsection stories2">
          <div className="stories-grid">
            {contacts.map((contact, index) => (
              <div key={index} className="story contact-card">
                <h3>{contact.name}</h3>
                <div className="contact-info">
                  <p><strong>{contact.role}</strong></p>
                  <p>📧 {contact.email}</p>
                  <p>📞 {contact.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
