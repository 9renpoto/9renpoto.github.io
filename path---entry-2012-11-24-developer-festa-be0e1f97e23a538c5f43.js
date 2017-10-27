webpackJsonp([0xc4f31bfa978c],{251:function(n,l){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2012-11-24-developer-festa/index.md absPath of file >>> MarkdownRemark",html:'<h1>Python Developer Festa参加してきたので、そのメモ</h1>\n<h2>Cloudera Impalaについて</h2>\n<p>@shiumachiさんより。</p>\n<h3>Impalaとは</h3>\n<ul>\n<li>\n<p>Clouderaが開発した低レイテンシ・分析特化型のクエリ実行基盤</p>\n<ul>\n<li>google Dremel, Google F1などにインスパイアされて開発された</li>\n</ul>\n</li>\n<li>データサイエンティストが使うことを想定している</li>\n<li>Hadoopはクエリの内容がメモリーに乗っからなかった場合、HDDに逃げちゃう</li>\n<li>Impalaはオンメモリー上で頑張ろうとする</li>\n</ul>\n<h4>Impala support状況</h4>\n<h5>02時点</h5>\n<ul>\n<li>Trevni, RCFileのサポートは現状まだ、今後に対応予定</li>\n<li>Hiveで出来ることは、基本的にImpalaでは出来ないと思ってよい</li>\n</ul>\n<h3>なぜ開発されたのか</h3>\n<p>Hadoop(Map Reduce)だと高レイテンシで、すぐに結果が欲しくても処理に時間がかかる。</p>\n<p>Hiveのようで手軽に使えるSQLのインターフェイスをもち、かつ低レイテンシエンジンが欲しかったからです。</p>\n<h3>MapReduceとは</h3>\n<ul>\n<li>\n<p>Apache MapReduceとは</p>\n<ul>\n<li>バッチ処理を分散して行うシステム</li>\n</ul>\n</li>\n<li>\n<p>Apache Hive</p>\n<ul>\n<li>SQLライクに書ける</li>\n</ul>\n</li>\n<li>\n<p>MapReduceの問題</p>\n<ul>\n<li>レイテンシが高い</li>\n<li>小さいキューを出しても数十秒時間かかる</li>\n</ul>\n</li>\n</ul>\n<h3>よくある質問</h3>\n<h4>QもうHiveいらないんじゃない</h4>\n<ul>\n<li>定期的に実行を行うクエリなどはHiveのほうが適しているのではないか</li>\n</ul>\n<h4>Qimpalaが落ちたらどうするの</h4>\n<ul>\n<li>クエリが全部こけます</li>\n<li>\n<p>JOINのサイズ制限あるの</p>\n<ul>\n<li>あります</li>\n</ul>\n</li>\n</ul>\n<h2>Python in Webkit</h2>\n<p>@omo2009さんより。</p>\n<h3>Third party Tools</h3>\n<ul>\n<li>\n<p>WebKit</p>\n<ul>\n<li>Buildbot</li>\n<li>Trac</li>\n</ul>\n</li>\n</ul>\n<h3>今回は <code>webkit-patch</code> について</h3>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># Submitting for review\nwebkit-patch post\n# Commiting a reviewd patch\n# Commit log &#x306F;&#x81EA;&#x52D5;&#x3067;&#x66F8;&#x304F;\nwebkit-patch land\n# Reverting specific version\nwebkit-patch rollout\n#</code></pre>\n      </div>\n<p>プロジェクト特有の問題を解決するために使っている。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>watchlist\nsuggest-reviewers\nsuggest-nominations\nBugzilla autocompletion\nIRC</code></pre>\n      </div>\n<ul>\n<li>誰にレビューしてもらえば良いかわからない</li>\n<li>誰にレビューしてもらったか忘れちゃう</li>\n<li>探すのに便利</li>\n</ul>\n<p>IRCでレビューを頼むと断られにくい。</p>\n<h2>Connpassについて</h2>\n<p>@lanMLewis, @ae35\n概要と技術について。</p>\n<h3>connpassとは</h3>\n<ul>\n<li>\n<p>BePROUDで運営しているイベント支援サイト</p>\n<ul>\n<li>2010/08 django dash</li>\n<li>djangoを使って48時間でサービスを作ろう</li>\n<li>既存のイベント支援サービス（ATND)使いにくいよね</li>\n<li>作ってみよう</li>\n<li>大事だと思ってること</li>\n<li>実生活のつながり</li>\n<li>共有・成長する</li>\n<li>イベントから広がるコミュニティ</li>\n</ul>\n</li>\n</ul>\n<h3>connpassで使われている技術</h3>\n<ul>\n<li>\n<p>サーバーサイド</p>\n<ul>\n<li>MySQL</li>\n<li>Redis</li>\n<li>Django</li>\n<li>Unix</li>\n<li>Nginx</li>\n<li>Gunicorn</li>\n</ul>\n</li>\n<li>\n<p>クライアントサイド</p>\n<ul>\n<li>CoffeeScript</li>\n<li>REQUIRE JS</li>\n<li>JavaScript怖い</li>\n</ul>\n</li>\n</ul>\n<h2>PHP Language Update</h2>\n<h3>PHP 5.5の目玉</h3>\n<ul>\n<li>\n<p>ジェネレートとコールーチン</p>\n<ul>\n<li>yieldキーワードの追加</li>\n</ul>\n</li>\n<li>foreachで変数分解だ</li>\n<li>empty()の括弧内に変数以外が指定可能に</li>\n<li>\n<p><code>finally</code></p>\n<ul>\n<li><code>try-catch-finally</code></li>\n<li>なぜ今までになかったのか</li>\n<li>fatal errorが発生すると <code>finaly</code> が呼ばれない</li>\n</ul>\n</li>\n</ul>\n<p>Pythonでお仕事している人が日本にもたくさんいて嬉しいです。</p>\n<p>発表者のみなさまおつかれさまでした。</p>',frontmatter:{title:"Python Developer Festa 参加してきました",date:"November 24, 2012"}}},pathContext:{path:"/entry/2012/11/24/developer-festa/"}}}});
//# sourceMappingURL=path---entry-2012-11-24-developer-festa-be0e1f97e23a538c5f43.js.map