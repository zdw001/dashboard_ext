import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Dashboard from './containers/dashboard';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);