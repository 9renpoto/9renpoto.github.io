webpackJsonp([23523662639154],{315:function(n,l){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2017-10-19-spa-initial-state/index.md absPath of file >>> MarkdownRemark",html:'<h1>TL;DR</h1>\n<ul>\n<li>誰か初期状態を持っているのかはっきりする</li>\n<li>初期状態が定義されるタイミングを考慮する</li>\n</ul>\n<p>SPAの鬼門は <code>State</code> 管理であるといって過言はない。</p>\n<p>今回は初期状態について現在考えていることをメモする。</p>\n<h2>前提</h2>\n<ul>\n<li>URLはRestとする</li>\n<li>ページ内から幾つかのAPIにアクセスする</li>\n<li>内部は複数のURLからなるSPAで構成されている</li>\n<li>\n<p>自分が設けている前提</p>\n<ul>\n<li>同一URLを表示したときには同一のAPIリクエストが発行されるべきである</li>\n<li>または期待される結果が同一である（後述）</li>\n</ul>\n</li>\n<li>\n<p>APIリクエストの組み立てに必要な状態</p>\n<ul>\n<li><code>location.href</code></li>\n<li>初期状態</li>\n</ul>\n</li>\n</ul>\n<h2>例</h2>\n<ul>\n<li>\n<p><a href="https://www.airbnb.com/s/paris/all">https://www.airbnb.com/s/paris/all</a></p>\n<ul>\n<li>parisの宿を探す、一覧が出て来る</li>\n<li>ただ、このURLには <strong>暗黙的に今日以降</strong> という日付範囲が適応されている</li>\n</ul>\n</li>\n<li>\n<p><a href="https://www.airbnb.com/s/paris/all?checkin=2017-10-26&#x26;checkout=2017-10-28">https://www.airbnb.com/s/paris/all?checkin=2017-10-26&#x26;checkout=2017-10-28</a></p>\n<ul>\n<li>checkin, checkoutの範囲を指定する</li>\n<li>カレンダーに適応した日付の範囲と、その範囲内で検索できた対象の宿が表示される</li>\n</ul>\n</li>\n</ul>\n<h2>SPAと状態</h2>\n<p>airbnbのようなカレンダーのような絞込みを提供している機能のことを考える。</p>\n<ul>\n<li>\n<p>SPAが初期状態を持つ場合</p>\n<ul>\n<li>初期状態はJavaScriptがダウンロードされた際に決まる（今回は遅延で初期状態を定義することを除く）</li>\n</ul>\n</li>\n<li>\n<p>URLとSPAの状態が乖離する場合を考える</p>\n<ul>\n<li>カレンダーの操作をしているが確定処理を行っていない</li>\n<li>画面には途中経過が表示されている（SPAのstateは更新されている）</li>\n</ul>\n</li>\n<li>\n<p>初期状態がURLにあるとする場合</p>\n<ul>\n<li>SPAに流入しJavaScriptがダウンロードされたタイミングと同一とは限らない</li>\n<li>上記の場合、期待しない初期状態からクエリを発行するため期待と矛盾する</li>\n</ul>\n</li>\n</ul>\n<h2>状態の整合性を取る</h2>\n<ul>\n<li>\n<p>遷移をした場合に状態の整合性をとるactionを <code>onUpdate</code> に書く場合</p>\n<ul>\n<li>locationを引数として状態更新のアクションがもう1回Fluxを回る</li>\n<li><code>upUpdate</code> で再度整合性チェック、必要があればデータ更新</li>\n</ul>\n</li>\n<li>\n<p>不必要なURLとstateの整合性を取るための再帰</p>\n<ul>\n<li>不採用</li>\n</ul>\n</li>\n</ul>\n<h2>考えた選択肢</h2>\n<ol>\n<li>検索条件をサーバから受け取り、検索条件表示と結果の乖離をなくす</li>\n<li>初期状態の定義をURLから生成できるよう、参照する状態の初期化を遅延する</li>\n</ol>\n<p>reduxの場合、後者の方法はわからなかった。</p>\n<h2>まとめ</h2>\n<p>日本語難しい。</p>\n<p>Happy Hacking!</p>\n<p><img src="https://media.giphy.com/media/rSdzP7VZgI80w/giphy.gif" alt="image"></p>',frontmatter:{title:"SPAとInitial State",date:"October 18, 2017"}}},pathContext:{path:"/entry/2017/10/18/spa-initial-state/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---entry-2017-10-18-spa-initial-state-d7c8f4f2c9fd8652fffa.js.map