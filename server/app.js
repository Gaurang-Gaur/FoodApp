const express=require("express");
const cors=require("cors");

const app=express();// instance of server ...
let jsonData;
let gitApiData;

const datato= async()=>{

    const data=await fetch("https://gaurang-gaur.github.io/host_api/apiData.json");
    if(!data){
      console.log("api is not fetch");
    }
   
     jsonData=await data.json();
  



    console.log(jsonData.sections.SECTION_SEARCH_RESULT);
     gitApiData=jsonData.sections.SECTION_SEARCH_RESULT;
}

datato();



app.use(cors());




    

app.get("/restaurant/:id",(req,res)=>{
    
    const id=req.params['id'];
    

    //. here filter data to be send according the id

    // console.log(typeof(data));
   
    // console.log(data[0].info);

    // const arr=[1,45,553,5];
    let result;

   
    // for(let i=0;i<data.length;i++){

    //     if(data[i].info.resId==id){

    //         result=data[i].info;
    //         break;
    //     }
    // }
result=gitApiData.find(item=>item.info.resId==id);
    // const res=data
    // constarr.filter()
    
    // res.setHeader("Content-Type","application/json");
    // res.send(result);
    res.json(result);
    // res.send(data[0]);

    // res.send(dataObj);
    console.log("hello ji"+id);
    
})



app.listen(8000, ()=>{
    console.log("sever is listening on 8000 port");

})