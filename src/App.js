import React from "react";
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
import AboutComponent from "./components/AboutComponent";
import Error from './components/Error';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Test from "./components/Test";

const AppLayout = () => {
    return (
        <>
            {/* <Obj.HeaderComponent /> */}
            <HeaderComponent/>  
            <Outlet/>
            <FooterComponent/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <BodyComponent/>,
                errorElement: <Error/>,
            },
            {
                path: "/about",
                element: <AboutComponent/>,
                errorElement: <Error/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
                errorElement: <Error/>,
            },
            {
                path: "restaurant/:id",
                element: <RestaurantMenu/>,
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);  