import React, { useEffect, useState } from "react";
import handshakeImage from "../assets/images/handshake.png";
import axios from "axios";

const Services = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}services`)
      .then((resp) => {
        setServiceList(resp.data.data);
      });
  }, []);

  return (
    <div className="service-container">
      <div className="text-center">
        <h3 className="service-title">Our Services</h3>
      </div>

      <div className="row">
        {serviceList && serviceList.map((ele, index) => {
          return (
            <div className="col-sm-3 text-center" key={index}>
              <div className="card" style={{ marginLeft: '5px' }}>
                <div className="text-center">
                  <img
                    src={handshakeImage}
                    className="card-img-top"
                    style={{ height: '100px', width: '100px' }}
                    alt="Service Icon"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;