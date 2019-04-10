import { h } from 'hyperapp' // @jsx h

export default () => state => (
  <section className="company">
    <h1>Company</h1>

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
          〒160-0015<br />
          東京都新宿区大京町25-3 キングダム御苑804<br />
          <a href="https://www.google.com/maps/place/OUTSENSE+本社/@35.6848207,139.7140409,17z/data=!4m8!1m2!2m1!1z5qCq5byP5Lya56S-T1VUU0VOU0U!3m4!1s0x60188d95f8beee55:0xc72e19cc73fb535f!8m2!3d35.6847758!4d139.7161496?hl=ja-JP">
            GoogleMap
          </a>
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