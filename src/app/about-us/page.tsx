import Header from "@/compnents/header"

export default function About(){
    return(
        <div>
          <Header/>
          <h1 className="bg-grey text-center text-5xl mt-10 underline">About Us</h1>

        <p className="bg-white text-center text-2xl mt-20">"Hello! This is <span> Rabia Rizwan!" </span> I have completed courses in HTML, CSS, and JavaScript, gaining a solid foundation in web development. With HTML, I can structure content effectively, and with CSS, I create visually appealing designs that enhance user experience. Learning JavaScript has opened up new possibilities for adding interactivity to my projects. I’m excited to apply these skills in future projects, potentially exploring frameworks like React or Vue.js to build dynamic applications. </p>

        </div>
    )
  }