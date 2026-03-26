import React from "react";
import Header from "../components/Header";
import OurTeamList from "../components/OurTeamList";
import Footer from "../components/Footer";


const OurTeam= () => {
    return(
        <>
        <Header />
         <div style={{background:'rgb(244, 244, 244)'}}>
        <OurTeamList />
        </div>
        <hr></hr>
        <Footer />
        
        
        
        
        </>



    );
}

export default OurTeam;