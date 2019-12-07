import { h } from 'hyperapp' // @jsx h

export default () => state => (
  <section className="teamEn">
    <h1>Teams</h1>
    <h2>Members</h2>
    <ul>
      <li>
        <div className="yozan-takahashi"></div>
        <h3>
          <span>CEO</span>
          Yozan<br /> Takahashi
        </h3>
      </li>

      <li>
        <div className="akio-ito"></div>
        <h3>
          <span>COO</span>
          Akio<br /> Ito
        </h3>
      </li>

      <li>
        <div className="shuga-horii"></div>
        <h3>
          <span>CDO</span>
          Shuga<br /> Horii
        </h3>
      </li>

      <li>
        <div className="shintaro-ishimatsu"></div>
        <h3>
          <span>CTO</span>
          Shintaro<br /> Ishimatsu
        </h3>
      </li>
    </ul>
    <h2>Advisor</h2>
    <ul>
      <li>
        <div className="akito-sogame"></div>
        <h3>
          <span>Technical Advisor</span>
          Akito<br /> Sogame
        </h3>
      </li>
    </ul>
  </section>
)