webpackJsonp([0xc7c4445ecbdb9000],{"./node_modules/json-loader/index.js!./.cache/json/entry-2012-09-13-python-install.json":function(n,t){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2012-09-13-python-install/index.md absPath of file >>> MarkdownRemark",html:'<h1>first Python</h1>\n<p>Pyconに参加しようと思ったんですが、Python素人のボクはまず環境構築から。</p>\n<h2>Pythonのversion管理</h2>\n<p>Pythonはpythonbrew+virtualenvで環境を作るのが良いらしいので、言われるがままに環境作ってみます。</p>\n<h2>pythonbrewの環境構築</h2>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>curl -kLO https://github.com/utahta/pythonbrew/raw/master/pythonbrew-install\nchmod +x pythonbrew-install\n./pythonbrew-install</code></pre>\n      </div>\n<p>pythonbrewの環境変数を通す\nzshの場合でも以下の内容を書くらしい。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>[[ -s $HOME/.pythonbrew/etc/bashrc ]] && source $HOME/.pythonbrew/etc/bashrc\n\npythonbrew list -k # インストールできるversion確認\npythonbrew update # pythonbrewのupdate</code></pre>\n      </div>\n<p>2系と3系の環境構築。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>pythonbrew install 2.7.2\npythonbrew switch 2.7.2\n\npythonbrew install 3.2\npythonbrew switch 3.2</code></pre>\n      </div>\n<p>virtualenvの環境はまた今度する。</p>',frontmatter:{title:"python install",date:"September 13, 2012"}}},pathContext:{path:"/entry/2012/09/13/python-install/"}}}});
//# sourceMappingURL=path---entry-2012-09-13-python-install-beeee1e4f93ad8fb0bce.js.map