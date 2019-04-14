import { h } from 'hyperapp' // @jsx h

const Greeting = () => (
  <section>
    <h1>News</h1>
    <h2>『ミライの月面基地』をSXSWに出展しました</h2>
    <p>
      この度はSouth by Southwest(以下「SXSW」)にて展示が終了しましたので、ご報告差し上げます。
      また、クラウドファンディングにて、たくさんのご支援、ご声援、誠にありがとうございました。
    </p>
    <p>
      世界最大級のスタートアップの祭典「SXSW」では、宇宙に興味がある方、優れた技術とビジョンを持つスタートアップ企業を探している方など、様々な企業、国の方に、弊社のブースにご来場いただけました。
      皆様のクラウドファンディングのご支援により、2m×2m級のプロトタイプの開発・製造を行うことができ、プロトタイプを用いた展開・収納実験では、訪れた方の多くが動画や写真の撮影され、成功した際には大きな歓声が生まれるなど、大変な賑わいを見せました。
      また「宇宙だけでなく被災地での仮設住居として使えるのでは」「砂漠など極限環境の住居として売れるのではないか」など、様々なご意見や、コンペティションやハッカソン等のイベントの情報を提供くださる方もおり、多種多様なビジネスチャンスの機会を得られました。
    </p>
    <p>
      今後も皆様に良いお知らせができますようOUTSENSE一同気を引き締めて努めてまいりますので、引き続き、応援のほどよろしくお願いいたします。
    </p>

    <div className="parallel">
      <img src="./images/SXSW/01.jpg" />
      <img src="./images/SXSW/02.jpg" />
    </div>

  </section>
)

const Movie = () => (
  <section>
    <h1>Movie</h1>
    <video src="./assets/SXSW/demo.mp4" controls muted></video>
    <p>SXSWでの実演の様子</p>
  </section>
)

const Gold = () => (
  <section className="sponsors">
    <h1>Sponsors</h1>

    <h2>ゴールドスポンサー</h2>
    <h3>宇宙システム開発株式会社 様</h3>
    <div class="ssd"></div>
    <p>
    Space Systems Development Corporation contributes to software development for space systems including operation planning and orbit calculation of satellite ground operation systems, operation support for experimental activities on the Japanese Experiment Module (JEM) of the International Space Station (ISS) and research cooperation for development of Environmental Control and Life Support System (ECLSS) equipment.
    </p>
    <a href="http://www.space-sd.co.jp" target="_blank">
      <h3>SSD HP|宇宙システム開発株式会社</h3>
      http://www.space-sd.co.jp
    </a>
  </section>
)

const Silver = () => (
  <section className="sponsors">
    <h2>シルバースポンサー</h2>
    <h3>合同会社Yspace 様</h3>
    <div class="yspace"></div>
    <a href="http://yspace-llc.com" target="_blank">
      <h3>Yspace – Connect our space. Connect our hearts</h3>
      http://yspace-llc.com
    </a>
  </section>
)

const Bronze = () => (
  <section className="sponsors">
    <h2>ブロンズスポンサー</h2>
    <h3>スペースアクセス株式会社 様</h3>
    <div class="space-access"></div>
  </section>
)

const SpecialThanks = () => (
  <section className="sponsors">
    <h2>Special Thanks</h2>
    <p>
      片山勇と雅美<br />
      I and my family get interested in space recently! I am happy that I can support a nice project.
    </p>

    <p>
      山口博則 / 陽<br />
      Life isn’t worth living, unless it is lived for someone else.
    </p>
  </section>
)

export default () => state => (
  <main>
    <video className="cover" src="./assets/SXSW/demo.mp4" autoplay loop muted></video>
    <Greeting />
    <Movie />
    <Gold />
    <Silver />
    <Bronze />
    <SpecialThanks />
  </main>
)