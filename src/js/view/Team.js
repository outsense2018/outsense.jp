import { h } from 'hyperapp' // @jsx h

export default () => state => (
  <section className="team">
    <h1>Team</h1>

    <ul>
      <li>
        <div style="background-image: url(../images/team/YozanTakahashi.jpg)"></div>
        <h3>
          <span>代表取締役社長 CEO</span>
          Yozan Takahashi
        </h3>
      </li>

      <li>
        <div style="background-image: url(../images/team/AkioIto.jpg)"></div>
        <h3>
          <span>COO</span>
          Akio Ito
        </h3>
      </li>

      <li>
        <div style="background-image: url(../images/team/ShugaHorii.jpg)"></div>
        <h3>
          <span>CDO</span>
          Shuga Horii
        </h3>
      </li>

      <li>
        <div style="background-image: url(../images/team/ShintaroIshimatsu.jpg)"></div>
        <h3>
          <span>CTO</span>
          Shintaro Ishimatsu
        </h3>
      </li>
    </ul>
  </section>
)