import { h } from 'hyperapp' // @jsx h
import { Link } from '@hyperapp/router'

import Team from './Team'
import Vision from './Vision'
import Company from './Company'
import Contact from './Contact'

export default () => state => (
  <main>
    <nav className="news">
      <Link to="/sxsw">
        <span>2019.03.15</span>
        『ミライの月面基地』をSXSWに出展しました
      </Link>
    </nav>
    <div className="cover"></div>
    <Vision />
    <Team />
    <Company />
    <Contact />
  </main>
)