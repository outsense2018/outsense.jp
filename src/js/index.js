import { app, h } from 'hyperapp' // @jsx h
import { Link, Route, location } from '@hyperapp/router'

import SiteHeader from './view/SiteHeader'
import SiteFooter from './view/SiteFooter'

import SiteTop from './view/SiteTop/SiteTop'
import SXSW from './view/SXSW'

const posts = [
  {
    title: 'Hello World.'
  }
]

const state = {
  posts: posts,
  location: location.state
}

const actions = {
  location: location.actions
}

const view = state => (
  <div>
    <SiteHeader />

    <Route path="/" render={ SiteTop } />
    <Route path="/sxsw" render={ SXSW } />

    <SiteFooter />
  </div>
)

const main = app(
  state,
  actions,
  view,
  document.body
)

const unsubscribe = location.subscribe(main.location)