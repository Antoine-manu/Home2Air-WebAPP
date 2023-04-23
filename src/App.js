import Home from './Pages/Home';
import Profil from './Pages/Profil';
import AdminUsers from './Pages/Admin/Users';
import AdimnSensors from './Pages/Admin/Sensors';
import SingleSensor from './Pages/SingleSensor';
import AdimnTickets from './Pages/Admin/Ticket';
import Notifications from './Pages/Notifications';
import Tickets from './Pages/Tickets';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faWind, faUser, faBell, faTicket, faArrowRightFromBracket, faGear, faSun, faTemperatureQuarter, faPercent, faVolumeHigh, faCloud, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import Template from './Pages/Template';

library.add(faWind, faUser, faBell, faTicket, faArrowRightFromBracket, faGear, faSun, faTemperatureQuarter, faPercent, faVolumeHigh, faWind, faCloud, faPenToSquare);

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
    },
    {
      path: "/notifications",
      element: <Template/>,
      children:[
        {
          index : true,
          element : <Notifications/>
        }
      ]
    },
    {
      path: "/tickets",
      element: <Template/>,
      children:[
        {
          index : true,
          element : <Tickets/>
        }
      ]
    },
    {
      path: "/admin/users",
      element: <Template/>,
      children:[
        {
          index : true,
          element : <AdminUsers/>
        }
      ]
    },
    {
      path: "/admin/sensors",
      element: <Template/>,
      children:[
        {
          index : true,
          element : <AdimnSensors/>
        }
      ]
    },
    {
      path: "/admin/tickets",
      element: <Template/>,
      children:[
        {
          index : true,
          element : <AdimnTickets/>
        }
      ]
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
