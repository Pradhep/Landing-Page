import React from 'react'


function Imagetext({ clsstyle1, clsstyle2, imgSrc, head, desc }) {
    return (
        <div className="row g-0">
          <div className={clsstyle1} style={{ backgroundImage: `url(${imgSrc})` }}></div>
          <div className={clsstyle2}>
            <h2>{head}</h2>
            <p className="lead mb-0">{desc}</p>
          </div>
        </div>
      );
                {/* <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: "url(../../src/assets/img/bg-showcase-2.jpg)"}} ></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 5</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url(../../src/assets/img/bg-showcase-3.jpg)"}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy to Use & Customize</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>   */}
  
}

export default Imagetext
