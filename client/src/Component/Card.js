import {RES_IMG_KEY} from "../utils/content";


const Card=(props)=>{

   const {id,name,avgRating,veg,isOpen,
    cloudinaryImageId,costForTwo,
    locality,areaName
    }=props.data.info;

// console.log(props.data.info);
// // console.log(id);
// console.log(RES_IMG_KEY+cloudinaryImageId);
// console.log(cloudinaryImageId);





    return (
         <div className="w-[240px] m-4 p-4 shadow-md bg-pink-50 h-[580px] hover:bg-pink-100 ">
            {id}
        <img src={RES_IMG_KEY+cloudinaryImageId} className="h-[270px] w-[220px] rounded-lg"/>
        <div className="m-1 p-2 h-45  ">
            <p className="text-lg">
                <strong>{name}</strong>
    
            </p>
            <p className="">{}</p>
            <p className="py-2">{}</p>
            <p>{
locality
 }{areaName}</p>
            <p className="mutual">
                {avgRating}⭐
                
            </p>
            <button className="bg-green-400 border border-solid border-green-500 flex items-center rounded-md w-32 text-lg px-2 "> {costForTwo}</button>
        </div>
      
    </div>
 
    )
 
}

export default Card;