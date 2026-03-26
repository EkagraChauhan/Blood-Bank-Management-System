    import React from "react";
    import { Link } from "react-router-dom";

    const Footer = () =>{
        return(<div className="row">
            <div className="col-sm-4">
                <div className="text-center">
                    <h3>Usefull Links</h3>
                </div>
                <div className="text-center">
                    <ul className="usefull-link">
                        <li><Link to={'/'}> https://eraktkosh.mohfw.gov.in</Link></li>
                        <li><Link to={'/'}>https://eraktkosh.mohfw.gov.in/.html</Link></li>
                        <li><Link to={'/'}>https://www.ijraset.com/research-paper</Link></li>
                        <li><Link to={'/'}>https://arkajainuniversity.ac.in/.pdf</Link></li>
                    </ul>

                </div>

            </div>
             <div className="col-sm-4">
                <div>
                   <p style={{color:'red',fontWeight:'bold',marginTop:'10px'}}>Contact Info-</p>
                    <p> Mahanagar Colony, Bareilly, PIN- 243006</p>
                    <p>Email: bloodbankapp@gmail.com</p>
                    <p>Mobile Number : +91 90277 47449</p>
                </div>
             </div>   
                  
                 <div className="col-sm-4">
                    <p style={{marginTop:'10px'}}>This full-stack Blood Bank Management System project with MySQL automates blood donation operations by maintaining donor records, blood inventory, and donation tracking in a centralized database. It offers features like donor registration, blood issue management,<br></br> 
                    and billing, ensuring fast and efficient.</p>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group" style={{marginTop:'20px'}}>
                        <button className="btn btn-danger">Subscribe</button>
                    </div>

                 </div>
             
                </div>)
    }

    export default Footer;