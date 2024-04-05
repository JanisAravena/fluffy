import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Inicio from "../Views/Inicio";


const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
 
]);

export default router;