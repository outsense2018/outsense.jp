import { h } from "hyperapp"; // @jsx h
import { Link } from "@hyperapp/router";

import Vision from "./Vision";
import AboutUs  from "./Team";
import Technology from "./Technology";
import Concept from "./Concept";
import Company from "./Company";
import Contact from "./Contact";

export default () => state => (
  <main>
    <div className="cover"></div>
    <Vision />
    <AboutUs />
    <Technology />
    <Concept />
    <Company />
    <Contact />
  </main>
);
