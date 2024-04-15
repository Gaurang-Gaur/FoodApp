import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Cart from "./Component/Cart";
import Error from "./Component/Error";
import RestaurantMenu from"./Component/RestaurantMenu";
// import Grocery from "./Component/Grocery";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";




const Grocery =lazy(()=>import("./Component/Grocery"));


const App=()=>{


    

    return (
    <div>
        <Header/>
        <Outlet/>
        {/* <Body/> */}
    </div>
    

    
    )



}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
       
        children:[
            {
                path:"/",
                element:<Body/>,
            
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
        
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
            ,{
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading</h1>}>
                    <Grocery/>
                </Suspense>
            }
        ],
       
    },
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);



