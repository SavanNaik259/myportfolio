import React from "react";
import simg1 from './Images/Website.png';
import simg2 from './Images/3D Website Design Model Browser Layout With Pencil.png';
import simg3 from './Images/Social Media Marketing.png';
const Service = () => {
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
                  <img src={simg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">web development</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Mastering Modern Website Development: Trends, Tools, and Techniques</p>
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
                  <img src={simg2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">web design</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Exceptional Web Design Services: Crafting Visually Stunning and User-Friendly Sites</p>
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
                  <img src={simg3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title mt-3 text-capitalize">digital Marketing</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize">Transform Your Business with Expert Digital Marketing Services</p>
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
