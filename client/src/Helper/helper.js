export function modifyNavbarHtml(html, navbarData, links, companyName, navColor) {
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
      const linkDoc = parser.parseFromString(navbarData.linkCode, "text/html");
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
  localStorage.setItem("navbarHtml", updatedHtml);
  localStorage.setItem("navbarCSS", navbarData.cssCode);
}


export function modifyTestimonialHtml(html, TestimonialData, testimoninals, heading, subheading) {
  const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const headingElement = doc.getElementsByClassName(TestimonialData.heading);
    if(headingElement.length){
      headingElement[0].innerHTML = heading;
    }
    const subheadingElement = doc.getElementsByClassName(TestimonialData.subheading);
    if(subheadingElement.length){
      subheadingElement[0].innerHTML = subheading;
    }

    const TestimonialParentElement = doc.getElementsByClassName(TestimonialData.parentClass);
    if(TestimonialParentElement.length){
      TestimonialParentElement[0].innerHTML = "";
      testimoninals.forEach((testimonial) => {
        const testimonialDoc = parser.parseFromString(TestimonialData.testimonialCode, "text/html");
        const mainDoc = testimonialDoc.body.childNodes;
        for (let i = 0; i < mainDoc.length; i++) {
          TestimonialParentElement[0].appendChild(mainDoc[i].cloneNode(true));
        }
      });
      const TestimonialsClass = Array.from(
        doc.getElementsByClassName("testimonial")
      );

      TestimonialsClass.forEach((testimonial, index) => {
        const testimonialName = testimonial.getElementsByClassName(
          TestimonialData.nameClass
        );
        if (testimonialName.length) {
          testimonialName[0].innerHTML = testimoninals[index].name;
        }
        const testimonialText = testimonial.getElementsByClassName(
          TestimonialData.reviewClass
        );
        if (testimonialText.length) {
          testimonialText[0].innerHTML = testimoninals[index].review;
        }
      });

      const section = doc.getElementsByTagName("section")[0];
      let updatedHtml = new XMLSerializer().serializeToString(section);
      console.log(updatedHtml);
      localStorage.setItem("testimonialHtml", updatedHtml);
      localStorage.setItem("testimonialCSS", TestimonialData.cssCode);

    }

}