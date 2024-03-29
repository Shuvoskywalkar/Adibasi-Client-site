import React, { useEffect, useState } from 'react';
import '../Team/Team.css'
import   Aos  from "aos";
import 'aos/dist/aos.css'

const Team = () => {
    const [team,setResult]=useState([])
    useEffect(()=>

        fetch('https://utsa-official-server.herokuapp.com/getTeamMembers')
        .then(res=>res.json())
        .then(result=>setResult(result))
    ,[])
    // console.log(team)
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div id="team" className=" py-5 ">
           <h1 className="pt-5 text-center ">Our <span className="text-info ">Directory</span> Panell</h1> 
           {team.length==0 && 
                <div class="d-flex justify-content-center  pt-5">
             <div class="spinner-grow text-info " style={{width:" 9rem", height:" 9rem"}} role="status">
                 <img src="" alt="" srcset=""/>
               <span class="sr-only">Loading...</span>
             </div>
           </div> }
         <div className="px-5 ">  <div className="row pt-5 px-md-5 ">


           {team.length!==0 && 
               team.map(rslt=>
 <div data-aos="fade-up" className="col-md-4 teambox text-center py-3 align-items-center"> 
<img className="text-center   circleimage img-fluid"  
                          src={`data:image/png;base64,${rslt.Image.img}`}  />
                          <h4  className="text-dark pt-3">{rslt.FullName}</h4>
                       <h5 className="text-info"  >{rslt.Position}</h5>
                       <p className="text-secondary">
                           <span className="text-dark font-weight-bold">Phone:</span> {rslt.Phone},<span className="font-weight-bold text-dark">University:</span> {rslt.University},<span className="font-weight-bold text-dark">Address:</span> {rslt.Bagaan}</p>
                         
 </div>) }</div>
           </div>
        </div>
    );
};

export default Team;