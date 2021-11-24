import './App.css';

function App() {
  const navigationbar = document.querySelector(".navigationbar")
  const menubttn = document.querySelector(".menubuttonscontainer")
  const lines = document.querySelector(".lines")
  const buttonsconatiner = document.querySelector(".buttonsconatiner")
  let menuOpen = false
  menubttn.addEventListener('click',(e) =>{
   
    if(!menuOpen){
      menubttn.classList.add('menubttnanimation')
      buttonsconatiner.classList.add('buttonsconatineranimation')
      navigationbar.classList.add('navigationbaranimation')
      lines.classList.add('open')
      menuOpen=true
    }
    else{
      menubttn.classList.remove('menubttnanimation')
      buttonsconatiner.classList.remove('buttonsconatineranimation')
      navigationbar.classList.remove('navigationbaranimation')
      lines.classList.remove('open')
      menuOpen=false  
    }

  })
  return (
    <div className="App">
      <div className="navigationbarcontainer">
        <div className="navigationbar">
        <div className="buttonsconatiner">

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

      </div>
    </div>
  );
}

export default App;
