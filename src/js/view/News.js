import { h } from 'hyperapp' // @jsx h
import { Link } from '@hyperapp/router'

export default () => (state, actions) => (
  state.showNews ?
    <nav id="news" className="news">
      <input id="latest_news" type="checkbox" checked="" />
      <h1>News</h1>
      <ul>
        <li onclick={ actions.toggleNews }>
          <Link to="/sxsw">
            <span>2019.03.15</span>
            『ミライの月面基地』をSXSWに出展しました
          </Link>
        </li>

        <li>
          <a href="https://camp-fire.jp/projects/119111/activities/74556#main" target="_blank">
            <span>2019.02.28</span>
            クラウドファンディングを達成しました
          </a>
        </li>

        <li>
          <a href="https://camp-fire.jp/projects/view/119111" target="_blank">
            <span>2019.01.28</span>
            クラウドファンディングを実施します
          </a>
        </li>
      </ul>
    </nav> : <nav></nav>
)