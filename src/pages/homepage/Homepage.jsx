import React,{useEffect} from "react";
import Navbar from "../../components/Navbar";
import { testApi } from "../../apis/Api";
const Homepage = () => {

  //print Hello, when page load(automatic)
  useEffect(()=>{
    console.log("Hello!!!!!")

    //trigger testAPI
    testApi().then((res)=>{
      console.log(res) //test api is working
    }) 
  })

  return (
    <div>
        Homepage
    </div>
  );
};
export default Homepage;
