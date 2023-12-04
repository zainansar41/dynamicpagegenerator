import React, { useState } from "react";
import generateBG from "../../assets/generateBG.jpeg";
import Pagination from "../Pagination/Pagination";
import "./right.css";

export default function Right({ selectedContent }) {
  let contentToRender;
  const [currentPage, setCurrentPage] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [navColor, setNavColor] = useState("#000000");
  const [footerColor, setFooterColor] = useState("#000000");
  const [pageEmail, setPageEmail] = useState("");
  const [pagePhone, setPagePhone] = useState("");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleAddLink = () => {
    // Add the link to the links array
    const newLink = { name: linkName, url: linkUrl };
    setLinks([...links, newLink]);

    setLinkName("");
    setLinkUrl("");
  };

  const handlePreview = () => {
    console.log("Company Name:", companyName);
    console.log("Links:", links);
    console.log("Color:", navColor);
    console.log("Footer Color:", footerColor);
    console.log("Email:", pageEmail);
    console.log("Phone:", pagePhone);
  };

  switch (selectedContent) {
    case "Navbar":
      contentToRender = (
        <div className="container">
          <h1>{selectedContent}</h1>
          <Pagination
            totalItems={200}
            itemsPerPage={10}
            onPageChange={handlePageChange}
          />
          <div className="inputs">
            <h2>Add Basic Info</h2>
            <div className="input">
              <label>Company Name:</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="links_input">
              <div className="input">
                <label>Link Name:</label>
                <input
                  type="text"
                  value={linkName}
                  onChange={(e) => setLinkName(e.target.value)}
                />
              </div>
              <div className="input">
                <label>Link URL:</label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="input">
              <label>NavBar Color:</label>
              <input
                type="color"
                value={navColor}
                onChange={(e) => setNavColor(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button onClick={handleAddLink}>Add Link</button>
              <button>Save</button>
              <button onClick={handlePreview}>Preview</button>
            </div>
          </div>
        </div>
      );
      break;
    case "Hero Section":
      contentToRender = (
        <div>
          <h1>Hero Section</h1>
        </div>
      );
      break;
    case "Cards":
      contentToRender = (
        <div>
          <h1>Cards</h1>
        </div>
      );
      break;
    case "Testimonials":
      contentToRender = (
        <div>
          <h1>Testimonials</h1>
        </div>
      );
      break;
    case "Forms":
      contentToRender = (
        <div>
          <h1>Forms</h1>
        </div>
      );
      break;
    case "Footer":
      contentToRender = (
        <div>
          <h1>Footer</h1>
          <Pagination
            totalItems={200}
            itemsPerPage={10}
            onPageChange={handlePageChange}
          />

          <div className="inputs">
            <h2>Add Basic Info</h2>
            <div className="input">
              <label>Footer Color:</label>
              <input
                type="color"
                value={footerColor}
                onChange={(e) => setFooterColor(e.target.value)}
              />
            </div>
            <div className="links_input">
              <div className="input">
                <label>Email:</label>
                <input
                  type="text"
                  value={pageEmail}
                  onChange={(e) => setPageEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <label>Phone number</label>
                <input
                  type="text"
                  value={pagePhone}
                  onChange={(e) => setPagePhone(e.target.value)}
                />
              </div>
            </div>
            <div className="button-container">
              <button>Save</button>
              <button onClick={handlePreview}>Preview</button>
            </div>
          </div>
        </div>
      );
      break;
    case "Others":
      contentToRender = (
        <div>
          <h1>Others</h1>
        </div>
      );
      break;

    default:
      contentToRender = (
        <>
          <img src={generateBG} alt="" />
          <div className="div">
            <h2>Lets Start making</h2>
            <h3>Click on the buttons from side menu to start making website</h3>
            <div className="btn_div">
              <div class="light-button">
                <button class="bt">
                  <div class="light-holder">
                    <div class="dot"></div>
                    <div class="light"></div>
                  </div>
                  <div class="button-holder">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                    </svg>
                    <p>Start</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      );
  }

  return <>{contentToRender}</>;
}
