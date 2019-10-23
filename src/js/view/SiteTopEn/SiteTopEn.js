import { h } from "hyperapp"; // @jsx h
import { Link } from "@hyperapp/router";

import Team from "./Team";
import Vision from "./Vision";
import Technology from "./Technology";
import Concept from "./Concept";
import Company from "./Company";
import Contact from "./Contact";

export default () => state => (
  <main>
    <nav className="news">
      <a
        href="https://lne.st/2019/08/20/ota-city2019/?fbclid=IwAR2isJFtrWT0uIMKyNFJhoF38NgV9bXbtiIib2vAnapz-9eLut2UBUULceA"
        target="_blank"
      >
        <span>2019.08.20</span>
        大田区の2019年度「スタートアップとものづくり企業の連携創出実証実験事業」に採択されました！
      </a>
    </nav>
    <div className="cover"></div>
    <Vision />
    <Team />
    <Technology />
    <Concept />
    <Company />
    <Contact />
  </main>
);
