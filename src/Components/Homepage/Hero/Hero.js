import React from 'react';
import '../Hero/Hero.css'
import Main from '../main/main';
const Hero = () => {
    return (
      <div  className="pb-5">
        <div className="heropage min-h-screen px-5">
            <nav class="navbar navbar-expand-lg navbar-light   ">
  <div class="container-fluid ">
    <a class="navbar-brand  " href="#">
<img style={{height:"75px"}} className="logo 
 img-fluid rounded-circle" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.15752-9/142662653_4041096052589107_6505610008618726005_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=zfTeLYbJ9soAX_ZvwIf&_nc_ht=scontent.fdac24-1.fna&oh=e6218a45da65981ad80059bbea771528&oe=60330107" alt="logo" />
    </a>
    <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-bs-target="#navbarNav" aria-controls="#navbarNav" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon  "></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ml-auto text-light font-weight-bold">
        <li class="nav-item px-4">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link text-warning" href="#" >Helped By</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link text-light" href="#">About</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link text-warning" href="#" >Team</a>
        </li>
        <li class="nav-item pl-4">
          <a class="nav-link disabled text-primary" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Main/>
</div>
<svg  style={{backgroundColor:"#273036"}} className="heropag " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1.6" d="M0,224L8.9,197.3C17.8,171,36,117,53,128C71.1,139,89,213,107,224C124.4,235,142,181,160,138.7C177.8,96,196,64,213,48C231.1,32,249,32,267,53.3C284.4,75,302,117,320,154.7C337.8,192,356,224,373,213.3C391.1,203,409,149,427,106.7C444.4,64,462,32,480,64C497.8,96,516,192,533,213.3C551.1,235,569,181,587,149.3C604.4,117,622,107,640,90.7C657.8,75,676,53,693,69.3C711.1,85,729,139,747,138.7C764.4,139,782,85,800,90.7C817.8,96,836,160,853,208C871.1,256,889,288,907,256C924.4,224,942,128,960,117.3C977.8,107,996,181,1013,197.3C1031.1,213,1049,171,1067,176C1084.4,181,1102,235,1120,229.3C1137.8,224,1156,160,1173,128C1191.1,96,1209,96,1227,112C1244.4,128,1262,160,1280,154.7C1297.8,149,1316,107,1333,80C1351.1,53,1369,43,1387,42.7C1404.4,43,1422,53,1431,58.7L1440,64L1440,320L1431.1,320C1422.2,320,1404,320,1387,320C1368.9,320,1351,320,1333,320C1315.6,320,1298,320,1280,320C1262.2,320,1244,320,1227,320C1208.9,320,1191,320,1173,320C1155.6,320,1138,320,1120,320C1102.2,320,1084,320,1067,320C1048.9,320,1031,320,1013,320C995.6,320,978,320,960,320C942.2,320,924,320,907,320C888.9,320,871,320,853,320C835.6,320,818,320,800,320C782.2,320,764,320,747,320C728.9,320,711,320,693,320C675.6,320,658,320,640,320C622.2,320,604,320,587,320C568.9,320,551,320,533,320C515.6,320,498,320,480,320C462.2,320,444,320,427,320C408.9,320,391,320,373,320C355.6,320,338,320,320,320C302.2,320,284,320,267,320C248.9,320,231,320,213,320C195.6,320,178,320,160,320C142.2,320,124,320,107,320C88.9,320,71,320,53,320C35.6,320,18,320,9,320L0,320Z"></path></svg>
        {/* </div> */}

   
        </div>
    );
};

export default Hero;