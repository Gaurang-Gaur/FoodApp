import {useRouteError} from "react-router-dom";



const Error=()=>{
    const err=useRouteError();

    console.log(err);



    return (
        <div>
            <h1> OOps something wrong </h1>
            <h2> checking our side for error</h2>
            <h4>{err.statusText}</h4>
        </div>
    )
}

export default Error;