import React, { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand Loading
// dynamic import

const Grocery = lazy(() => import("/src/components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  // authentication
  useEffect(() => {
    // make an API call and send username and password
    const data = {
      name: "Naman jain",
    };
    setUserName(data.name);
  }, []);

  return (
    //Default
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* // Naman Jain */}
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "hello world" }}> */}
        {/* // hello world */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
        {/* if path = / */}
        {/* <Body /> */}
        {/* if path = /about */}
        {/* <About /> */}
        {/* if path = /contact */}
        {/* <Contact /> */}
      </div>
    </UserContext.Provider>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
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
