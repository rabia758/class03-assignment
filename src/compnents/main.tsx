import Image from "next/image";
import profile from"../../image/profile.jpg";


export default function Main() {
  return (
    <>
    <div className="container ">
      <div className="child-container">
       Hy,
      <br />
      I am <span>Rabia</span>
      <br />
      <h2>I am <span>"Frontened Developer"</span></h2>
      <br />
      
      <p >I am doing internship in codealpha,I have completed html,css and javascript,typescript,Now I am learning artificial intelligence,metaverse and web3.0 in <span>Governourhouse,Karachi.</span></p>
      </div>

      <div className="img">
      <Image src={profile} alt="profile pic" objectFit="cover"></Image>
      </div>
      </div>
  
  
  
    </>
    
  )
}