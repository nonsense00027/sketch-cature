import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-10 mt-10 text-center">Contact</h1>
      <div className="max-w-screen-lg mx-auto mt-10 flex flex-col items-center justify-center">
        <iframe
          width="600"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=uic&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
