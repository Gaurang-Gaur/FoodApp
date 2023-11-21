


const Card=(props)=>{

   const {info,order,distance}=props?.data;
//    const key=props.key;
//    console.log(key);
   const{image,name,locality,resId}=info;





    return (
         <div className="card">
        <img src={image.url} className="image"/>
        <div className="text">
            <p>
                <strong>{name}</strong>
    
            </p>
            <p>{locality.name}</p>
            <p>{locality.address}</p>
            <p>{distance }{order.deliveryTime}</p>
            <p className="mutual">
                {info.rating.aggregate_rating}⭐
                
            </p>
            <button className="add"> {info.cfo.text}</button>
        </div>
      
    </div>
    )
 
}

export default Card;