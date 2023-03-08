import logo from './logo.svg';
import './App.scss';
import Light from './Light.js';
import Features from './Features';
import {useState} from 'react';
import Room from "./Room";


function App() {
  // const [lightState, setLightState] = useState(false);
  // const [acState, setAcState] = useState(false)
  // const [dirtProgres, setDirtProgres] = useState(0.5);

  const [actions, setActions] = useState({
    lightState:false,
    acState: false,
    dirtProgress: 0.5
  })
  
  const toggleLights = () => {
    console.log(typeof lightState);
  }

  setActions((prevState) => {
    const newState = {
      ...prevState,
      lightState: !prevState.lightState
  };
  return newState;
  });
};

const toggleAc = () => {
  setActions((prevState) => {
    const newState = {
      ...prevState,
      acState: !prevState.acState,
    };
    return newState;
  });
}

const toggleAction = (name) => {
  switch(name) {
    case "Toggle Lights":
      toggleLights();
      break;
      case "ToggleAC":
        toggleAc();
        break;
  }
};

  setLightState( (prevState) => {
    return !prevState;
  });

return (
  <div className="App">
    <div className="uiFeatures">
      <Light lightsOn={actions.lightState}></Light>
      <Room status={actions.dirtProgress}></Room>
      <Ac acIsOn={actions.acState}></Ac>
    </div>

    
  </div>
)




 
  

export default App;
