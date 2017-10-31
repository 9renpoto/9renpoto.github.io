webpackJsonp([66047351476415],{312:function(n,t){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2017-10-10-component/index.md absPath of file >>> MarkdownRemark",html:'<h1>TL;DR</h1>\n<ul>\n<li>\n<p>Reactの場合</p>\n<ul>\n<li>見た目に必要なものはJSXだけで <code>Component</code> である必要はない</li>\n<li><code>Component</code> はライフサイクルを持つ</li>\n<li><code>Containers</code> はデータとの関係性を持つ</li>\n</ul>\n</li>\n</ul>\n<h2>Functional Component</h2>\n<ul>\n<li>Reactのドキュメントを読んでいると<code>React.Component</code>をextendsして書く必要があるのかと勘違い</li>\n<li>DOMの定義を書くことはJSXのsyntaxだけで完結されている</li>\n<li>\n<p>JSXで書かれたものとCSSを紐付けたもとを <strong>見た目</strong> と記述した場合</p>\n<ul>\n<li>見た目はどこのデータに紐付けられるか定かでないため、ライフサイクルを自身で定義するべきではない</li>\n<li>データを渡してtreeを構築するために必要な情報を返すだけでよい</li>\n<li><a href="https://github.com/9renpoto/style/pull/228">https://github.com/9renpoto/style/pull/228</a></li>\n</ul>\n</li>\n</ul>\n<h2>Component</h2>\n<ul>\n<li>ライフサイクルと見た目を紐付けることに集中する</li>\n<li>自分が実現したいライフサイクルを実現できるか考慮して、コンポーネントの大きさを決める</li>\n</ul>\n<h2>Containers</h2>\n<ul>\n<li>データを紐付けるだけ</li>\n<li>Reduxを使った場合、<code>Component</code> とは完全に疎結合に定義できる</li>\n<li>ライフサイクルを意識した必要なデータは <code>Component</code> の中にあるため、素直にデータを紐付ける</li>\n<li>初期状態の記述には気をつける</li>\n</ul>\n<h2>まとめ</h2>\n<ul>\n<li>世界はよく考えられている</li>\n</ul>\n<p><img src="https://media.giphy.com/media/RJXHcsfHNtpkY/giphy.gif" alt="img"></p>',frontmatter:{title:"ComponentとContainers",date:"October 10, 2017"}}},pathContext:{path:"/entry/2017/10/10/component/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---entry-2017-10-10-component-82cf63b2becabb8cc20c.js.map