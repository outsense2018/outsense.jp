import { h } from 'hyperapp' // @jsx h

export default () => state => (
  <section className="team">
    <h1>Team</h1>
    <p>OUTSENSEで活動しているコアメンバーの紹介</p>

    <ul>
      <li>
        <img src="./images/team/YozanTakahashi.jpg" />
        <h3>
          <span>代表取締役社長 CEO</span>
          Yozan Takahashi
        </h3>
      </li>

      <li>
        <img src="./images/team/AkioIto.jpg" />
        <h3>
          <span>COO</span>
          Akio Ito
        </h3>
      </li>

      <li>
        <img src="./images/team/ShugaHorii.jpg" />
        <h3>
          <span>CDO</span>
          Shuga Horii
        </h3>
      </li>

      <li>
        <img src="./images/team/ShintaroIshimatsu.jpg" />
        <h3>
          <span>CTO</span>
          Shintaro Ishimatsu
        </h3>
      </li>
    </ul>
  </section>
)