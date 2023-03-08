import { useState } from "react";
import FeaturesForm from "../logic/FeaturesForm";
import Feature from "./Feature/Feature";

const INITIAL_VALUES = [
    {
        name: 'Toggle lights',
        action: 'Turn the lights',
        state: false,
        id: 0
    },
    {
        name: 'Toggle AC',
        action: 'Turn the AC',
        state: false,
        id: 1
    },
    {
        name: 'Clean',
        action: 'Turn the vacuuming',
        state: false,
        id: 2
    },
    {
        name: 'Coffee time',
        action: 'Make a coffee',
        state: false,
        id: 3
    },
];

const Features = (props) => {
      const [action, setAction] = useState(INITIAL_VALUES);

    const toggleLights = (name) => {
        props.toggleTheLights(name);
      setAction((prevState) => {
        const newState = prevState.map((feature) => {
            if (feature.name === "Toggle Lights") {
                feature.state = !feature.state;
                feature.action = `Turn the Lights ${feature.state ? 'on' : 'off'}`;
            }
            return feature;
        });
        return newState;
      });
    };

    const toggleAC = (name) => {
        setActions((prevState) => {
          const newState = prevState.map((feature) => {
              if (feature.name === "Toggle AC") {
                  feature.state = !feature.state;
                  feature.action = `Turn the AC ${feature.state ? 'on' : 'off'}`;
              }
              return feature;
          });
          return newState;
        });
      };

   const toggleTheAction = (name, actionState) => {
    switch(name) {
        case 'Toggle Lights':
        toggleLights();
        breeak;
        case "Toggle AC":
            toggleAc();
            break;
    }
   };

   const updateFeatures = (feature) => {
    setActions( prevState => {
        return [feature, ...prevState]; // add item at the begining of the list
        // return [...prevState, feature]; // add item at the end of the list
    })
    
   }

   

   const noContentFound = <p>No content found</p>;
   let featuresContent = action.map((action) => (
    <Feature
                   key={action.id}
                   name={action.name}
                   action={action.action}
                   toggleAction={toggleTheAction}
                   ></Feature>
   )};

            

   

            {/* {featuresContent} */}


                {/* {actions.map( (action) => {
                   return<Feature>
                   key={action.id}
                   name={action.name}
                   action={action.action}
                   toggleAction={toggleTheAction}
                   </Feature> 
                });
                } */}
                
                {/* <Feature name={action[0].name}
                 action={`Turn ${action[0].state ? 'off' : 'on'} Lights`}
                  toggleAction={toggleTheAction}>
                  </Feature>
                  <Feature name={action[1].name}
                 action={`Turn ${action[1].state ? 'off' : 'on'} Lights`}
                  toggleAction={toggleTheAction}>
                  </Feature>
                  <Feature>
                  Feature name={action[2].name}
                 action={`Turn ${action[2].state ? 'off' : 'on'} Lights`}
                  toggleAction={toggleTheAction}
                  </Feature>
                  <Feature>
                  Feature name={action[3].name}
                 action={`Turn ${action[3].state ? 'off' : 'on'} Lights`}
                  toggleAction={toggleTheAction}
                  </Feature> */}

            </div>

            <FeaturesForm updateTheFeatures={updateFeatures}></FeaturesForm>
        </div>
    );

}

export default Features;