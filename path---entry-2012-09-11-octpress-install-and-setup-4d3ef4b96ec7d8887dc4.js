webpackJsonp([0xf529628a2ea1],{249:function(n,t){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2012-09-11-octpress-install-and-setup/index.md absPath of file >>> MarkdownRemark",html:'<h1>octpress試す</h1>\n<p>Octpressの利用を始めたので、簡単にインストール方法と設定、使い方などをメモ。</p>\n<h2>github pageの初期化</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">mkdir</span> username.github.com\n<span class="token function">cd</span> username.github.com\n<span class="token function">git</span> init\n\n<span class="token function">touch</span> README.md\n<span class="token function">git</span> add README.md\n<span class="token function">git</span> commit -m <span class="token string">&apos;first commit&apos;</span>\n\n<span class="token function">git</span> remote add origin git@GitHub.com:username/username.github.com.git\n<span class="token function">git</span> push -u origin master\n</code></pre>\n      </div>\n<h3>octpressのインストール</h3>\n<p>先ほど作成した <em>username.github.com</em> と同じ階層にoctpressをcloneする。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>git clone git://github.com/imathis/octopress.git octopress\n\ncd octopress\ngem install bundler\n\nbundle install\nRake setup_github_pages\n\nRake generate\nrake deploy\n\n# 2&#x3064;&#x4E00;&#x5EA6;&#x306B;&#x3059;&#x308B;\n# Rake gen_deploy</code></pre>\n      </div>\n<h3>記事投稿</h3>\n<p>記事の作成もコマンド1つ\nタイトルは英語で。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>rake new_post[&quot;my-new-page&quot;]\n# zsh&#x306F;&#x4EE5;&#x4E0B;&#x306E;&#x3088;&#x3046;&#x306B;&#x66F8;&#x304F;\nrake new_post\\[&quot;my-new-page&quot;\\]</code></pre>\n      </div>\n<p>markdownの勉強にもなるし、GitHubとも仲良くなれるし、なかなかに良い仕組み。</p>\n<p>いろいろ勉強します。</p>\n<p>参考文献。</p>\n<ul>\n<li><a href="http://octopress.org/">http://octopress.org/</a></li>\n<li><a href="http://tokkonopapa.github.io/blog/2011/12/30/octopress-on-github-and-bitbucket/">http://tokkonopapa.github.io/blog/2011/12/30/octopress-on-github-and-bitbucket/</a></li>\n<li><a href="http://blog.glidenote.com/blog/2011/11/07/install-octopress-on-github/">http://blog.glidenote.com/blog/2011/11/07/install-octopress-on-github/</a></li>\n</ul>',frontmatter:{title:"octpress install and setup",date:"September 11, 2012"}}},pathContext:{path:"/entry/2012/09/11/octpress-install-and-setup/"}}}});
//# sourceMappingURL=path---entry-2012-09-11-octpress-install-and-setup-4d3ef4b96ec7d8887dc4.js.map