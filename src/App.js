import Home from './Pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faWind, faUser, faBell, faTicket, faArrowRightFromBracket, faGear} from "@fortawesome/free-solid-svg-icons";
import Template from './Pages/Template';

library.add(faWind, faUser, faBell, faTicket, faArrowRightFromBracket, faGear);

function App() {
  const propos = {
    'place' : [
      {
        'sensors' :[
          {
            'name' : 'Canapé',
            'percent' : 80,
          },
          {
            'name' : 'Buffet',
            'percent' : 82,
          }
        ],
        'name' : 'Salon'
      },
      {
        'sensors' :[
          {
            'name' : 'Lit',
            'percent' : 10,
          },
          {
            'name' : 'Entrée',
            'percent' : 61,
          }
        ],
        'name' : 'Chambre'
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
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
