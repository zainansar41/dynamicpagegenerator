import React, {useState, useEffect} from "react";
import Pagination from "../Pagination/Pagination";
import "./right.css";
import { modifyNavbarHtml } from "../../Helper/helper";
import { getNavbars } from "../../Hooks/hooks";


export default function Navbar({selectedContent, onAddLink }) {
  const [navbars, setNavbars] = useState([]);
  //cssCode:"", htmlCode:"", linkClass:"", linkCode:"", linkParentClass:"", logoClass:""
  const [navbarData, setNavbarData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [navColor, setNavColor] = useState("#000000");
  useEffect(() => {
    getNavbars().then((res) => {
      console.log(res);
      setNavbars(res.data);
      setNavbarData(res.data[0]);
    });
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleAddLink = () => {
    console.log(currentPage);
    const newLink = { name: linkName, url: linkUrl };
    setLinks([...links, newLink]);
    onAddLink(newLink); // Call the function passed from Right
    setLinkName("");
    setLinkUrl("");
  };

  const handleSave = () => {
    modifyNavbarHtml(navbarData.htmlCode, navbarData, links, companyName, navColor);
  }

  return (
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
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}