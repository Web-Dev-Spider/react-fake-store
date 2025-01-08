import React from "react";

function Footer() {
  return (
    <footer className="container-fluid position-relative bg-dark text-white">
      <div>
        <p className="text-center py-2">
          © 2024 Fake Store. All rights reserved.
        </p>
      </div>
      <p className="text-secondary small position-absolute bottom-0 end-0 mb-3 me-3">
        Developed using React.js by NMS
      </p>
    </footer>
  );
}

export default Footer;
