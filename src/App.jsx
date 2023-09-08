// import icons from './assets/icons.svg'
import React, { useEffect, useState } from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/errorPage';
import Notifications from './Pages/Notifications';
import { library } from "@fortawesome/fontawesome-svg-core";
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import {faWind, faUser, faBell, faTicket, faArrowRightFromBracket, faGear, faSun, faTemperatureQuarter, faPercent, faVolumeHigh, faCloud, faPenToSquare, faTemperatureHalf, faDroplet, faHouse, faXmark, faCheck, faLayerGroup, faShareNodes, faEye, faTrash, faDropletSlash, faCircleCheck, faHourglass, faShare, faSearch} from "@fortawesome/free-solid-svg-icons";
import Template from './Pages/Template';
import { Line } from 'react-chartjs-2';
import Profil from "./Pages/Profil";
import Invite from "./Pages/Invite";
import Spaces from "./Pages/Spaces";
import SingleSensor from "./Pages/Sensor";
import Register from "./Pages/Register";

library.add(faWind, faUser, faBell, faTicket, faArrowRightFromBracket, faGear, faSun, faTemperatureQuarter, faPercent, faVolumeHigh, faWind, faCloud, faPenToSquare, faTemperatureHalf, faDroplet, faHouse, faXmark, faCheck, faLayerGroup, faShareNodes, faEye, faTrash, faDropletSlash, faCircleCheck, faHourglass, faShare, faSearch);

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const checkIfLoggedIn = () => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      setIsConnected(true);
    }
  };


  const routerLogin = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "*",
      element: <Login/>
    },
  ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <Home/>
        }
      ]
    },
    {
      path: "/space/:id",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <Home/>
        }
      ]
    },
    {
      path: "/sensor/:id",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <SingleSensor/>
        }
      ]
    },
    {
      path: "/notifications",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <Notifications/>
        }
      ]
    },
    {
      path: "/profil",
      element: <Template/>,
      children:[
        {
          index: true,
          element: <Profil/>
        }
      ]
    },
    {
      path: "/spaces",
      element: <Template/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          index: true,
          element: <Spaces/>
        }
      ]
    },
    {
      path: "/invite/accept/:id/:token",
      element: <Invite/>,
    },
    {
      path: "*",
      element: <ErrorPage/>,
    },
  ]);

  //return <React.StrictMode>{!isConnected ? <Register /> : <Home />}</React.StrictMode>;
  if(isConnected == true) {
    return <RouterProvider router={router}/>;
  } else {
    return <RouterProvider router={routerLogin}/>;
  }
}

export default App;
