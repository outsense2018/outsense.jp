import { h } from 'hyperapp' // @jsx h
import { Link } from '@hyperapp/router'

import Team from './SiteTop/Team'
import Vision from './SiteTop/Vision'
import Company from './SiteTop/Company'
import Contact from './SiteTop/Contact'

export default () => state => (
  <main>
    <nav className="news">
      <Link to="/sxsw">
        <span>2019.03.03</span>
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