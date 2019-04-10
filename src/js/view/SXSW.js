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

const Personal = () => (
  <section className="personal-sponsors">
    <h1>Personal</h1>
    <h3>片山勇と雅美</h3>
    <p>I and my family get interested in space recently! I am happy that I can support a nice project.</p>

    <h3>山口博則 / 陽</h3>
    <p>Life isn’t worth living, unless it is lived for someone else.</p>

    <ul>
      <li>H.TOSHI</li>
      <li>AMaeta</li>
      <li>Yamakoshi</li>
      <li>Tomo Shibata</li>
      <li>樋口 庸一</li>
      <li>Ko Matsuhiro</li>
      <li>Satoru.T</li>
      <li>かねこあゆみ</li>
      <li>9DW inc</li>
      <li>脇山 智</li>
      <li>Y.KATSUMIZU</li>
      <li>箱田 雅彦</li>
      <li>野崎 順平</li>
      <li>Ritsu.M</li>
      <li>tamio orimo</li>
      <li>Yo, N</li>
      <li>Todai To Texas</li>
      <li>金谷 泰史</li>
      <li>寺田悠人</li>
      <li>下川 民央</li>
      <li>Hiro.S</li>
      <li>Mikito Kezuka</li>
      <li>MISAKI</li>
      <li>akane oono</li>
      <li>SOKEN Y&N</li>
      <li>AKIUMI OKABE</li>
      <li>星川 力</li>
      <li>孫泰蔵</li>
      <li>横河鉄彌</li>
      <li>SAIBI HS SST</li>
      <li>H.Takayama</li>
      <li>kyohei tani</li>
      <li>Naruo Kanemoto</li>
      <li>Fujikawa</li>
      <li>戸塚 孝高</li>
      <li>宮島 勇也</li>
      <li>ジュン</li>
      <li>Yuuki Tada</li>
      <li>Aj_Ayumi.O</li>
      <li>杉山 健成</li>
      <li>だっちゃん</li>
      <li>北村 尚弘</li>
      <li>沖村 明</li>
      <li>柴田 尭彦</li>
      <li>Yoichi Yokota</li>
      <li>Ryota Utsumi</li>
      <li>LIBERO inc.</li>
      <li>岡本 ひかる</li>
      <li>佐伯 研介</li>
      <li>S.T.YAMAMOTO</li>
      <li>Ryosuke Hoshi</li>
      <li>Kaz Otani</li>
      <li>槻澤 悠也</li>
      <li>山本 昌芳</li>
      <li>YUTO HIRANO</li>
      <li>Daisuke ODE</li>
      <li>松尾 恵吾</li>
      <li>ぴよぴよ</li>
      <li>亀村 雄太</li>
      <li>山本 一二郎</li>
      <li>さいふぁ</li>
      <li>本宿 美智子</li>
      <li>Osamu Yazawa</li>
      <li>湯本 洋志</li>
      <li>山本 範彦</li>
      <li>德永 惇・遥</li>
      <li>ispace SA</li>
      <li>杉本雅明</li>
      <li>tmizusawa</li>
      <li>JunTokuyoshi</li>
      <li>渡邉 亜美</li>
      <li>永井 涼太</li>
      <li>光山 童夢</li>
      <li>佐々木 信秋</li>
      <li>Ryoya baba</li>
      <li>M.Satoshi</li>
      <li>伊藤真之</li>
      <li>Satoru Cross</li>
      <li>髙橋 はるな</li>
      <li>横山 幸太</li>
      <li>棚田 和玖</li>
      <li>岡本 しょうじ</li>
      <li>寛-真穂-由夏</li>
      <li>槙原 ありさ</li>
      <li>K.Fukutomi</li>
      <li>片山 典子</li>
      <li>片山 郁海・明子</li>
      <li>isamu☆kinue</li>
      <li>ONO Takuya</li>
    </ul>
  </section>
)

export default () => state => (
  <main>
    <div className="cover"></div>
    <Greeting />
    <Gold />
    <Silver />
    <Bronze />
    <Personal />
  </main>
)