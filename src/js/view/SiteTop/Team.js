import { h } from 'hyperapp' // @jsx h

export default () => state => (
  <section className="team">
    <h1>Team</h1>

    <ul>
      <li>
        <div className="yozan-takahashi"></div>
        <h3>
          <span>代表取締役社長 CEO</span>
          Yozan Takahashi
        </h3>
      </li>

      <li>
        <div className="akio-ito"></div>
        <h3>
          <span>COO</span>
          Akio Ito
        </h3>
      </li>

      <li>
        <div className="shuga-horii"></div>
        <h3>
          <span>CDO</span>
          Shuga Horii
        </h3>
      </li>

      <li>
        <div className="shintaro-ishimatsu"></div>
        <h3>
          <span>CTO</span>
          Shintaro Ishimatsu
        </h3>
      </li>
    </ul>
  </section>
)