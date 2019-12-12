import { h } from 'hyperapp' // @jsx h
import { Link } from '@hyperapp/router'

import Team from './Team'
import Vision from './Vision'
import Company from './Company'
import Contact from './Contact'

export default () => state => (
  <main>
    <nav className="news">
      <a href="https://global.lne.st/news/jp/2019/12/09/hicph-report/?fbclid=IwAR3MGOUsFDQcIcJSzHL5BnoFZiDv8Uq71UHXKOq9NXEHsHgQcYsdwvX7zMI" target="_blank">
        <span>2019.12.09</span>
        フィリピンで行われた「Hyper Interdisciplinary Conference」にてベストプレゼンター賞をいただきました！
      </a>
    </nav>
    <div className="cover"></div>
    <Vision />
    <Team />
    <Company />
    <Contact />
  </main>
)
