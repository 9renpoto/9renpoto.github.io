webpackJsonp([21884448588786],{288:function(a,e){a.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2017-05-25-variable-default/index.md absPath of file >>> MarkdownRemark",html:'<h1>TL;DR</h1>\n<ul>\n<li><code>!default</code> で定義されているvariableは <code>@import</code> 前に定義する</li>\n</ul>\n<h2>_variable.scss</h2>\n<p>cssに変数があることはわかっていたつもりですが、上書きの用法がよくわかっておらず調べたので記録。</p>\n<div class="gatsby-highlight">\n      <pre class="language-scss"><code><span class="token property"><span class="token variable">$a</span></span><span class="token punctuation">:</span> #777 <span class="token statement keyword">!default</span>\n</code></pre>\n      </div>\n<p><code>$a</code> は、評価される前に同様の変数が定義されていれば上書きされないということ。\n定数として1ファイルに定義してもらえることが多いが、多段 <code>@import</code> などはどこまで遡って上書きなどできるのかなどは調べていない。</p>\n<h2>Refs</h2>\n<ul>\n<li><a href="https://qiita.com/yuku_t/items/0bebe541432cdfad4e14">https://qiita.com/yuku_t/items/0bebe541432cdfad4e14</a></li>\n</ul>',frontmatter:{title:"variableの範囲でscssをカスタマイズするときの注意",date:"May 25, 2017"}}},pathContext:{path:"/entry/2017/05/25/variable-default/"}}}});
//# sourceMappingURL=path---entry-2017-05-25-variable-default-4a9fb6128f5b715cb0ce.js.map