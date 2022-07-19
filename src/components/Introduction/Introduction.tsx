import React from 'react';
import './Introduction.css';
import Avatar from '@mui/material/Avatar';

export default function Introduction() {
  return (
    <div className="container">
      <Avatar style={{ width: "25vw", height: "25vw", minWidth: 200, minHeight: 200, maxWidth: 300, maxHeight: 300 }} alt="Image of Alexander Schoenenwald" src="avatar.jpeg" />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", maxWidth: "800px" }}>
        <h1>Hey!</h1>
        <p>
          My name is Alex.
          <span style={{ backgroundColor: "#FDF420", color: "black", padding: 2 }}>
            &nbsp;My passion is to create outstanding user experiences by leveraging modern technology&nbsp;
          </span>- currently as Fullstack Engineer and Co-Founder at Futuro Farming GmbH.
        </p>
        <p>
          Being customer-centric, I am excited about the design and implementation of features from end-to-end: collecting user requirements, prototyping designs, implement the backend/frontend and lastly, measure the success of new features.
        </p>
      </div>
    </div>
  );
}