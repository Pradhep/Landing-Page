import React from 'react'

function Icontext({Clsstyle,head, desc}) {
  return (
  
                      <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className={Clsstyle}></i>
                            </div>
                            <h3>{head}</h3>
                            <p className="lead mb-0">{desc}</p>
                        </div>
                    </div>
  );
}

export default Icontext
