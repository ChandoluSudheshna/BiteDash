import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import HeaderComponent from "./components/HeaderComponent.js"; - can give .js or .jsx according to file extension as well
// import NewHeaderComponent, { Title } from "./components/HeaderComponent"; - can give any name during defualt import
// import HeaderComponent, { Title } from "./components/HeaderComponent"; - can use together also
// import * as Obj from "./components/HeaderComponent";
// import { HeaderComponent, Title } from "./components/HeaderComponent"; - to import multiple named components
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import AboutComponent from "./components/AboutComponent";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import SignIn from "./components/SignIn";
import Shimmer from "./components/Shimmer";
import GroceryCard from "./components/Grocery/GroceryCard";
import GroceryMenu from "./components/Grocery/GroceryMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import HooksDemo from "./components/HooksDemo";
import DemoUseRef from "./components/DemoUseRef";

const Grocery = lazy(() => import("./components/Grocery/Grocery"));

const AboutComponent = lazy(() => import("./components/AboutComponent"));

const AppLayout = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const testdata = "real data"

  useEffect(() => {
    const data = {
      name: "Sudheshna"
    };
    setUserInfo(data.name);
  },[])

  return (
    <>
      <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userInfo , setUserInfo, test: testdata}}>
      {/* <UserContext.Provider value={{loggedInUser: "Chandolu"}}> */}
      {/* <Obj.HeaderComponent /> */}
      <HeaderComponent onSignInClick={() => setShowDrawer(true)} user={user} />
        {/* </UserContext.Provider>  */}
      <SignIn
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        onLoginSuccess={(userData) => {
          setUser(userData);
          setShowDrawer(false);
        }}
      />
      <Outlet />
      <FooterComponent />
      </UserContext.Provider>  
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}> 
            <AboutComponent />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          // <Suspense fallback={<h1>Loading...</h1>}>
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/groceryMenu",
        element: <GroceryMenu />,
        errorElement: <Error />,
      },
      {
        path: "restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path:"/demoHooks",
        element: <><HooksDemo/> <DemoUseRef/> </>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
