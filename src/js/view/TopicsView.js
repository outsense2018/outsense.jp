import axios from 'axios'
import { h } from 'hyperapp' // @jsx h
import { Link, Route, location } from '@hyperapp/router'


let doc
axios.get('../md/topics.md')
  .then(function (response) {
    doc = response.data
    console.log(doc)
  })
  .catch(function (error) {
    console.log(error)
  })


const Topic = ({ match }) => <h3>match.params.topicId</h3>

export default ({ match }) => (
  <div key="topics">
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={ `${match.url}/components` }>Components</Link>
      </li>
      <li>
        <Link to={ `${match.url}/single-state-tree` }>Single State Tree</Link>
      </li>
      <li>
        <Link to={ `${match.url}/routing` }>Routing</Link>
      </li>
    </ul>
    <Route path={ `${match.path}/:topicId` } render={ Topic } />
  </div>
)
