import React from 'react'

function Peopletext({ testimonial }) {
  const { name, message, imgSrc } = testimonial;
  return (
    <> 
      <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img className="img-fluid rounded-circle mb-3" src={imgSrc} alt={`${name}'s testimonial`} />
        <h5>{name}</h5>
        <p className="font-weight-light mb-0">"{message}"</p>
      </div>
    </>
  );
}

export default Peopletext
