import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App'
import Createobs from './components/Createobs';
import {
    createBrowserRouter,
    RouterProvider,
  } 



  from "react-router-dom";
import Universalconstruction from './components/Universalconstruction';
import Schedule from './components/Schedule';
import Createyourprojectschedule from './components/Createyourprojectschedule';
import Gantt_chart_universal from './components/Gantt_chart_universal';
import Wbs from './components/Wbs';
import Ganttchatv2 from './components/Ganttchatv2';
import Ganttchatvtwo from './components/Ganttchatvtwo';
import Calender from './components/Calender';
ReactDOM.render(<App />, document.getElementById('root'))




const router = createBrowserRouter([

    {
        path: "/",
        element: <Createobs />
      },


    {
      path: "createobs",
      element: <Createobs />
    },
  

    {
      path: "universalconstruction",
      element: <Universalconstruction />
    },

    

    
    {
      path: "schedule",
      element: <Schedule />
    },
    

       
    {
      path: "createyourprojectschedule",
      element: <Createyourprojectschedule />
    },
    

    {
      path: "gantt_chart_universal",
      element: <Gantt_chart_universal />
    },


    {
      path: "wbs",
      element: <Wbs />
    },

    {
      path: "Ganttchatv",
      element: <Ganttchatv2 />
    },

    {
      path: "Ganttchatv2",
      element: <Ganttchatvtwo />
    },
    {
      path: "calender",
      element: <Calender />
    },

    
  ]);


  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


reportWebVitals();
