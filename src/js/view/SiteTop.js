import { h } from 'hyperapp' // @jsx h
import { Link } from '@hyperapp/router'

import Team from '../view/Team'
import Vision from './Vision'
import Company from '../view/Company'
import Contact from '../view/Contact'

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