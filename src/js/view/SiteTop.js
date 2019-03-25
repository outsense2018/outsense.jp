import { h } from 'hyperapp' // @jsx h

import Members from '../view/Members'
import AboutUs from '../view/AboutUs'
import Company from '../view/Company'

export default () => state => (
  <div>
    <AboutUs />
    <Members />
    <Company />
  </div>
)