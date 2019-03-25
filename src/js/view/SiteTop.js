import { h } from 'hyperapp' // @jsx h

import Team from '../view/Team'
import Vision from './Vision'
import Company from '../view/Company'
import Contact from '../view/Contact'
import Partners from '../view/Partners'

export default () => state => (
  <div>
    <Vision />
    <Team />
    <Company />
    <Partners />
    <Contact />
  </div>
)