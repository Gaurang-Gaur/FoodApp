import {Component} from "react";
import UserClass from "./UserClass"; // Assuming correct path to UserClass component

class About extends Component {
    constructor(props) {
        super(props);
       this.state={
        userInfo:{
            name:"dummy",
            location:"dummylocation",
            avatar_url:"#",
        },
       };
    }

    async componentDidMount(){

        const data =await fetch('https://api.github.com/users/Gaurang-Gaur');
        const insideData=await data.json();

        console.log(insideData);
        this.setState({
            userInfo:insideData,
        });
    }


    render() {
        const {name, location,avatar_url}=this.state.userInfo;

        return (
            <div>
                <UserClass name={"I am props"} />
                <img src={avatar_url}/>
                <div>{name}</div>
                <div>{location}</div>
            </div>
        );
    }
}

export default About;
