import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* if path = / */}
      {/* <Body /> */}
      {/* if path = /about */}
      {/* <About /> */}
      {/* if path = /contact */}
      {/* <Contact /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", 
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLa yout />);
root.render(<RouterProvider router={appRouter} />);
