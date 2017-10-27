webpackJsonp([0xc8f07455eada],{283:function(n,a){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2016-11-13-nodefest-2016/index.md absPath of file >>> MarkdownRemark",html:'<h1>参加メモ</h1>\n<h2>Building Interactive npm Command Line Modules</h2>\n<ul>\n<li>\n<p>arguments parsing</p>\n<ul>\n<li>200種以上のpackage</li>\n</ul>\n</li>\n<li>\n<p>yargs</p>\n<ul>\n<li><code>.help()</code> 便利</li>\n<li>Interactiveなオプションを宣言的に記述できる</li>\n</ul>\n</li>\n</ul>\n<p><a href="https://lrlna.github.io/nodefest-2016/#1">https://lrlna.github.io/nodefest-2016/#1</a></p>\n<h2>Famicom programming with JavaScript</h2>\n<ul>\n<li>backgroundの背景を替えるためにはfor-loop4回</li>\n</ul>\n<h2>GraphQL for the RESTful crowd</h2>\n<p><a href="https://github.com/barakchamo">https://github.com/barakchamo</a></p>\n<ul>\n<li>\n<p>graph QL</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">user</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\nid<span class="token punctuation">,</span>\nfirst_name\nlast_name\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>fragment</li>\n</ul>\n<h2>The Seif Project</h2>\n<ul>\n<li>webの問題はpassword, 簡単に盗まれる</li>\n<li><code>Seif Project</code> の中ではカギ認証</li>\n<li>seifnode</li>\n<li><a href="https://github.com/paypal/seifnode">https://github.com/paypal/seifnode</a></li>\n<li><a href="https://github.com/paypal/seif-protocol">https://github.com/paypal/seif-protocol</a></li>\n<li><a href="http://www.seif.place/">http://www.seif.place/</a></li>\n</ul>\n<h2>Why to Standardize your READMEs</h2>\n<ul>\n<li><a href="https://github.com/RichardLitt/standard-readme">https://github.com/RichardLitt/standard-readme</a></li>\n</ul>\n<h2>Vue.js 2.0サーバサイドレンダリング</h2>\n<ul>\n<li>レンダラ</li>\n<li>ハイドレーション</li>\n<li>コンテキスト</li>\n<li>バンドリング</li>\n</ul>\n<p>サンプル <a href="https://github.com/vuejs/vue-hackernews-2.0">https://github.com/vuejs/vue-hackernews-2.0</a></p>\n<h2>React + Reduxを使った大規模商用サービスの開発</h2>\n<ol>\n<li>\n<p>Transition</p>\n<ul>\n<li>\n<p>react-router</p>\n<ul>\n<li><code>onEnter</code>, 認証認可</li>\n<li><code>replaceState</code> を使う</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p>Code Splitting</p>\n<ul>\n<li>webpack <code>require.ensure</code></li>\n<li><a href="https://github.com/richardscarrott/require-error-handler-webpack-plugin">https://github.com/richardscarrott/require-error-handler-webpack-plugin</a></li>\n</ul>\n</li>\n<li>\n<p>SSR</p>\n<ul>\n<li>Reactそのものは別に遅くない</li>\n<li>\n<p>Solution</p>\n<ol>\n<li>\n<p>Partial Rendering</p>\n<ul>\n<li>firstViewだけSSR</li>\n</ul>\n</li>\n</ol>\n</li>\n<li>Composite Rendering</li>\n</ul>\n</li>\n</ol>\n<h2>PostCSS: Build your own CSS processor</h2>\n<ul>\n<li>reworkcssが元になっている</li>\n</ul>\n<h2>JavaScriptによる並列処理：共有メモリとロック</h2>\n<p><a href="https://speakerdeck.com/chikoski/20161113-nodefest">https://speakerdeck.com/chikoski/20161113-nodefest</a></p>\n<p>@chikoski</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// &#x63D0;&#x6848;&#x4E2D;..</span>\nwindow<span class="token punctuation">.</span><span class="token function">setImmidiate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">doTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// &#x5225;thread&#x3067;&#x5B9F;&#x884C;&#x3057;&#x305F;&#x3044;js&#x3092;&#x6307;&#x5B9A;&#x3059;&#x308B;</span>\n<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token string">&apos;worker.js&apos;</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code>arrayBuffer</code> はポインタ渡し可能になった => <code>SharedArrayButter</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">// &#x5272;&#x308A;&#x8FBC;&#x307E;&#x308C;&#x306A;&#x3044;&#x51E6;&#x7406;&#x306E;&#x8A18;&#x8FF0;</span>\nAtomics\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>Atomics<span class="token punctuation">.</span>wake\nAtomics<span class="token punctuation">.</span>wait\n</code></pre>\n      </div>',frontmatter:{title:"nodefest 2016 参加メモ",date:"November 13, 2016"}}},pathContext:{path:"/entry/2016/11/13/nodefest/"}}}});
//# sourceMappingURL=path---entry-2016-11-13-nodefest-e1617b5427509c84cb89.js.map