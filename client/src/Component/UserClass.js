
import React from "react";





class UserClass extends React.Component{

    constructor(props){
        super(props);
       this.state={
        count:0,
        count2:1,

       }
    }

    render(){
        const {count}=this.state;
        return(
            <div>

                <div> I am class based components</div>
                <div> {this.props.name}</div>
                <button className="border border-black m-auto" onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>
                    click
                    </button>
                <div>{count}</div>
            </div>
        )
    }
}

export default UserClass;