import React from "react";
import simg1 from './Images/Website.png';
import simg2 from './Images/3D Website Design Model Browser Layout With Pencil.png';
import simg3 from './Images/Affiliate Marketing.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Service = ({ images }) => {
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
          <h1 className="common-text">Our Service</h1>
          <hr className='w-25 mx-auto' />
        </div>
        <div className="container">
          <div className="row  service-row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card style={{ maxWidth: '10rem' }}">
                
                 <LazyLoadImage effect="blur" src={simg1} className="card-img-top lazy-load-image" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">website development</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Professional Website Development Services for Your Business</p>
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
                 <LazyLoadImage effect="blur" src={simg2} className="card-img-top lazy-load-image" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">website designing</h5>
                    <p className="card-text mt-2 mb-3">Expert Website Design Solutions to Elevate Your Online Presence</p>
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
                 <LazyLoadImage effect="blur" src={simg3} className="card-img-top lazy-load-image" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">Affiliate marketing</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Maximize Your Revenue with Proven Affiliate Marketing Techniques</p>
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
export default Service;
