import React, { useState, useEffect } from 'react';

const LivePreview = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  // Mock data for demonstration purposes
  useEffect(() => {
    // Fetch your data or set it directly to the state variables
    const fetchedHtml =  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <nav>
            <div class="logo title"><h4>Navbar</h4></div>
            <ul class="navlink">
                <li><a href="#">home</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">feedback</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </body>
    </html>`;
    const fetchedCss = `*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  nav{
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-height: 10vh;
      background: #5d4954;
  }
  .logo{
      color: white;
      font-size: 2em;
      letter-spacing: 3px;
  }
  .navlink{
      display: flex;
      justify-content: space-around;
      width: 30%;
  }
  .navlink li{
      list-style: none;
  }
  .navlink li a{
      color: white;
      font-size: 1.3em;
      text-decoration: none;
      text-transform: capitalize;
  }
  .navlink li a:hover{
      font-weight: bold;
  }
  .burger div{
      width: 25px;
      height: 3px;
      margin: 5px;
      background-color: white;
      border-radius: 2px;
  }
  .burger{
      display: none;
      cursor: pointer;
  }
  .burger:hover{
      /* border: 2px solid turquoise; */
      background-color: #493a42;
      border-radius: 3px;
  }
  @media screen and (max-width:1100px) {
      .navlink{
          width: 55%;
      }
  }
  @media screen and (max-width:770px) {
      body{
          overflow-x: hidden;
      }
      .navlink{
          position: absolute;
          right: 0;
          height: 90vh;
          top: 10vh;
          background: #5d4954;
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 50%;
          transform: translateX(100%);
          transition: transform 0.5s ease-in;
      }
      .navlink li{
          opacity: 1;
      }
      .burger{
          display: block;
      }
  }
  .nav-active{
      transform: translateX(0%);
  }
  @keyframes navlinkFade{
      from{
          opacity: 0;
          transform: translateX(50%);
      }
      to{
          opacity: 1;
          transform: translateX(0%);
      }
  }
  .toggle .line1{
      transform: rotate(-45deg) translate(-5px,6px);
  }
  .toggle .line2{
      /* display: none; */
      opacity: 0;
  }
  .toggle .line3{
      transform: rotate(45deg) translate(-5px,-6px);
     
  }`;
  const fetchedJs = `
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlink');
    const navlink = document.querySelectorAll('.navlinks li');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navlink.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = \`navlinkFade 0.5s ease forwards \${index / 7 + 2}s\`;
        }
      });

      burger.classList.toggle('toggle');
    });
  }
  
  navSlide();
`;

    // Set the data to the state variables
    setHtml(fetchedHtml);
    setCss(fetchedCss);
    setJs(fetchedJs);
  }, []);

  useEffect(() => {
    const updatePreview = () => {
      const iframe = document.getElementById('previewFrame');
      const iframeDocument = iframe.contentDocument;
      iframeDocument.open();
      iframeDocument.write(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>${html}</body>
          <script>${js}</script>
        </html>
      `);
      iframeDocument.close();
    };

    updatePreview();
  }, [html, css, js]);

  return (
    <div>
      <div className="preview">
        <h2>Live Preview:</h2>
        <iframe
          title="preview"
          id="previewFrame"
          width="100%"
          height="400px"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default LivePreview;
