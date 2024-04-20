const express=require("express");
const cors=require("cors");

const {RES_DATA,MENU_ITEM_TYPE_KEY,RESTAURANT_TYPE_KEY}=require('../server/utils/content');

const app=express();// instance of server ...
let jsonData;
let dataArray;




//Using middleware
app.use(cors());




    

app.get("/restaurant/:id",(req,res)=>{
    
   try{
    const id=req.params['id'];
    

    const datato= async()=>{
        // console.log(RES_DATA);

        const data=await fetch(RES_DATA+id);
        if(!data){
          console.log("api is not fetch");
        }
       
         jsonData=await data.json();
      
    
    
         dataArray=jsonData;
        
         
       
    }
    
    datato();

    //. here filter data to be send according the id

   
    let restaurantMenuData=dataArray.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
   
 

      
    
res.json(restaurantMenuData);

   }
   catch(error){
    res.status(500).json(error.message)
   }
    
})



app.listen(8000, ()=>{
    console.log("sever is listening on 8000 port");

})