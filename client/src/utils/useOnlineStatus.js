import {useState,useEffect} from "react";
const useOnlineStat=()=>{


 const [onlineStatus,setonlineStatus]=useState(true);




 useEffect(()=>{
    
 window.addEventListener("offline",()=>{

    setonlineStatus(false);

 })
    window.addEventListener("online",()=>{
        console.log("online status");
        setonlineStatus(true);
    
     })

 },[])


// console.log(onlineStatus)

    return onlineStatus;
}

export default useOnlineStat;