import React from 'react';
import Typical from 'react-typical'
import {  raw} from "../main/raw.png";
const Main = () => {
    return (
        <div className="row   justify-content-center  justify-content-evenly">
            <div className="col-md-6 pt-5 mt-5">
                <div>    <h1 style={{fontSize:"43px",color:"whitesmoke",fontFamily:"potta one,cursive"}}>moulvibazar <b className="text-success" style={{color:"#71922E"}}>cha</b>  <br/> jonogoshti adibasi front </h1>
    <br/>
    <br/>
   
     <h5 className="py-3 " style={{color:'#C7D92B'}}>
         <b>
         <i style={{fontSize:"30px"}} class="fas fa-paw  text-light"></i>
</b>
     <Typical
        steps={[' We are an.....',1000,' Non-Profit-Organization',1000]}
        loop={Infinity}
        wrapper="b"
      
         
         />
         </h5>
    <h5 className="py-3 text-warning" >
    <b>
         <i style={{fontSize:"30px"}} class="fas fa-paw  text-light"></i>
</b>
     <Typical
        steps={[' Your Voice is ......',1000,' our stand of unity',1000]}
        loop={Infinity}
        wrapper="b"
      
         
         />
        
    </h5>
    <h5 className="py-3" style={{color:'#C7D92B'}}>       <b>
         <i style={{fontSize:"30px"}} class="fas fa-paw  text-light"></i>
</b>
     <Typical
        steps={[' We want to',1000,' get 300 tk per day',1000]}
        loop={Infinity}
        wrapper="b"
      
         
         /></h5>
</div>

  </div>
  <div className="col-md-6 " >
      
<img  className="img-fluid w-100" src="https://i.imgur.com/kGgkRNF.png" alt="" />

  </div> 
  </div>
    );
};

export default Main;