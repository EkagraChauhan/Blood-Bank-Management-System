        import React, { useEffect, useState } from "react";
        import handshakeImage from "../assets/images/handshake.png"
        import goalImage from "../assets/images/goal.png"
        import helpImage from "../assets/images/help.png"
        import staffImage from "../assets/images/staff.png"
        import axios from "axios";


        const Services =()=> {
            const [serviceList, setServiceList] = useState([]);
            useEffect(()=>{
                axios.get(`${process.env.REACT_APP_BASE_URL}services`).then((resp)=>{
                    setServiceList(resp.data.data);
                })
            },[])
            return(<div className="service-container">
                <div className="text-center">
                    <h3 className="service-title">Our Services</h3>
                </div>
                <div className="row">
                   {serviceList && serviceList.map((ele)=>{
                    return(<div className="col-sm-3 text-center">
                        <div class="card" style={{marginLeft:'5px'}} >
                            <div className="text-center">
        <img src={handshakeImage} class="card-img-top" style={{height:'100px',width:'100px' }} alt="..." />
        <div class="card-body">
            <h5 class="card-title">{ele.name}</h5>
           </div>
        </div>
                        </div>
                    </div>);
                   })}
                </div>
                      </div>)

        }

        export default Services;