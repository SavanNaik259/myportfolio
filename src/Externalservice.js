import React from "react";
import eimg1 from './Images/3D Blockchain Password Cryptographic Access.png';
import eimg2 from './Images/Seo.png';
import eimg3 from './Images/Website Ads.png';
const Externalservice = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <section className="service-section">
        <div className="text-center">
          <h1 className="common-text">what we will do for your business</h1>
          <hr className='w-25 mx-auto' />
        </div>
        <div className="container">
          <div className="row  service-row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card style={{ maxWidth: '10rem' }}">
                  <img src={eimg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">website management</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Professional Website Management Services: Ensuring Optimal Performance and Security</p>
                    <div className="text-lg-start">
                      <button onClick={scrollToBottom} className="text-capitalize btn btn-primary scroll-button">get Service</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card style={{ maxWidth: '10rem' }}">
                  <img src={eimg2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">website SEO</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Advanced Website SEO Services: Elevate Your Search Engine Rankings</p>
                    <div className="text-lg-start">
                      <button onClick={scrollToBottom} className="text-capitalize btn btn-primary scroll-button">get Service</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card style={{ maxWidth: '10rem' }}">
                  <img src={eimg3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">website advertisement</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize"> Effective Website Advertisement Services: Boosting Visibility and Driving Traffic</p>
                    <div className="text-lg-start">
                      <button onClick={scrollToBottom} className="text-capitalize btn btn-primary scroll-button">get Service</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Externalservice;
