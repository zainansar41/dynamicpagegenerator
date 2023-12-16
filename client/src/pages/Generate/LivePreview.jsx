import React, {useEffect } from "react";
import { useLocation } from "react-router-dom";


const LivePreview = () => {
  const location = useLocation();
  const { html, css } = location.state;

  useEffect(() => {
    const updatePreview = () => {
      const iframe = document.getElementById("previewFrame");
      const iframeDocument = iframe.contentDocument;
      iframeDocument.open();
      iframeDocument.write(`
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
      
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap" rel="stylesheet">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      </head>
            <style>${css}</style>
          <body>${html}
          </body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>

</html>
      `);
      iframeDocument.close();
    };

    updatePreview();
  }, [html, css]);

  return (
    <div>
      <div className="previewComplete">
        <h2>Live Preview:</h2>
        <iframe
          title="preview"
          id="previewFrame"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default LivePreview;
