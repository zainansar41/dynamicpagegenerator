import React, { useState, useEffect } from "react";
import generateBG from "../../assets/generateBG.jpeg";
import Pagination from "../Pagination/Pagination";
import "./right.css";

import { getNavbars } from "../../Hooks/hooks";

export default function Right({ selectedContent }) {
  let contentToRender;
  const [navbars, setNavbars] = useState([]);
  //cssCode:"", htmlCode:"", linkClass:"", linkCode:"", linkParentClass:"", logoClass:""
  const [navbarData, setNavbarData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [navColor, setNavColor] = useState("#000000");
  const [footerColor, setFooterColor] = useState("#000000");
  const [pageEmail, setPageEmail] = useState("");
  const [pagePhone, setPagePhone] = useState("");

  const [testimoninalText1, setTestimoninalText1] = useState("");
  const [testimoninalName1, setTestimoninalName1] = useState("");
  const [testimoninals, setTestimoninals] = useState([]);

  const updateHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const logo = doc.getElementsByClassName(navbarData.logoClass);

    if (logo.length) {
      logo[0].innerHTML = companyName;
    }

    const linkParentElements = doc.getElementsByClassName(
      navbarData.linkParentClass
    );

    if (linkParentElements.length) {
      // Iterate over each linkParentElement and add links
      linkParentElements[0].innerHTML = ""; // Clear existing content

      links.forEach((link) => {
        const linkDoc = parser.parseFromString(
          navbarData.linkCode,
          "text/html"
        );
        const mainLink = linkDoc.body.childNodes;

        // Iterate over child nodes and append each one
        for (let i = 0; i < mainLink.length; i++) {
          linkParentElements[0].appendChild(mainLink[i].cloneNode(true));
        }
      });
    }

    // Use Array.from to convert HTMLCollection to an array
    const linkClass = Array.from(
      doc.getElementsByClassName(navbarData.linkClass)
    );
    linkClass.forEach((link, index) => {
      link.innerHTML = links[index].name;
      link.href = links[index].url;
    });

    // Get the first 'nav' element
    const nav = doc.getElementsByTagName("nav")[0];

    // Serialize the 'nav' element
    let updatedHtml = new XMLSerializer().serializeToString(nav);
    updatedHtml = updatedHtml.replace(
      /--navbar-primary-color\s*:\s*#[0-9a-fA-F]{6}/g,
      `--navbar-primary-color: ${navColor}`
    );
    console.log(updatedHtml);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleAddLink = () => {
    console.log(currentPage);
    const newLink = { name: linkName, url: linkUrl };
    setLinks([...links, newLink]);

    setLinkName("");
    setLinkUrl("");
  };

  const handleAddTestimonial = () => {
    const newTestimonial = {
      name: testimoninalName1,
      review: testimoninalText1,
    };
    setTestimoninals([...testimoninals, newTestimonial]);
    setTestimoninalName1("");
    setTestimoninalText1("");
  };

  const handlePreview = () => {
    updateHTML(navbarData.htmlCode);
  };

  useEffect(() => {
    getNavbars().then((res) => {
      console.log(res);
      setNavbars(res.data);
      setNavbarData(res.data[0]);
    });
  }, []);

  switch (selectedContent) {
    case "Navbar":
      contentToRender = (
        <div className="container">
          <h1>{selectedContent}</h1>
          <Pagination
            totalItems={10}
            itemsPerPage={3}
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
              <label>NavBar Primary Color:</label>
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
          <Pagination
            totalItems={200}
            itemsPerPage={10}
            onPageChange={handlePageChange}
          />
          <div className="inputs">
            <div className="input">
              <label>Name:</label>
              <input
                type="text"
                value={testimoninalName1}
                onChange={(e) => setTestimoninalName1(e.target.value)}
              />
            </div>
            <div className="input">
              <label>Review:</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                type="text"
                value={testimoninalText1}
                onChange={(e) => setTestimoninalText1(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="button-container">
            <button onClick={handleAddTestimonial}>Add Testimonial</button>
            <button>Save</button>
            <button onClick={handlePreview}>Preview</button>
          </div>
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
