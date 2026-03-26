import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bloodImage from "../assets/images/blood.png";

const DonorRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [remarks, setRemarks] = useState("");
  const [isError, setIsError] = useState("");

  const submitForm = () => {
    setIsError("");
    if (name === "" || email === "" || mobile === "" || bgroup === "" || remarks === "") {
      setIsError("Please fill all the fields");
      return;
    }
    const payload = {
            name: name,
            email:email,
            mobile: mobile,
            bloodGroup:bgroup,
            remarks:remarks
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}donor`, payload)
      .then(() => {
        setName("");
        setEmail("");
        setMobile("");
        setBgroup("");
        setRemarks("");
        alert("Contact query sent successfully");
      })
      .catch((error) => {
        console.error(error);
        setIsError("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Header />
      <div style={{ background: "rgb(244, 244, 244)", paddingTop: "20px", paddingBottom: "20px" }}>
        <div className="container">
          <div className="text-center">
            <h3>Become a Donor</h3>
          </div>
          <div className="card" style={{ padding: "20px", margin: "10px" }}>
            <div className="row">
              <div className="col-sm-6">
                <img src={bloodImage} alt="Blood Donation" style={{ width: "100%" }} />
              </div>
              <div className="col-sm-6">
                {isError && (
                  <div className="alert alert-danger" role="alert">
                    {isError}
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="email">E-mail:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your E-mail"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="mobile">Mobile Number:</label>
                  <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your Mobile Number"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="bgroup">Blood Group:</label>
                  <input
                    type="text"
                    id="bgroup"
                    value={bgroup}
                    onChange={(e) => setBgroup(e.target.value)}
                    placeholder="Enter your Blood Group"
                    className="form-control"
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="remarks">Remarks:</label>
                  <textarea
                    id="remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group mt-4">
                  <button onClick={submitForm} className="btn btn-danger">
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonorRequest;
