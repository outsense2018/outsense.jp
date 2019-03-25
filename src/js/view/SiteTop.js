import { h } from 'hyperapp' // @jsx h

import Team from '../view/Team'
import AboutUs from '../view/AboutUs'
import Company from '../view/Company'

export default () => state => (
  <div>
    <AboutUs />
    <Team />
    <Company />
  </div>
)