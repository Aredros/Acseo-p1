import { useState } from "react";
//Sections components
import { MainHeader } from "./assets/sections/MainHeader";
import { TitleBanner } from "./assets/sections/TitleBanner";
import { Expertises } from "./assets/sections/Expertises";
import { Realisations } from "./assets/sections/Realisations";
import { Witnesses } from "./assets/sections/Witnesses";
import { Technologies } from "./assets/sections/Technologies";
import { BlogBanner } from "./assets/sections/BlogBanner";
import { CallToAction } from "./assets/sections/CallToAction";
import { MainFooter } from "./assets/sections/MainFooter";

// import "./App.css";

function App() {
  return (
    <div className="container-fluid  main-app-container">
      <MainHeader />
      <main className="row">
        <TitleBanner />
        <Expertises />
        <Realisations />
        <Witnesses />
        <Technologies />
        <BlogBanner />
        <CallToAction />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
