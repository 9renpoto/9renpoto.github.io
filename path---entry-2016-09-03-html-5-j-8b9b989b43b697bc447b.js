webpackJsonp([77653529926499],{278:function(n,i){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2016-09-03-html5j/index.md absPath of file >>> MarkdownRemark",html:'<h1>html5j</h1>\n<p><img src="http://events.html5j.org/conference/2016/9/assets/img/header/logo.svg" alt="logo"></p>\n<p><a href="http://events.html5j.org/conference/2016/9/">http://events.html5j.org/conference/2016/9/</a></p>\n<h2>基調講演</h2>\n<p>speaker: 中村修。</p>\n<p>大規模分散オペレーティングシステム。</p>\n<ul>\n<li>HDR</li>\n<li>WebはWeb以外に存在するデータ表現を全てできるべき</li>\n<li>\n<p>全てinternetの上にある発想</p>\n<ol>\n<li>Big Data</li>\n<li>AI</li>\n<li>IoT</li>\n</ol>\n</li>\n<li>Distributed Operating System</li>\n<li>\n<p>縦書きcss</p>\n<ul>\n<li>日本頑張ってる</li>\n</ul>\n</li>\n</ul>\n<p>speaker: 及川卓也。</p>\n<ul>\n<li>IE7担当してました</li>\n<li>\n<p>アプリケーションとしてのWeb</p>\n<ul>\n<li>API</li>\n<li>Web Components</li>\n<li>PWApps</li>\n<li>Service Worker</li>\n</ul>\n</li>\n<li>\n<p>モバイルデバイスの普及</p>\n<ul>\n<li>ニュースキュレーションアプリ</li>\n<li>AMP</li>\n<li>CMSやツールに依存している場合</li>\n</ul>\n</li>\n<li>今こそWebに再投資しよう</li>\n</ul>\n<h2>Reactの最新動向とベストプラクティス</h2>\n<p>speaker: @koba04</p>\n<ul>\n<li>Stateless Function Components(SFC)</li>\n<li>stateはviewに関係あるものだけで十分</li>\n<li>\n<p>React.PureComponent(v15.3.0~)</p>\n<ul>\n<li>ShoudComponentUpdateに類似（後で調べる）</li>\n</ul>\n</li>\n<li>\n<p><code>react-addons-perf</code></p>\n<ul>\n<li>計測ツール</li>\n</ul>\n</li>\n<li>\n<p>React.createClass</p>\n<ul>\n<li>徐々に非推奨</li>\n<li>React.Componentへ</li>\n</ul>\n</li>\n<li>\n<p>High Order Function</p>\n<ul>\n<li>関数型っぽい</li>\n<li><code>acdlite/recomponse</code></li>\n</ul>\n</li>\n<li>\n<p>stateの管理</p>\n<ul>\n<li>なるべく一箇所で管理</li>\n<li>Redux</li>\n<li>\n<p>Container Component</p>\n<ul>\n<li>更新処理・状態管理</li>\n<li>DOMを持たない</li>\n</ul>\n</li>\n<li>\n<p>Presentational Component</p>\n<ul>\n<li>Viewの構築を担う</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p>Componentをテストする</p>\n<ul>\n<li>TestUtil.renderInfoDocument</li>\n<li>shallowRender</li>\n<li><code>react-test-renderer</code></li>\n</ul>\n</li>\n<li>\n<p>開発をサポートするツール</p>\n<ul>\n<li><a href="https://github.com/zalmoxisus/redux-devtools-extension">https://github.com/zalmoxisus/redux-devtools-extension</a></li>\n<li><a href="https://github.com/storybooks/storybook">https://github.com/storybooks/storybook</a></li>\n</ul>\n</li>\n</ul>\n<h2>Service Worker Deep Dive</h2>\n<p>speaker: @horo</p>\n<p>slide: <a href="https://docs.google.com/presentation/d/19x3yi7Jn-6In5igGYfEiK0tBfNI290BAclT0AiqDj4Q/pub?slide=id.p">https://docs.google.com/presentation/d/19x3yi7Jn-6In5igGYfEiK0tBfNI290BAclT0AiqDj4Q/pub?slide=id.p</a></p>\n<p><a href="https://jakearchibald.github.io/isserviceworkerready/">https://jakearchibald.github.io/isserviceworkerready/</a></p>\n<ul>\n<li>\n<p>stream</p>\n<ul>\n<li><a href="https://docs.google.com/presentation/d/19x3yi7Jn-6In5igGYfEiK0tBfNI290BAclT0AiqDj4Q/pub?slide=id.g1641acac50_0_0">https://docs.google.com/presentation/d/19x3yi7Jn-6In5igGYfEiK0tBfNI290BAclT0AiqDj4Q/pub?slide=id.g1641acac50<em>0</em>0</a></li>\n<li>徐々に読み込んで処理できる</li>\n<li><code>ReadableStream</code></li>\n</ul>\n</li>\n<li><code>Unified Media Pipeline (android)</code></li>\n<li>\n<p>Usage</p>\n<ul>\n<li><code>rel=serviceworker</code></li>\n</ul>\n</li>\n</ul>\n<h2>The First Step to Angular 2</h2>\n<p>speaker: @laco0416</p>\n<ul>\n<li>\n<p>Official Packages</p>\n<ul>\n<li><code>@angular/core</code></li>\n<li><code>@angular/forms</code></li>\n<li><code>@angular/http</code></li>\n<li><code>@angular/router</code></li>\n</ul>\n</li>\n<li>\n<p>TypeScript</p>\n<ul>\n<li>常に正しいAPI</li>\n</ul>\n</li>\n<li>\n<p>API</p>\n<ul>\n<li><code>@component</code></li>\n<li><code>@input</code> / <code>@output</code></li>\n<li><code>@directive</code></li>\n<li><code>@pipe</code></li>\n<li><code>@NgModule</code></li>\n</ul>\n</li>\n</ul>\n<h2>Webパフォーマンス最前線</h2>\n<ul>\n<li>\n<p>High Performance Web User Interface</p>\n<ul>\n<li>パフォーマンスに対する優先度</li>\n<li>\n<p><code>RAIL</code> <a href="http://furoshiki.hatenadiary.jp/entry/2015/06/01/122537">http://furoshiki.hatenadiary.jp/entry/2015/06/01/122537</a></p>\n<ul>\n<li>Response</li>\n<li>Animation</li>\n<li>Idle</li>\n<li>Loa</li>\n</ul>\n</li>\n<li><code>transform: translateZ(0)</code></li>\n<li>凶悪</li>\n<li>\n<p>Web標準： <code>will-change: transform</code></p>\n<ul>\n<li>Reduce GPU Memory</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p>Scroll Performance</p>\n<ul>\n<li><code>&#x3C;img lazyload></code> :innocent:</li>\n<li><code>intersectionObserver</code></li>\n<li>throttle <a href="http://blog.tsumikiinc.com/article/20141125_javascript-event-throttle.html">http://blog.tsumikiinc.com/article/20141125_javascript-event-throttle.html</a></li>\n<li>TODO調べる</li>\n</ul>\n</li>\n<li>\n<p>Task Optimization</p>\n<ul>\n<li><a href="http://inside.pixiv.net/entry/2015/12/24/182248">http://inside.pixiv.net/entry/2015/12/24/182248</a></li>\n</ul>\n</li>\n</ul>\n<h2>Progressive Web Appsの導入基礎</h2>\n<ul>\n<li>\n<p>Push Notification</p>\n<ul>\n<li>service worker</li>\n<li>ユーザーの許諾を得て、メリットを提示してからやったほうが良い</li>\n</ul>\n</li>\n</ul>\n<p><a href="https://github.com/kuu/the-offline-cookbook-ja/blob/master/ja.md">https://github.com/kuu/the-offline-cookbook-ja/blob/master/ja.md</a></p>',frontmatter:{title:"#html5j 参加メモ",date:"September 03, 2016"}}},pathContext:{path:"/entry/2016/09/03/html5j/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---entry-2016-09-03-html-5-j-8b9b989b43b697bc447b.js.map