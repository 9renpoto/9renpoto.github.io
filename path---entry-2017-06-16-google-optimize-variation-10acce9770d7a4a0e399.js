webpackJsonp([0xd58825023af2a800],{"./node_modules/json-loader/index.js!./.cache/json/entry-2017-06-16-google-optimize-variation.json":function(n,s){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2017-06-16-google-optimize-variation/index.md absPath of file >>> MarkdownRemark",html:'<h1>TL;DR</h1>\n<ul>\n<li>google optimizeで今適応されているテストは何か調べた</li>\n<li>テストの結果はfirst party cookie</li>\n<li><code>_gaexp</code>という名前で記録されている</li>\n<li><strong>規約は読んで自己責任で参照しましょう</strong></li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; z-index: -1; display: block; "\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 36.29629629629629%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdu4SD//xAAXEAADAQAAAAAAAAAAAAAAAAAQEiEi/9oACAEBAAEFAtNR/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFRABAQAAAAAAAAAAAAAAAAAAEGH/2gAIAQEABj8Cj//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExYYH/2gAIAQEAAT8hl3Vjo8C6f//aAAwDAQACAAMAAAAQh8//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QXZ//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAEAAgEFAAAAAAAAAAAAAAABABEhMUFRYZH/2gAIAQEAAT8QaIeIRm+YG98stWi+p//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="optimize"\n        title=""\n        src="/static/7d0cef4cad1f7abb7ce06dd8d7133de0-a7d6a.jpg"\n        srcset="/static/7d0cef4cad1f7abb7ce06dd8d7133de0-aa1b7.jpg 148w,\n/static/7d0cef4cad1f7abb7ce06dd8d7133de0-b937a.jpg 295w,\n/static/7d0cef4cad1f7abb7ce06dd8d7133de0-a7d6a.jpg 540w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  </p>\n<h2>軽く調べた結果</h2>\n<ul>\n<li>\n<p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=en#optimize">公開情報</a></p>\n<ul>\n<li><code>_gaexp</code>という名前で記録されている</li>\n<li>cookieはデフォルト90日保存</li>\n</ul>\n</li>\n</ul>\n<h2>おそらく操作しているところ</h2>\n<ul>\n<li><code>m[0]</code> は <code>experimentid</code></li>\n<li>\n<p><code>m[2]</code> がテストのパターンを表している</p>\n<ul>\n<li>cookieの一番最後のnumber</li>\n<li>これだけだと <code>variationid</code> としては使えないので何かと複合してユニークになっている</li>\n</ul>\n</li>\n<li><code>m[1]</code> はnumberだが何の値かはすぐにはわからなかった</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>Zg <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> c <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/GAX1\\.([^.]+).(.*)/</span><span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> d\n    a<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token punctuation">(</span>c<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"-"</span><span class="token punctuation">)</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token function">ia</span><span class="token punctuation">(</span>e<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> g <span class="token operator">=</span> e<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token function">ia</span><span class="token punctuation">(</span>e<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">"1"</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">uf</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">uf</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Og</span><span class="token punctuation">(</span><span class="token function">T</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">T</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token keyword">break</span> a\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      d <span class="token operator">=</span> <span class="token keyword">void</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span>\n        <span class="token keyword">var</span> h <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Qg</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> a<span class="token punctuation">.</span>qa<span class="token punctuation">,</span> a<span class="token punctuation">.</span>ha<span class="token punctuation">)</span><span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token punctuation">(</span>c<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"!"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        l <span class="token operator">&lt;</span> k<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n        l<span class="token operator">++</span>\n      <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> m <span class="token operator">=</span> k<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">uf</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span>\n          <span class="token punctuation">}</span>\n          <span class="token function">Ug</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> m<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Pg</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function">T</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> h\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Extra</h2>\n<ul>\n<li>\n<p><a href="https://stackoverflow.com/questions/44412241/is-it-possible-to-read-experimentid-and-variationid-in-javascript-with-google-op">stackoverflow</a></p>\n<ul>\n<li>ABテストとしてJavaScript \bが実行できるので、自分でユニークなIDを配信して実行されているテストを特定しましょう</li>\n<li>リバースエンジニアリングして危ない道を渡るよりも現実的</li>\n<li>ちゃんとABテストの記録は計測できます、そうgoogle analyticsならね！</li>\n</ul>\n</li>\n</ul>\n<p>Happy Hacking!</p>',frontmatter:{title:"google optimize を読む",date:"June 15, 2017"}}},pathContext:{path:"/entry/2017/06/16/google-optimize-variation/"}}}});
//# sourceMappingURL=path---entry-2017-06-16-google-optimize-variation-10acce9770d7a4a0e399.js.map