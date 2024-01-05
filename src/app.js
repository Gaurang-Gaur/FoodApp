import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";







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
        
        ],
       
    },
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);



