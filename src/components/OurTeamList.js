import React from "react";
import kingImage from "../assets/images/king.png";

const OurTeamList = () => {
  const team = [
    { id: 1, name: "user 1", image: kingImage },
    { id: 2, name: "user 2", image: kingImage },
    { id: 3, name: "user 3", image: kingImage },
    { id: 4, name: "user 4", image: kingImage },
    { id: 5, name: "user 5", image: kingImage },
    { id: 6, name: "user 6", image: kingImage },
    { id: 7, name: "user 7", image: kingImage },
    { id: 8, name: "user 8", image: kingImage },
    { id: 9, name: "user 9", image: kingImage },
    { id: 10, name: "user 10", image: kingImage },
    { id: 11, name: "user 11", image: kingImage },
    { id: 12, name: "user 12", image: kingImage },
  ];
  return (
    <div className="row">
        <div className="text-center">
            <h2 style={{marginTop:'20px', marginBottom:'20px'}}>Our Hardcore Team</h2>
        </div>
      {team.map((member) => (
        <div key={member.id} className="col-sm-3">
          <div  className="card text-center" style={{ margin: "20px" }}>
            <img
              src={member.image}
              className="card-img-top"
              style={{ height: "100px", width: "100px" }}
              alt={member.name}
            />
            <div className="card-body">
              <h5 className="card-title">{member.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeamList;
