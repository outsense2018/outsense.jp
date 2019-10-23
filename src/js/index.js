import { app, h } from "hyperapp"; // @jsx h
import { Link, Route, location } from "@hyperapp/router";

import SiteHeader from "./view/SiteHeader";
import SiteFooter from "./view/SiteFooter";
import News from "./view/News";

import SiteTop from "./view/SiteTop/SiteTop";
import SiteTopEn from "./view/SiteTopEn/SiteTopEn";
import SXSW from "./view/SXSW";

const posts = [
  {
    title: "Hello World."
  }
];

const state = {
  posts: posts,
  showNews: false,
  location: location.state
};

const actions = {
  location: location.actions,
  toggleNews: () => state => ({ showNews: !state.showNews })
};

const view = (state, actions) => (
  <div>
    <SiteHeader actions={actions} />
    <News />

    <Route path="/" render={SiteTop} />
    <Route path="/en" render={SiteTopEn} />
    <Route path="/sxsw" render={SXSW} />

    <SiteFooter />
  </div>
);

const main = app(state, actions, view, document.body);

const unsubscribe = location.subscribe(main.location);
