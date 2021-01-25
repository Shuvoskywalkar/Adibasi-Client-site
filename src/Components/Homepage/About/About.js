import React from 'react';
import '../About/About.css'
const About = () => {
    return (
        <div >|
        <div id="About"  className="px-5  justify-content-center align-items-center py-5">
      <div class="container-fluid  d-flex align-items-center justify-content-center ">
    <img style={{height:"130px"}} className="logo   rounded-circle" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.15752-9/142662653_4041096052589107_6505610008618726005_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=zfTeLYbJ9soAX_ZvwIf&_nc_ht=scontent.fdac24-1.fna&oh=e6218a45da65981ad80059bbea771528&oe=60330107" alt="logo" />
    </div>
      <h1 className="text-dark text-center pt-2 abouth1" style={{fontStyle:"initial",color:"rgb(94, 0, 202)"}}>About Us</h1>
      <div className="text-center text-secondary py-2">
           <b>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad molestias quia esse enim vero, corrupti illum modi amet quae voluptatibus, corporis eaque hic vitae voluptatum facilis quam excepturi laudantium veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tempora reiciendis minus numquam unde dolore, aperiam dicta. Quod voluptas officia praesentium maxime iure. Sed dicta ratione totam praesentium maxime. Excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem perferendis repudiandae provident, temporibus suscipit tempore quibusdam officiis sint reiciendis mollitia iure molestiae voluptates quae eveniet nobis? Quam culpa hic molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus facilis. Maxime, ipsam recusandae? Odit, deleniti consequuntur possimus quod dolores, enim cupiditate, officiis explicabo placeat libero maxime itaque reiciendis inventore.
          </b>
      </div>
      <hr />
      <div className="row">
          <div className="col-md-6 py-1">
              <img src="https://source.unsplash.com/user/erondu/800x600" className="img-fluid"/>
          </div>
          <div className="col-md-6 py-1"> <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d933094.5826012994!2d90.50146396515053!3d23.999282915264132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.306519299999998!2d91.7295503!4m5!1s0x3755b8e90a449e4f%3A0xb7092a9c25197fa4!2sdhaka%20university!3m2!1d23.7339932!2d90.3928773!5e0!3m2!1sen!2sbd!4v1611504038534!5m2!1sen!2sbd" width="400" height="300" frameborder="0" className="w-100 h-100" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
      </div>
      </div>
        </div>
    );
};

export default About;