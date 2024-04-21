import Navbar from "../component/Navbar.js";
import Main from "../component/Main.js";
import SecondPart from "../component/SecondPart.js";
import Grid from "../component/Grid.js";
import Footer from "../component/Footer.js";
import React from "react";

function LandingScreen() {
  return (
    <>
      <Navbar />
      <Main />
      <SecondPart />
      <Grid />
      <Footer />
    </>
  );
}
export default LandingScreen;
