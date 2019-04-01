import { h } from 'hyperapp' // @jsx h
import { Link, Route, location } from '@hyperapp/router'

export default () => state => (
  <header className="site-header">
    <h1>
      <Link to="/">OUTSENSE</Link>
    </h1>
    <nav>
      <Link to="/">News</Link>
      <a href="https://twitter.com/teamoutsense">Twitter</a>
      <a href="https://www.facebook.com/teamOUTSENSE/" target="_blank">Facebook</a>
    </nav>
  </header>
)