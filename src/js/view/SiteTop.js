import { h } from 'hyperapp' // @jsx h

import Team from '../view/Team'
import Vision from './Vision'
import Company from '../view/Company'

export default () => state => (
  <div>
    <Vision />
    <Team />
    <Company />
  </div>
)