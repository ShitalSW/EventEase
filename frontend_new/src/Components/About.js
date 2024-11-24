import React from 'react';
import '../Styles/About.css'
import bg from '../Images/image1.jpg';
import img from '../Images/img.jpg';
import Header from './Header';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div>
      <Header/>
    
    <div className="d-flex flex-column h-100">
      {/* About EventEase Model Start */}
      <div className="modal fade" id="communitieModal" tabIndex="-1" aria-labelledby="communitieModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="communitieModalLabel">We are all about enriching communities​</h5>
              <button type="button" className="close-model-btn" data-bs-dismiss="modal" aria-label="Close">
                <i className="uil uil-multiply"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="model-content main-form mt-4">
                <p className="mb-4">
                  Cras egestas, enim quis lobortis interdum, leo risus bibendum metus, non eleifend nulla odio vel nisi. 
                  Quisque gravida lacinia risus, eget vulputate odio lacinia nec. Sed at ipsum nec urna aliquam gravida. 
                  Morbi quis lacinia justo. Cras accumsan felis quis hendrerit finibus. Mauris pellentesque maximus felis, 
                  vitae mattis ante interdum vel. Maecenas sit amet lacus leo. Aliquam vitae magna quis elit tempus gravida. 
                  Nam ornare ex a magna vehicula, sed mollis nibh elementum. Ut vestibulum in quam et aliquet. Nam faucibus 
                  commodo nibh auctor dictum.
                </p>
                <p className="mb-0">
                  Integer quis sem rutrum est congue scelerisque. Praesent porttitor sed leo vel accumsan. Quisque id sem 
                  sit amet quam posuere feugiat nec eget ligula. Mauris eget tempor augue. Donec faucibus nunc sit amet lorem 
                  tempus tincidunt. Nullam tristique, nibh vitae posuere viverra, ex nisl porta massa, non eleifend tellus leo 
                  sed orci. Nullam posuere, magna eu pulvinar gravida, tortor dui fringilla nisl, id sagittis risus magna et justo. 
                  Fusce non malesuada lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About EventEase Model End */}

      {/* Body Start */}
      <div className="wrapper">
        <div className="hero-banner">
          <div className="container">
            {/* <img className='background-image' src={bg}/> */}
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-9 col-md-10">
                <div className="hero-banner-content text-center">
                  <h2 className="mb-0">We are a team who loves supporting the community through events</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <center>
        <img className="img" src={img}/>
        </center>    */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-8">
                <div className="main-title checkout-title">
                  <h3>
                    Our aim is to provide a powerful and affordable event ticketing solution that can handle events of any 
                    size and complexity without an issue.
                  </h3>
                </div>
                <div className="about--description">
                  <p>
                    EventEase’s online event ticketing software was built on the idea that anyone, anywhere in the world wanting 
                    to organise an event should have the tools to simply do so.
                  </p>
                  <p>
                    The focus of our efforts is the event organiser, who works hard to ensure that their attendees have a great 
                    experience. We share that passion for bringing people together, creating memories and enriching lives.
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div className="feature-block p-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="main-title mb-4">
                  <h3>The Complete Event Ticketing Platform with a Host of Features</h3>
                  </div>
                  <p>
                    EventEase's allows you to create and sell tickets for your event and manage all of the data associated with your 
                    events, such as ticket sales, visitor insights, reporting, and much more. It's the perfect platform to help you 
                    manage your events efficiently.
                  </p>
                
              </div>
              </div> 
            </div>
        <div className="cta-section bg-dark text-white text-center p-80">
          <div className="container">
            <h3>Ready to Start Your Event Journey?</h3>
            <p>Experience the best event management with our feature-rich platform.</p>
            <a href="/" className="btn btn-primary">Get Started</a>
          </div>
        </div>
    </div>
</div>
</div>
 <Footer/>
 </div>  
  );
}

export default AboutPage;
