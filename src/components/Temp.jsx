import { useState } from "react";

import AIB from "../assets/AIB.jpg";
import cloud from "../assets/cloud.jpg";
import deloit from "../assets/deloit.jpg";
import ethk from "../assets/ethk.jpg";
import git from "../assets/git.jpg";
import integratingAI from "../assets/integratingAI.jpg";
import react from "../assets/react.jpg";
import reactpro from "../assets/reactpro.jpg";
import internship from "../assets/internship.jpeg";
import kuruhack from "../assets/kuruhack.jpg";
import kuruhack2 from "../assets/kuruhack2.jpg";

function Certificates() {

  const certificates = [
    AIB, cloud, deloit, ethk, git,
    integratingAI, react, reactpro,
    internship, kuruhack, kuruhack2
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Certificates</h2>

        <div className="row g-4">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-4">
              <div
                className="card shadow-sm"
                onClick={() => setSelectedImage(cert)}
                style={{ cursor: "pointer" }}
              >
                <img src={cert} className="card-img-top" alt="Certificate" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Modal */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{
              width: "60%",
              borderRadius: "10px"
            }}
          />
        </div>
      )}
    </section>
  );
}

export default Certificates;