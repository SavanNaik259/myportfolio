import React from "react";
import simg1 from './Images/Website.png';
import simg2 from './Images/3D Website Design Model Browser Layout With Pencil.png';
import simg3 from './Images/IMG_20240629_184452.jpg';
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
                    <h5 className="card-title mt-3 text-capitalize">portrait photography</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Portraits of Life: The Art of Capturing Human Essence</p>
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
                    <h5 className="card-title mt-3 text-capitalize">Event photography</h5>
                    <p className="card-text mt-2 mb-3">Moments in Time: The Art of Event Photography</p>
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
                    <h5 className="card-title mt-3 text-capitalize">Video graphy </h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Stories in Motion: The Art of Videography</p>
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
