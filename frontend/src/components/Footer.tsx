const Footer = () => {

    return (
        <div className="footerParentDiv ">
        <div className="content">
          <div>
            <div className="heading">
              <p>POPULAR LOCATIONS</p>
            </div>
            <div className="list">
              <ul>
                <li>kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>ABOUT US</p>
            </div>
            <div className="list">
              <ul>
                <li>About OLX Group</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>OLXPeople</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>OLX</p>
            </div>
            <div className="list">
              <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer"> 
          <ul className="flex gap-20 h-36 p-12  ml-36">
            <li>
              <img className="w-44 ml-44" src="public/footer-1.png" />
            </li> 
            <li>
            <span className="h-[100px] ml-5 w-px bg-white inline-block"></span> 
            </li>
            <li>
              <img className="w-16" src="public/footer-2.png" />
            </li> 
            <li>
              <img className="w-24" src="public/footer-3.png" />
            </li> 
            <li>
              <img className="w-24" src="public/footer-4.png" />
            </li> 
            <li>
              <img className="w-24" src="public/footer-5.png" />
            </li> 
            <li>
              <img className="w-24" src="public/footer-6.png" />
            </li>  
          </ul>
       
        </div>
       <div className="text-white text-end footer-credit">
       <span className="text-xs mr-44">All rights reserved © 2006-2024 OLX</span>
       </div>
      </div>
    )
}

export default Footer