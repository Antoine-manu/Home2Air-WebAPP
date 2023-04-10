import Home from './Pages/Home';
import Profil from './Pages/Profil';
import SingleSensor from './Pages/SingleSensor';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faWind, faUser, faBell, faTicket, faArrowRightFromBracket, faGear, faSun, faTemperatureQuarter, faPercent, faVolumeHigh} from "@fortawesome/free-solid-svg-icons";
import Template from './Pages/Template';

library.add(faWind, faUser, faBell, faTicket, faArrowRightFromBracket, faGear, faSun, faTemperatureQuarter, faPercent, faVolumeHigh, faWind);

function App() {
  const propos = {
    'place' : [
      {
        'sensors' :[
          {
            'name' : 'Canapé',
            'percent' : 80,
            'id' : 1
          },
          {
            'name' : 'Buffet',
            'percent' : 82,
            'id' : 2
          }
        ],
        'name' : 'Salon',
        'id' : 1
      },
      {
        'sensors' :[
          {
            'name' : 'Lit',
            'percent' : 10,
            'id' : 3
          },
          {
            'name' : 'Entrée',
            'percent' : 61,
            'id' : 4
          }
        ],
        'name' : 'Chambre',
        'id' : 2
      }
    ],
    'name' : 'Home'
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template/>,
      children:[
        {
          index : true,
          element : <Home data={propos}/>
        }
      ]
    },
    {
      path: "/profil",
      element: <Template/>,
      children:[
        {
          index : true,
          element : <Profil/>
        }
      ]
    },
    {
      path: "/sensor/:id",
      element: <Template/>,
      children:[
        {
          index : true,
          element : <SingleSensor/>
        }
      ]
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
