import Image from "next/image"
import about from "../../../image/about.png"
export default function About(){
    return(

          <>
  <section className="about">
    <div className=" about-container ">
      <Image
        className=" about-img "
        alt="about"
        src={about}
      />
      <div className="content">
        <h1 className="about-h1">
          About Us
        </h1>
        <p className="about-p">
        I have completed courses in HTML, CSS, and JavaScript, gaining a solid foundation in web development.
         With HTML, I can structure content effectively, and with CSS, 
         I create visually appealing designs that enhance user experience.
          Learning JavaScript has opened up new possibilities for adding interactivity to my projects.
           I’m excited to apply these skills in future projects, 
        potentially exploring frameworks like React or Vue.js to build dynamic applications.
        </p>

      </div>
    </div>
  </section>
</>

          
    )
  }