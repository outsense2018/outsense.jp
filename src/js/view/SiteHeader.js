import { h } from "hyperapp"; // @jsx h
import { Link } from "@hyperapp/router";

export default () => (state, actions) => (
  <header className="site-header">
    <h1>
      <Link to="/">OUTSENSE</Link>
    </h1>
    <nav>
      <button onclick={actions.toggleNews}>News</button>
      <Link to="/">Japanese</Link>
      <Link to="/en">English</Link>
      <a href="https://twitter.com/teamoutsense" target="_blank">
        Twitter
      </a>
      <a href="https://www.facebook.com/teamOUTSENSE/" target="_blank">
        Facebook
      </a>
    </nav>
  </header>
);
