import { h } from 'hyperapp' // @jsx h

export default () => state => (
  <section className="company">
    <h1>Company</h1>

    <div>
      <iframe src="https://www.youtube.com/embed/XBXnyLqSkXw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <table>
      <tr>
        <th>会社名</th>
        <td>株式会社OUTSENSE / OUTSENSE, inc.</td>
      </tr>
      <tr>
        <th>代表</th>
        <td>高橋 鷹山</td>
      </tr>
      <tr>
        <th>設立</th>
        <td>2018年 8月</td>
      </tr>
      <tr>
        <th>所在地</th>
        <td>
          <p>
            〒144-0044<br />
            東京都太田区本羽田2-7-1 204
          </p>
          <p>
            <a href="https://goo.gl/maps/TDSSyMgrqwtMqVku8" target="_blank">
              住所をGoogleMapで開く
            </a>
          </p>
        </td>
      </tr>
      <tr>
        <th>事業概要</th>
        <td>
          折り紙構造物を用いた、
          <ul>
            <li>月居住施設の販売とホテル事業</li>
            <li>月施設の構築とリース事業</li>
            <li>宇宙での空間デザイン</li>
            <li>地上での空間デザイン</li>
            <li>製品デザイン & 製品開発</li>
          </ul>
        </td>
      </tr>
    </table>
  </section>
)