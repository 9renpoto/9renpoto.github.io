webpackJsonp([1688827101210],{312:function(n,l){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2017-10-02-monorepo/index.md absPath of file >>> MarkdownRemark",html:'<h1>TL;DR</h1>\n<ul>\n<li>期待通りに動かない</li>\n</ul>\n<h2>npm or yarn</h2>\n<ul>\n<li>\n<p>npmClientを指定できるようだが、yarnを指定すると永遠にインストールが終わらない問題に出くわす</p>\n<ul>\n<li><a href="https://travis-ci.org/9renpoto/eslint-config/builds/281805776">https://travis-ci.org/9renpoto/eslint-config/builds/281805776</a></li>\n<li><code>concurrency=1</code> を指定するなど試すもretryしてやっと動く程度</li>\n<li>期待するportに接続できていない？</li>\n</ul>\n</li>\n<li>\n<p>npm v5</p>\n<ul>\n<li>何故かlernaを通してやると <code>dependencies</code> がrootに展開されず見つからない場合がある</li>\n<li>ディレクトリ直下でやると問題ない場合がある</li>\n<li>バグっている気持ち</li>\n</ul>\n</li>\n</ul>\n<h2>lerna bootstrap</h2>\n<ul>\n<li>\n<p>共通packageとは、本当はディレクトリ直下で行いたいができていないようにみえる</p>\n<ul>\n<li>lerna version 2.2.0</li>\n<li>結局複数installを求められるものがある？</li>\n<li>eslint</li>\n<li>typescript</li>\n<li>flow-bin</li>\n</ul>\n</li>\n</ul>\n<h2>まとめ</h2>\n<ul>\n<li>\n<p>原因は調べきれていないが、lernaが原因で使えていない問題はいろいろありそう</p>\n<ul>\n<li>issueは200以上ある</li>\n</ul>\n</li>\n<li>早めに地雷を踏んでおく</li>\n</ul>\n<p><img src="http://3.bp.blogspot.com/-R1W3888HcbU/V9ppr9A_NHI/AAAAAAAA9wE/CuzJ-JfOQz8Ht6w-jNN79_vh6-TeVOGNACLcB/s800/jirai_tanchiki_man.png" alt="image"></p>',frontmatter:{title:"複数環境構築のためにLernaを使う、が",date:"October 02, 2017"}}},pathContext:{path:"/entry/2017/10/02/monorepo/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---entry-2017-10-02-monorepo-fe19ee4fe487a870a4b8.js.map