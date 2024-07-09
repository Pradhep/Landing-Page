import { useState } from 'react'
import Header from './Components/Header'
import Icontext from './Components/Icontext'
import Imagetext from './Components/Imagetext'
import Peopletext from './Components/Peopletext'
import Prefooter from './Components/Prefooter'
import Footer  from './Components/Footer'
import testimonials1 from './assets/img/testimonials-1.jpg'
import testimonials2 from './assets/img/testimonials-2.jpg'
import testimonials3 from './assets/img/testimonials-3.jpg'
import bgshowcase1 from './assets/img/bg-showcase-1.jpg'
import bgshowcase2 from './assets/img/bg-showcase-2.jpg'
import bgshowcase3 from './assets/img/bg-showcase-3.jpg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Icondata = [
    {
      id: 1,
      head: "Fully Responsive",
      desc: "This theme will look great on any device, no matter the size!",
      Clsstyle: "bi-window m-auto text-primary"
    },
    {
      id: 2,
      head: "Bootstrap 5 Ready",
      desc: "Featuring the latest build of the new Bootstrap 5 framework!",
      Clsstyle: "bi-layers m-auto text-primary"
    },
    {
      id: 3,
      head: "Easy to Use",
      desc: "Ready to use with your own content, or customize the source files!",
      Clsstyle: "bi-terminal m-auto text-primary"
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: "Margaret E.",
      message: "This is fantastic! Thanks so much guys!",
      imgSrc: testimonials1
    },
    {
      id: 2,
      name: "Fred S.",
      message: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
      imgSrc: testimonials2
    },
    {
      id: 3,
      name: "Sarah W.",
      message: "Thanks so much for making these free resources available to us!",
      imgSrc: testimonials3
    }
  ];
  const Imagetextdata =[
    {
      id: 1,
      clsstyle1: "col-lg-6 order-lg-2 text-white showcase-img",
      clsstyle2: "col-lg-6 order-lg-1 my-auto showcase-text",
      imgSrc: bgshowcase1,
      head: "Fully Responsive Design",
      desc: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
      id: 2,
      clsstyle1: "col-lg-6 text-white showcase-img",
      clsstyle2: "col-lg-6 my-auto showcase-text",
      imgSrc: bgshowcase2,
      head: "Updated For Bootstrap 5",
      desc: "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
      id: 3,
      clsstyle1: "col-lg-6 order-lg-2 text-white showcase-img",
      clsstyle2: "col-lg-6 order-lg-1 my-auto showcase-text",
      imgSrc: bgshowcase3,
      head: "Easy to Use & Customize",
      desc: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    }
  ];
  return (
    <>
    <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
      <Header />

      <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
     
          {Icondata.map(Icondata => (
              <Icontext key={Icondata.id}
              Clsstyle={Icondata.Clsstyle}
                head={Icondata.head}
                desc={Icondata.desc}/>
            ))}

                </div>
            </div>
        </section>

      <section className="showcase">
      <div className="container-fluid p-0">
        
        {Imagetextdata.map(Imagetextdata => (
          <Imagetext key={Imagetextdata.id}
            clsstyle1={Imagetextdata.clsstyle1}
            clsstyle2={Imagetextdata.clsstyle2}
            imgSrc={Imagetextdata.imgSrc}
            head={Imagetextdata.head}
            desc={Imagetextdata.desc}/>
        ))}
      </div>
      </section>
      
      <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                {testimonials.map(testimonial => (
            <div className="col-lg-4" key={testimonial.id}>
              <Peopletext testimonial={testimonial} />
            </div>
          ))}
            </div>
            </div>
      </section>
      
      <Prefooter />
      <Footer />
    </>
  )
}

export default App
