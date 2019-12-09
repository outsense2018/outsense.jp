import { h } from "hyperapp"; // @jsx h

export default () => state => (
  <section className="companyEn">
    <h1>Company</h1>

    <div>
      <iframe
        src="https://youtu.be/kT11bv7aGbk"
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
          <p>Tokyo, Japan</p>
          <p>
            <a
              href="https://goo.gl/maps/cUTZhEh6bPYxsQk69"
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
