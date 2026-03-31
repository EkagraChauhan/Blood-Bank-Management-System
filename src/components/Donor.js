import React from "react";
import bloodImage from "../assets/images/blood.png";
import { Link } from "react-router-dom";

const Donor = () => {
  return (
    <div className="row" style={{ marginTop: '50px', marginBottom: '20px' }}>
      <div className="col-sm-6">
        <div className="text-center">
          <h3 style={{ color: 'red', marginBottom: '20px', marginTop: '20px' }}>
            Become a Donor
          </h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: "80%" }}>
            <p>
              To become a blood donor in India, one must be healthy, aged 18–65, and weigh at least 50 kg, with normal blood pressure and hemoglobin above 12.5 g/dL...
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to={'/donor-request'} className="btn btn-danger" style={{ marginTop: '100px' }}>
            Join Us
          </Link>
        </div>
      </div>

      <div className="col-sm-6">
        <img src={bloodImage} alt="Blood Donation" style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default Donor;