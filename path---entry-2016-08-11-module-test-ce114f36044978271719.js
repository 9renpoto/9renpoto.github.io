webpackJsonp([0x9fc168dde751],{275:function(t,e){t.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2016-08-11-module-test/index.md absPath of file >>> MarkdownRemark",html:'<h1>TypeScriptでpower-assertを使いたい</h1>\n<p><a href="/blog/2016/06/23/typescript-module-test/">TypeScriptテストについて</a> 少し調べました。</p>\n<ul>\n<li><a href="https://github.com/9renpoto/ts/pull/31">https://github.com/9renpoto/ts/pull/31</a></li>\n</ul>\n<h2>原因</h2>\n<ul>\n<li>\n<p>TypeScriptがファイルパスを相対パスか絶対パスのどちらかで返す場合がある</p>\n<ul>\n<li><a href="https://github.com/Microsoft/TypeScript/blob/204f2c16c0d6ff851e4798c03a9646b625ac2bd7/src/compiler/core.ts#L821-L825">https://github.com/Microsoft/TypeScript/blob/204f2c16c0d6ff851e4798c03a9646b625ac2bd7/src/compiler/core.ts#L821-L825</a></li>\n</ul>\n</li>\n</ul>\n<h2>対策</h2>\n<ul>\n<li><a href="https://github.com/teppeis/typescript-simple/pull/47">https://github.com/teppeis/typescript-simple/pull/47</a></li>\n</ul>\n<h2>悩み</h2>\n<ul>\n<li><code>rootDir</code>, <code>outDir</code> の組み合わせで挙動が変わることを理解する必要がある</li>\n<li><code>rootDirs</code> が入る（TypeScript 2.0~)</li>\n</ul>',frontmatter:{title:"TypeScript with power-assert",date:"August 11, 2016"}}},pathContext:{path:"/entry/2016/08/11/module-test/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---entry-2016-08-11-module-test-ce114f36044978271719.js.map