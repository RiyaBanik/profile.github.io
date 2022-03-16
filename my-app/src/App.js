import React, { useState, useRef, Fragment } from "react";
import data from "./contacts.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import Map from "./components/map.js";
import Pfp from "./components/Pfp.js";
import { withGoogleMap, GoogleMap } from "react-google-maps";

// const App = () => {
// //   const [contacts, setContacts] = useState(data);
//      return (
//       <Map />
// //   <>

// //      <div className="app-container">
// //      <h2>Settings</h2>
// //      <form>

//              {contacts.map((contact) =>(
{
  /* <fragment><ReadOnlyRow contact={contact}/>
    
    <map />
</fragment> */
}

//              ) )}

//          </form></div>
//          </>
//     );

// }
const App = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <>
      {/* {contacts.map((contact)=>(
    <Map contact={contact}/>
  ))} */}
      <Map />
      {contacts.map((contact) => (
        <Pfp contact={contact} />
      ))}
      {contacts.map((contact) => (
        <ReadOnlyRow contact={contact} />
      ))}
    </>
  );
};
export default App;
