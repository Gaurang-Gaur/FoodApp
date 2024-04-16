import {RES_IMG_KEY} from "../utils/content";


const Card=(props)=>{

   const {id,name,avgRating,veg,isOpen,
    cloudinaryImageId,costForTwo,
    locality,areaName
    }=props.data.info;

// console.log(props.data.info);

// console.log(RES_IMG_KEY+cloudinaryImageId);
// console.log(cloudinaryImageId);





    return (
         <div className="w-[240px] m-4 p-4 shadow-md bg-pink-50 h-[490px] hover:bg-pink-100 ">
            
        <img src={RES_IMG_KEY+cloudinaryImageId} className="h-[270px] w-[220px] rounded-lg"/>
        <div className="m-1 p-2 h-34  ">
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
            <button className="bg-green-400 border border-solid border-green-500  rounded-md w-32 text-lg px-2 "> {costForTwo}</button>
        </div>
      
    </div>
 
    )
 
}


// higher order component 
//input restaurant card==>restaurant card promoted

// What is higher order component?

// A component which take function as input  or return ()=>{};
export const promotedCard=(Card)=>{

    return (props)=>{

        return(

            <div >
                {/* // relative according to parent div
                 */}
                 {/* absolute according to the body tag */}
            <label className="ml-3 text-3xl absolute bg-orange-100 shadow-md rounded-md">😋</label>
            <Card data={props.data}/>
        </div>
        )
    
    }
}

export default Card;