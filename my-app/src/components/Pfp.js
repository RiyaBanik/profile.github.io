import React from "react";
import "./Pfp.css";
const Pfp = ({ contact }) => {
  return (
    <div
      style={{
        fontFamily: "'Trebuchet MS', sans-serif",
        fontSize: 25,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <img
          style={{
            borderBottomRightRadius: 50,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
          }}
          src="https://randomuser.me/api/portraits/men/58.jpg"
        ></img>
      </div>
      <div style={{ marginTop: "5px" }}>
        <b>
          {contact.name.title} {contact.name.first} {contact.name.last}{" "}
        </b>
        <br />
        <p style={{ color: "cacaca", fontSize: "12.5px" }}>
          (Update your Photo and Personal Detail)
        </p>
      </div>
    </div>
  );
};
export default Pfp;
