import React from "react";
import aimg1 from './Images/IMG_20240629_184836.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const About =()=>{
    return (
      <>
       <section className="about-section row-width">
      <h1 className="common-text">about us</h1>
      <hr className='w-25 mx-auto'/>
      <div className="card mb-3 r-card" style={{ maxWidth: '94vw',border:'none' }}>
  <div className="row ">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
     <LazyLoadImage effect="blur" src={aimg1} className=" a-img img-fluid text-center lazy-load-image" alt="..."/>
    </div>
    <div className="col-md-8 d-flex justify-content-center align-items-center">
      <div className="card-body">
        <p className="card-text lh-base">•Passionate Storytellers: We specialize in capturing unique stories and emotions through photography.
•Creative Excellence: Combining artistic vision with technical expertise for exceptional results.
•Tailored Approach: Customized sessions to reflect your individual style and preferences.
•Memorable Moments: Creating timeless images that evoke emotions and preserve memories.
•Client Satisfaction: Our priority is ensuring your photography experience is seamless and satisfying.</p>

      </div>
    </div>
  </div>
</div>
</section>
   </>
    );
  }
  export default About;
