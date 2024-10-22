import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartPage from './pages/start-page';
import NotFoundPage from './pages/404-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render( // Close the element selection here
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
