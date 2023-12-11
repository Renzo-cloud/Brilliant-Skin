//import React from "react";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Navbar from "./Components/navbar";
import StorePartners from "./Pages/SellerCenter/StorePartners";

const App = () => {
  return (
    <div>
      <Navbar />
      <StorePartners />
      {/* <Home /> */}
      {/* <Account /> */}
    </div>
  );
};

export default App;
