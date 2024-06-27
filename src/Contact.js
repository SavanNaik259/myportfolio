import React from "react";
const Contact =()=>{
    return (
      <>
  <section className="bg-main bg-color contact-section hero-section text-white  d-flex flex-column justify-content-center align-items-center "> 
  <div className="contact-form mx-auto">
         <h1 className="common-text text-white">contact us</h1>
  <div className='container'>
         <hr className='w-25 mx-auto text-white'/>
             <form action="https://formspree.io/f/myzggwqv" method="post">

         <div className="mb-3">
         <div className="row">
          <div className="col-lg-6 col-12">
          <label htmlFor="firstName" className="form-label">First Name</label>
  <input className="form-control"                id="exampleFormUserFirstName"
          type="text" 
          name="First Name"
          placeholder="First Name"
          autoComplete="off"
          required
      />
          </div>

         <div className="col-lg-6 col-12">
          <label htmlFor="lastName" className="form-label"> Last Name</label>
  <input className="form-control" id="exampleFormUserLastName"
          type="text" 
          name="Last Name"
          placeholder="Last Name"
          autoComplete="off"
          required
      />
          </div>
         </div>
         </div>
         <div className="mb-3">
  <label htmlFor="email"className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
           name="Eamil"
           autoComplete="off"
           required
      />
 </div>
<div className="mb-3">
  <label htmlFor="Textarea" className="form-label">Example textarea</label>
  <textarea className="form-control"          id="exampleFormControlTextarea1"        rows="3"
          name="Message"
           autoComplete="off"
           required
      ></textarea>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>  
 <div className="custom-shape-divider-top-1717932437">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div> 
</div>
  </section>

        </>
    );
  }
  export default Contact;
