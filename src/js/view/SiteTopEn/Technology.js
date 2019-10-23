import { h } from "hyperapp"; // @jsx h

export default () => state => (
  <section className="technology">
    <h1>Technology</h1>

    <div>
      <iframe
        src="https://www.youtube.com/embed/R2440EWIa_o"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <p>
      For constructing residences in space, we have been developing and
      resarching ORIGAMI technology. Its folding pattern is unique at expanding
      in 3-dementional direction, and it means that the pattern is suitable for
      resizing room.
    </p>
    <p>
      In addition, we invented new related technology that makes it possible
      using thick and rigid materials for 3-dementional ORIGAMI. It's called
      "Ishimatsu-ORI" (* video above).
    </p>
    <p>
      We are developing origami structures for realizing space residence, but in
      the process, we are also considereing creating the origami industry on the
      Earth.
    </p>
  </section>
);
