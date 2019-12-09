import { h } from 'hyperapp' // @jsx h
import { Link } from '@hyperapp/router'

export default () => (state, actions) => (
  state.showNews ?
    <nav id="news" className="news">
      <input id="latest_news" type="checkbox" checked="" />
      <h1>News</h1>
      <ul>

        <li>
          <a href="https://global.lne.st/news/jp/2019/12/09/hicph-report/?fbclid=IwAR3MGOUsFDQcIcJSzHL5BnoFZiDv8Uq71UHXKOq9NXEHsHgQcYsdwvX7zMI" target="_blank">
            <span>2019.12.09</span>
            フィリピンで行われた「Hyper Interdisciplinary Conference」にてベストプレゼンター賞をいただきました！
          </a>
        </li>

        <li>
          <a href="https://lne.st/2019/08/20/ota-city2019/?fbclid=IwAR2isJFtrWT0uIMKyNFJhoF38NgV9bXbtiIib2vAnapz-9eLut2UBUULceA" target="_blank">
            <span>2019.08.20</span>
            大田区の2019年度「スタートアップとものづくり企業の連携創出実証実験事業」に採択されました！
          </a>
        </li>

        <li>
          <a href="https://www.pref.ibaraki.jp/kikaku/kagaku/kokusai/documents/documents/koufu0607.pdf" target="_blank">
            <span>2019.06.05</span>
            2019年度「いばらき宇宙ビジネス支援事業」に採択されました！
          </a>
        </li>

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

      </ul>
    </nav> : <nav></nav>
)
