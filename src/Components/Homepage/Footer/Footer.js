import React from 'react';

const Footer = () => {
    return (
        <div className="Heropage ">
            <div>
                <svg style={{backgroundColor:""}} className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L6.2,138.7C12.3,149,25,171,37,170.7C49.2,171,62,149,74,144C86.2,139,98,149,111,181.3C123.1,213,135,267,148,245.3C160,224,172,128,185,117.3C196.9,107,209,181,222,202.7C233.8,224,246,192,258,170.7C270.8,149,283,139,295,154.7C307.7,171,320,213,332,197.3C344.6,181,357,107,369,106.7C381.5,107,394,181,406,202.7C418.5,224,431,192,443,192C455.4,192,468,224,480,202.7C492.3,181,505,107,517,101.3C529.2,96,542,160,554,165.3C566.2,171,578,117,591,128C603.1,139,615,213,628,218.7C640,224,652,160,665,138.7C676.9,117,689,139,702,176C713.8,213,726,267,738,266.7C750.8,267,763,213,775,186.7C787.7,160,800,160,812,170.7C824.6,181,837,203,849,208C861.5,213,874,203,886,165.3C898.5,128,911,64,923,74.7C935.4,85,948,171,960,202.7C972.3,235,985,213,997,197.3C1009.2,181,1022,171,1034,144C1046.2,117,1058,75,1071,85.3C1083.1,96,1095,160,1108,197.3C1120,235,1132,245,1145,213.3C1156.9,181,1169,107,1182,85.3C1193.8,64,1206,96,1218,128C1230.8,160,1243,192,1255,213.3C1267.7,235,1280,245,1292,229.3C1304.6,213,1317,171,1329,149.3C1341.5,128,1354,128,1366,117.3C1378.5,107,1391,85,1403,85.3C1415.4,85,1428,107,1434,117.3L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg> 
            <div className=" px-5 py-3 min-h-screen heropag ">
           
           <div className=" row  text-light">

           <div className="col-md-6 text-white  text-center justify-content-center  pl-5">
           <h1 style={{color:"whitesmoke"}}>stay Tuned with US <b className="font-weight-bold text-info"><br/> Get a reply </b> </h1> <br/>
           <h4>017102589320</h4>
           <h5>abcd@gmail.com</h5>
           <h5 style={{color:"whitesmoke"}}>facbook.com/chajonogostiadibasifront</h5> 

           </div>
           
           <div className="col-md-6 col-sm-6 pl-5 py-2  text-center justify-content-center">
                    <input type="email" name="EmailOfNotification" id="" placeholder="send us your email address" className="w-75 bg-light pt-2  pb-2" style={{borderRadius:"4px"}}/>
                   <br/>
                   <br/>
                   <input type="text" name="NameOfNotification" id="" placeholder=" your name" className=" bg-light pt-2 w-75  pb-2" style={{borderRadius:"4px"}}/>
                    
                    <br/>
                    <br/>
                    <div className="d-flex flex-items-center text-center justify-content-center ">
                    <button type="submit"  className="btn btn-info text-light font-weight-bold px-4 py-2">Send</button></div>
                </div>
            </div>
           </div>
           </div>
           <footer className="text-center text-secondary mt-5"><small><b>©ShuvoKumarKoiri</b></small></footer>
           </div>
    );
};

export default Footer;