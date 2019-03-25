import { h } from 'hyperapp' // @jsx h

export default () => state => (
  <section className="team">
    <h2>Team</h2>
    <p>OUTSENSEで活動しているコアメンバーの紹介</p>

    <ul>
      <li>
        <img src="./images/team/YozanTakahashi.jpg" />
        <h3>
          <span>代表取締役社長CEO</span>
          <br/>
          Yozan Takahashi
        </h3>
      </li>

      <li>
        <img src="./images/team/AkioIto.jpg" />
        <h3>
          <span>COO</span>
          <br/>
          Akio Ito
        </h3>
      </li>

      <li>
        <img src="./images/team/ShugaHorii.jpg" />
        <h3>
          <span>CDO</span>
          <br/>
          Shuga Horii
        </h3>
      </li>

      <li>
        <img src="./images/team/ShintaroIshimatsu.jpg" />
        <h3>
          <span>CTO</span>
          <br/>
          Shintaro Ishimatsu
        </h3>
      </li>
    </ul>
  </section>
)