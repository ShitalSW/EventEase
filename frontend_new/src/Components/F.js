import React, { useState } from 'react';
import Header from './Header';  // Import the Header component
import Footer from './Footer';  // Import the Footer component
import '../Styles/F.css'; // Import the CSS file for this component
import FAQ from '../Images/FAQ.jpg';

const FAQPage = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const faqs = [
    {
      id: 'organisers-1',
      title: 'What types of events can I set up through EventEase?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis auctor ex. Curabitur id odio in lectus molestie porttitor ac vel turpis...'
    },
    {
      id: 'organisers-2',
      title: 'How soon after my event should I expect to get paid?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis auctor ex. Curabitur id odio in lectus molestie porttitor ac vel turpis...'
    },
    {
      id: 'attendees-1',
      title: 'Will my details be shared with any third parties?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis auctor ex. Curabitur id odio in lectus molestie porttitor ac vel turpis...'
    },
    {
      id: 'attendees-2',
      title: 'How do I buy tickets for an event?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis auctor ex. Curabitur id odio in lectus molestie porttitor ac vel turpis...'
    }
  ];

  return (
    <>
      <Header /> {/* Include the Header component */}
      
      <div className="row" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="col-lg-12 col-md-12">
          <div className="main-title checkout-title text-center" style={{ padding: '10px 0', marginTop: '15px' }}>
            <br/>
            <br/>
            <p className="mb-0">
              Find answers to the common questions asked about EventEase.
            </p>
            <div>
                <img className="img" src={FAQ} alt="FAQ"  style={{ maxHeight: '100px', maxWidth: '80%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '-10px' }}>
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="main-card" style={{ padding: '10px', fontSize: '14px' }}>
                <div className="bp-title">
                  <h4 style={{ fontSize: '16px' }}>Table of Contents</h4>
                </div>
                <div className="bp-content">
                  <ul className="faq-widget-links" style={{ paddingLeft: '10px' }}>
                    <li><a href="#FAQforOrganisers">FAQ for Organisers</a></li>
                    <li><a href="#FAQforAttendees">FAQ for Attendees</a></li>
                  </ul>
                  <div className="cant-ans-box mt-4">
                    <h4 style={{ fontSize: '14px' }}><i className="fa-solid fa-circle-question me-2"></i> Can't find an answer?</h4>
                    <a href="#">Visit Help Center</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div id="FAQforOrganisers">
                <h4 style={{ fontSize: '18px' }}>FAQ for Organisers</h4>
                {faqs.filter(faq => faq.id.startsWith('organisers')).map(faq => (
                  <div className="accordion-item" key={faq.id} style={{ marginBottom: '10px' }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        style={{ fontSize: '16px', padding: '10px' }}
                      >
                        {faq.title}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse ${activeItem === faq.id ? 'show' : ''}`}
                    >
                      <div className="accordion-body" style={{ fontSize: '14px' }}>
                        {faq.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div id="FAQforAttendees" className="mt-5">
                <h4 style={{ fontSize: '18px' }}>FAQ for Attendees</h4>
                {faqs.filter(faq => faq.id.startsWith('attendees')).map(faq => (
                  <div className="accordion-item" key={faq.id} style={{ marginBottom: '10px' }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        style={{ fontSize: '16px', padding: '10px' }}
                      >
                        {faq.title}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse ${activeItem === faq.id ? 'show' : ''}`}
                    >
                      <div className="accordion-body" style={{ fontSize: '14px' }}>
                        {faq.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer /> {/* Include the Footer component */}
    </>
  );
};

export default FAQPage;
