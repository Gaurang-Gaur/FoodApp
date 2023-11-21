import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body"







const App=()=>{


    return (
    <div>
        <Header/>
        <Body/>
    </div>
    

    
    )



}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
