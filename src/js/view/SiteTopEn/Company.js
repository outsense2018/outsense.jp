import { h } from "hyperapp"; // @jsx h

export default () => state => (
  <section className="company">
    <h1>Company</h1>

    <div>
      <iframe
        src="https://www.youtube.com/embed/XBXnyLqSkXw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <table>
      <tr>
        <th>Company Name</th>
        <td>株式会社OUTSENSE / OUTSENSE, inc.</td>
      </tr>
      <tr>
        <th>CEO</th>
        <td>Yozan Takahashi</td>
      </tr>
      <tr>
        <th>Founded</th>
        <td>August 2018</td>
      </tr>
      <tr>
        <th>Location</th>
        <td>
          <p>
            〒160-0015
            <br />
            東京都新宿区大京町25-3 キングダム御苑804
          </p>
          <p>
            <a
              href="https://www.google.com/maps/place/OUTSENSE+本社/@35.6848207,139.7140409,17z/data=!4m8!1m2!2m1!1z5qCq5byP5Lya56S-T1VUU0VOU0U!3m4!1s0x60188d95f8beee55:0xc72e19cc73fb535f!8m2!3d35.6847758!4d139.7161496?hl=ja-JP"
              target="_blank"
            >
              Open in GoogleMap
            </a>
          </p>
        </td>
      </tr>
      <tr>
        <th>Service Orverview</th>
        <td>
          Using ORIGAMI technology for
          <ul>
            <li>Providing residence on the Moon</li>
            <li>Constructing facility on the Moon and leasing it</li>
            <li>Desinging space architecture</li>
            <li>Designing architecture</li>
            <li>Designing Products</li>
            <li>Developing Products</li>
          </ul>
        </td>
      </tr>
    </table>
  </section>
);
