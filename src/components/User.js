import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:'prince',
                location:'mirzapur'
            }
        }
       // console.log(this.props.name+"child constructor");     
    }

    async componentDidMount(){
        
        const data=await fetch('https://api.github.com/users/Priyanshu-pandey123');
        const json =await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
        
    }
    render(){
        //console.log(this.props.name+"child render");
        const {name,
            url,
            avatar_url
            }=this.state.userInfo
     
        return(
       <div className="h-[200px] w-[400px] border-2 border-black bg-black ml-[300px]">
        <img
        alt="not found"
        src={
            avatar_url
            }

            className="h-[70px] w-[70px] ml-[170px] rounded-full mt-[10px]"
        
        />
        <h1 className="text-2xl text-white">Name-{this.state.userInfo.name}</h1>
        <h2 className="text-white">url-{url}</h2>
       </div>
        )
    }
}

export default User;