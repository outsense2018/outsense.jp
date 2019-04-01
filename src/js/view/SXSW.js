import { h } from 'hyperapp' // @jsx h

const Introduction = () => (
  <section>
    <h1>News</h1>
    <h2>『ミライの月面基地』をSXSWに出展しました</h2>

    <p>
      先日、米テキサス州で行われたSXSW（展示会）での出展を終え、日本に帰国いたしました！<br />
      皆さまからご支援をいただいた結果、「【宇宙に挑め】『ミライの月面基地』を世界最大級のイベントで展示したい！」のプロジェクトにおいて、無事スタートアップの祭典「SXSW」にてプロトタイプの展示を行うことが叶いました。
    </p>
    <p>
      今回のクラウドファンディングは、一般の方に向けて大々的に行った初めてのプロジェクトで、目標金額を達成できたことに正直なところ驚きもありますし、何より応援してくださったみなさんに対して、大きな感謝の気持ちでいっぱいです。
    </p>
  </section>
)

const Gold = () => (
  <section className="sponsors">
    <h1>Gold</h1>
  </section>
)

const Silver = () => (
  <section className="sponsors">
    <h1>Silver</h1>
      <div>
        <a href="http://yspace-llc.com" target="_blank">
          <div class="yspace"></div>
          Yspace – Connect our space. Connect our hearts
        </a>
      </div>
      </section>
)

const Bronze = () => (
  <section className="sponsors">
    <h1>Bronze</h1>
  </section>
)

export default () => state => (
  <main>
    <div className="cover"></div>
    <Introduction />
    <Gold />
    <Silver />
    <Bronze />
  </main>
)