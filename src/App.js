import './App.css';
import { GrHomeRounded } from "react-icons/gr";
import { IconContext } from "react-icons";
import { FaHome,FaStar } from "react-icons/fa";
import { BsFillGridFill,BsFillPersonFill } from "react-icons/bs";
import { RiSettingsFill } from "react-icons/ri";
import React from 'react';
function App() {
 React.useEffect(()=>{
  const navigationbar = document.querySelector(".navigationbar")
  const menubttn = document.querySelector(".menubuttonscontainer")
  const menubttn1 = document.querySelectorAll(".menubuttonscontainer1")
  const lines = document.querySelector(".lines")
  const buttonsconatiner = document.querySelector(".buttonsconatiner")

  let menuOpen = false

  if(menubttn){
    menubttn.addEventListener('click',(e) =>{
   
      if(!menuOpen){
        menubttn.classList.add('menubttnanimation')
        if(menubttn1.length>0){
                 menubttn1.forEach((v,i,_)=>
        v.classList.add('menubuttonscontainer1animation')
       )
        }

        buttonsconatiner.classList.add('buttonsconatineranimation')
        navigationbar.classList.add('navigationbaranimation')
        lines.classList.add('open')
        menuOpen=true
      }
      else{
        menubttn.classList.remove('menubttnanimation')
        if(menubttn1.length>0){
          menubttn1.forEach((v,i,_)=>
 v.classList.remove('menubuttonscontainer1animation')
)
 }

        buttonsconatiner.classList.remove('buttonsconatineranimation')
        navigationbar.classList.remove('navigationbaranimation')
        lines.classList.remove('open')
        menuOpen=false  
      }
  
    })
  }

 },[])

  return (
    // <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
    <div className="App">
      <div className="navigationbarcontainer">
        <div className="navigationbar">
        <div className="buttonsconatiner">
        
        <div className="menubuttonscontainer1">
            <FaHome className="icons"/> 
          </div>

          <div className="menubuttonscontainer1">
        <BsFillGridFill className="icons"/> 
          </div>

          <div className="menubuttonscontainer1">
        <FaStar className="icons"/> 
          </div>

          <div className="menubuttonscontainer1">
        <BsFillPersonFill className="icons"/> 
          </div>

          <div className="menubuttonscontainer1">
               <RiSettingsFill className="icons"/> 
          </div>
        </div>
          <div className="menubuttonscontainer">
            <div className="lines"/>
          </div>

        </div>
      </div>

      <div className="besthotels">
        <h1>
          Best hotels all<br></br> over the world
        </h1>
        <h5>
      Wide offer of modern hotels with high quality service. Compare prices from hundreds of travel sites and get great deals. See our best recommendations for your best journey.
        </h5>

        <div className="buttonsContainer">
          <button className="buttonstyle">Start</button>
          <button  className="buttonstyle second">Create an account</button>
        </div>
      </div>

      <div className="images">
        <div className="image image1">

        <div className="backdrop1">
          <h2>Forest</h2>
          </div>
        </div>
        <div className="image image2">
        <div className="backdrop1">
        <h2>Chalets</h2>
     </div>
        </div>
        <div className="image image3">
        <div className="backdrop1">
             <h2>Mountains</h2>
        </div>
        </div>
        <div className="lastimage image4">
        <div className="backdrop">
            <h2>Winter Hotels</h2>
            <h6>Cozy hotels that are perfect for winter</h6>
        </div>
        </div>

      </div>
    </div>
    // </IconContext.Provider>
  );
}

export default App;
