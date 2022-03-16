import React from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";

const ReadOnlyRow = ({ contact }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "block",
        fontFamily: "'Trebuchet MS', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {" "}
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        Username:
        <Box
          color="black"
          border="1px solid grey"
          height="3"
          width="50%"
          marginRight="10px"
          marginLeft="10px"
          borderRadius="5px"
        >
          {contact.login.username}
        </Box>{" "}
        <div>
          {" "}
          <button style={{ backgroundColor: "#add8e6", borderRadius: "5px" }}>
            Save
          </button>
          <br />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        Gender:{" "}
        <Box
          color="black"
          border="1px solid grey"
          height="3"
          width="50%"
          marginRight="10px"
          marginLeft="10px"
          borderRadius="5px"
        >
          {contact.gender}
        </Box>{" "}
        <div>
          {" "}
          <button style={{ backgroundColor: "#add8e6", borderRadius: "5px" }}>
            Edit
          </button>
          <br />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        Date of Birth:{" "}
        <Box
          color="black"
          border="1px solid grey"
          height="3"
          width="50%"
          marginRight="10px"
          marginLeft="10px"
          borderRadius="5px"
        >
          {moment(contact.dob.date).format("DD/MM/YYYY")}
        </Box>{" "}
        <div>
          {" "}
          <button style={{ backgroundColor: "#add8e6", borderRadius: "5px" }}>
            Edit
          </button>
          <br />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        Phone Number:
        <Box
          color="black"
          border="1px solid grey"
          height="3"
          width="50%"
          marginRight="10px"
          marginLeft="10px"
          borderRadius="5px"
        >
          {contact.phone}
        </Box>{" "}
        <div>
          {" "}
          <button style={{ backgroundColor: "#add8e6", borderRadius: "5px" }}>
            Edit
          </button>
          <br />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        Address:
        <Box
          color="black"
          border="1px solid grey"
          height="10em"
          width="50%"
          marginRight="10px"
          marginLeft="10px"
          borderRadius="5px"
        >
          {contact.location.city} {contact.location.state}
          {"   "}
          {contact.location.country} {contact.location.postcode}
        </Box>{" "}
        <div>
          {" "}
          <button style={{ backgroundColor: "#add8e6", borderRadius: "5px" }}>
            Edit
          </button>
          <br />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
        Alternative Contact Email:
        <Box
          color="black"
          border="1px solid grey"
          height="0"
          width="50%"
          marginRight="10px"
          marginLeft="10px"
          borderRadius="5px"
        >
          <img
            src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/000000/external-email-communication-nawicon-glyph-nawicon-2.png"
            style={{ height: "20px" }}
          />
          {contact.email}
        </Box>{" "}
        <div>
          {" "}
          <button style={{ backgroundColor: "#add8e6", borderRadius: "5px" }}>
            Save
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};
export default ReadOnlyRow;
