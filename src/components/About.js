import React from 'react';
import User from './User';
import { Link } from 'react-router-dom';

class About extends React.Component{
   
componentDidMount(){
  //console.log("parent didMount class");
}

  constructor(){
    super()
    //console.log("parent constructor class");
  }

  
    render(){
      //console.log("parent render class");
      return(
        <div  className='text-center'>
          <Link to="/" className='h-[20px] w-[40px] bg-black text-white'> Home</Link>
          <User/>
        </div>
      )
    }



}



export default About




