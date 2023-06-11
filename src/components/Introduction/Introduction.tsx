import React from 'react';
import './Introduction.css';
import Avatar from '@mui/material/Avatar';

export default function Introduction() {
  return (
    <div className="container">
      <Avatar style={{ width: "25vw", height: "25vw", minWidth: 200, minHeight: 200, maxWidth: 300, maxHeight: 300 }} alt="Image of Alexander Schoenenwald" src={require("./avatar.jpeg")} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", maxWidth: "800px", textAlign: 'justify' }}>
        <h1>Hey!</h1>
        <p>
          I am excited about the&nbsp;
          <span style={{ backgroundColor: "#FDF420", color: "black", padding: 2, borderRadius: 12 }}>
            design and implementation of features from end-to-end -&nbsp;
          </span> collecting user requirements, prototyping designs, implementing the backend/frontend and lastly, measuring the success of new features. All of this with the customer / user at the center of the process.
        </p>
        <p>
          Please find below a selection of my projects and experiences that I can openly write about.
        </p>
        <p>
          Thanks for giving this a read! 🚀<br />
          Alex
        </p>
        <p>
        </p>
      </div>
    </div>
  );
}