import { h } from 'hyperapp' // @jsx h
import { Link, Route, location } from '@hyperapp/router'

export default () => state => (
  <header className="site-header">
    <h1>
      <Link to="/">OUTSENSE</Link>
    </h1>
    <nav>
      <Link to="/">Top</Link>
      <Link to="/about">About</Link>
      <Link to="/topics">Topics</Link>
    </nav>
  </header>
)