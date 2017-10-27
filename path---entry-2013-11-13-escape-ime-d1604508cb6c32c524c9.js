webpackJsonp([43674401110763],{258:function(n,a){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2013-11-13-plant-uml/index.md absPath of file >>> MarkdownRemark",html:'<h1>PlantUML</h1>\n<p>これから設計をはじめます、という時に\n今までは小さな機能では、スキーマの設計から始めてしまっていたのですが。</p>\n<p>久々に「クラス図を書いてみよう」という話になり\nどう書こうとなったのでメモ。</p>\n<p><img src="http://plantuml.sourceforge.net/logoc.png" alt="image"></p>\n<p>CUIで書けるのが最高です。</p>\n<p>依存関係をテキストベースのみで記述できるので非常に助かりました。</p>\n<p>図の綺麗さなどを意識せず関係を記述することに集中できるのが魅力。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">wget</span> http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -O plantuml.jar\njava -jar <span class="token string">&quot;plantuml.jar&#x306E;&#x30D1;&#x30B9;&quot;</span> <span class="token punctuation">[</span>option<span class="token punctuation">]</span> &#x5165;&#x529B;&#x30D5;&#x30A1;&#x30A4;&#x30EB; <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>で入力ファイルを目的のUMLを生成します。</p>\n<p>Graphvizが必要なのでインストールしておきます\nmacはbrewだけで入りました。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>brew <span class="token function">install</span> graphviz\n</code></pre>\n      </div>\n<p>これだけで使えます。</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code>@startuml\n  class Bugs {\n<span class="token code keyword">    -bug_id</span>\n<span class="token code keyword">    -description</span>\n<span class="token code keyword">    -created_at</span>\n  }\n\n  class Comments {\n<span class="token code keyword">    -comment_id</span>\n<span class="token code keyword">    -bug_id</span>\n<span class="token code keyword">    -auther</span>\n  }\n\n  class Auther {\n<span class="token code keyword">    -id</span>\n<span class="token code keyword">    -name</span>\n  }\n\n  Bugs --<span class="token italic"><span class="token punctuation">*</span> Comments\n  Auther --<span class="token punctuation">*</span></span> Comments\n@enduml\n</code></pre>\n      </div>\n<p><img src="https://dl.dropboxusercontent.com/u/9060848/PlantUML/PlantUML.png" alt="sample"></p>\n<p>便利。</p>\n<h2>参考</h2>\n<ul>\n<li><a href="https://abicky.net/2012/10/16/093737/">https://abicky.net/2012/10/16/093737/</a></li>\n<li><a href="http://yohshiy.blog.fc2.com/blog-entry-152.html">http://yohshiy.blog.fc2.com/blog-entry-152.html</a></li>\n</ul>\n<h2>GUI関連</h2>\n<p>Officeなどを使って作っても良いのですが、\n専用のツールもメモ。</p>\n<h3>astah*</h3>\n<p><img src="http://astah-cdn2.change-vision.com/ja/images/stories/logo/astah_community_rectangle_m.png.pagespeed.ce.C-174ew438.png" alt="astah"></p>\n<p>Officeツール以外で関連ツールを探すと上位に出てくる<a href="http://astah.change-vision.com/ja/product/astah-community.html">良いツール</a>です。</p>\n<h3>Cacoo</h3>\n<p>今までなかなか縁がなく利用していなかったCacooですが、そういえば使ってなかったなと思い軽く使ってみました。</p>\n<p>ChromeAppなどで使えますし、お気軽さではダントツ。</p>',frontmatter:{title:"クラス図を簡単に - PlantUML",date:"November 13, 2013"}}},pathContext:{path:"/entry/2013/11/13/escape-ime/"}}}});
//# sourceMappingURL=path---entry-2013-11-13-escape-ime-d1604508cb6c32c524c9.js.map