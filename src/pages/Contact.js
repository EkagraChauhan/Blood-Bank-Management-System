import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState("");

  const submitForm = () => {
    setIsError("");
    if (name === "" || email === "" || mobile === "" || message === "") {
      setIsError("Please fill all the fields");
      return;
    }

    const payload = { name, email, address, mobile, message };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}contact`, payload)
      .then(() => {
        setName("");
        setEmail("");
        setAddress("");
        setMobile("");
        setMessage("");
        alert("Contact Query sent Successfully");
      })
      .catch((error) => {
        console.error(error);
        setIsError("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="text-center mt-4">
          <h3>Connect with Us</h3>
        </div>
        <div className="row contact-container">
          <div className="col-sm-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7019.888256946626!2d79.45618104109886!3d28.39075544165098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0069003d50e6b%3A0xb9c8467e867883b4!2sMahanagar%20Colony%2C%20Bareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1756971994434!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
            <p className="mt-4">
              <b>Address: </b>Mahanagar Colony, Bareilly, PIN- 243006
            </p>
            <p>
              <b>Email: </b>bloodbankapp@gmail.com
            </p>
            <p>
              <b>Mobile Number: </b>+91 90277 47449
            </p>
          </div>

          <div className="col-sm-6">
            {isError && (
              <div className="alert alert-danger" role="alert">
                {isError}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="Name">Name:</label>
              <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="Email">Email:</label>
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="Address">Address:</label>
              <input
                value={address}
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="Mobile">Mobile Number:</label>
              <input
                value={mobile}
                type="tel"
                onChange={(e) => setMobile(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="Message">Message:</label>
              <textarea
                value={message}
                className="form-control"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group mt-4">
              <button className="btn btn-danger" onClick={submitForm}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default Contact;
