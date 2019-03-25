import { h } from 'hyperapp' // @jsx h

export default () => state => (
  <section>
    <h2>Company</h2>

    <table className="company-overview">
      <tr>
        <th>会社名</th>
        <td>株式会社OUTSENSE / OUTSENSE, inc.</td>
      </tr>
      <tr>
        <th>設立</th>
        <td>2018年 8月</td>
      </tr>
      <tr>
        <th>代表</th>
        <td>高橋 鷹山</td>
      </tr>
      <tr>
        <th>事業概要</th>
        <td>
          折り紙構造物を用いた、<br />
          ・月居住施設の販売とホテル事業<br />
          ・月施設の構築とリース事業<br />
          ・宇宙での空間デザイン<br />
          ・地上での空間デザイン<br />
          ・製品デザイン & 製品開発
        </td>
      </tr>
      <tr>
        <th>アクセス</th>
        <td>
          〒160-0015<br />
          東京都新宿区大京町25-3<br />
          キングダム御苑804
        </td>
      </tr>
    </table>
  </section>
)