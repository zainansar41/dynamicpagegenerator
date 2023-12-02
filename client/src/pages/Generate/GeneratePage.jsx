import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./generatePage.css";

export default function GeneratePage() {
  return (
    <>
      <Navbar />
      <div className="GenratePage_div">
        <div className="leftOptions">
          <h1>Left Options</h1>
          <div className="content">
            <div className="content1">
              <button>Navbar</button>
            </div>
            <div className="content1">
              <button>Hero Section</button>
            </div>
            <div className="content1">
              <button onClick={()=>{console.log("heelooo");}}>Cards</button>
            </div>
            <div className="content1">
              <button>Testimonials</button>
            </div>
            <div className="content1">
              <button>Forms</button>
            </div>
            <div className="content1">
              <button>Footer</button>
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <h1>Right Div</h1>
        </div>
      </div>
    </>
  );
}
