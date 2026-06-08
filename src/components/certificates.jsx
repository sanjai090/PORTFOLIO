import { useState } from "react";
import Tilt from "react-parallax-tilt";

import AIB from "../assets/AIB.jpg";
import cloud from "../assets/cloud.jpg";
import deloit from "../assets/deloit.jpg";
import ethk from "../assets/ethk.jpg";
import git from "../assets/git.jpg";
import integratingAI from "../assets/IntegratingAI.jpg";
import react from "../assets/react.jpg";
import reactpro from "../assets/reactpro.jpg";
import internship from "../assets/internship.jpeg";
import kuruhack from "../assets/kuruhack.jpg";
import kuruhack2 from "../assets/kuruhack2.jpg";
import ai from "../assets/ai.jpeg";


function Certificates() {
  const certificates = [
    AIB, cloud, deloit, ethk, git,
    integratingAI, react, reactpro,
    internship, kuruhack, kuruhack2, ai
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold">My Certificates</h2>
          <div className="mx-auto" style={{ width: "60px", height: "4px", background: "var(--primary)" }}></div>
        </div>

        <div className="row g-4">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-4" data-aos="zoom-in" data-aos-delay={index * 50}>
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05}>
                <div
                  className="glass-card shadow-lg overflow-hidden"
                  onClick={() => setSelectedImage(cert)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={cert} className="img-fluid" alt="Certificate" loading="lazy" />
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Modal Overlay */}
      {selectedImage && (
        <div
          className="custom-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 9999
          }}
          onClick={() => setSelectedImage(null)}
          data-aos="fade-in"
        >
          <div className="position-relative">
            <button 
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3" 
              style={{ zIndex: 10001 }}
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            ></button>
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="img-fluid rounded shadow-2xl"
              style={{
                maxHeight: "90vh",
                maxWidth: "100%",
                objectFit: "contain",
                border: "2px solid var(--border-color)"
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
