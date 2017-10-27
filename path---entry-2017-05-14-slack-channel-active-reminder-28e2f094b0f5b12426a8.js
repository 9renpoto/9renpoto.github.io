webpackJsonp([0xdef2a0699115],{291:function(n,a){n.exports={data:{site:{siteMetadata:{title:":-)",author:"github.com/9renpoto"}},markdownRemark:{id:"/home/travis/build/9renpoto/entry/src/pages/2017-05-14-slack-channel-active-reminder/index.md absPath of file >>> MarkdownRemark",html:'<h1>slack-channel-active-reminder</h1>\n<p>書いたもの： <a href="https://github.com/9renpoto/slack-channel-active-reminder">https://github.com/9renpoto/slack-channel-active-reminder</a></p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 547px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.45703839122486%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB3ElEQVQoz42R32tSYRjH/fdS0WOZP5iec3R6/HGcDApsLdtG7CYoum6b1rLIBSnVRZcNosGCmNNiLduNP9I0pkiiV5/enagWp6KLL9/n/T7P++F5eS2V6lu2nxep1+scfTxiMBgwGo2EDxmPx0yn079qMpnQ7Xbp9Xr0+1+Ms+XwQ51KtUanfUCldUz985BaeyB0zPvOkHefBnSHX/8JPi3Lj6Lf2KfVatNstuh0OjQbTdrd3n+DTMCD3afE/GeJeF2/KTnj5tqcSjYRYDEWQPvDzNbdDTNw/2WJ1XQQRbIR99hQpV86yTJhD5dmPSzFPYRddiOXJavoWXlRzpuB1VclFmJeblxWSMoSelAiLbvQA2JLPUzG72Y57Wd1PsBcSGQBiZTiIhUUG26umYF7YsOLmpuFlIdb2ZBxKSJbSaou4isr6NEIKVFfEDNp4QnVgSbbSCoSjwrrZuCb7cdoXgdRn51YwM7NjEpixkkkeI6UliTqVQl7JTSfg1mvHcV9hpDHSszn5GH+thlY23lCVlfFsxXDr+ohrs9rLKVU1PMyIaePrKiXxQdd0RUWk0IJ2ciebRXMwMbha8oPcpTv5777KRXvrFPMr1ESvVJhw/DyPeGbJ8qxt7vzE/gNEFlabBQBu1QAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="image"\n        title=""\n        src="/static/ae4c097abb91c72970d40e4f0e4bb752-708f2.png"\n        srcset="/static/ae4c097abb91c72970d40e4f0e4bb752-82dfe.png 148w,\n/static/ae4c097abb91c72970d40e4f0e4bb752-e95eb.png 295w,\n/static/ae4c097abb91c72970d40e4f0e4bb752-708f2.png 590w,\n/static/ae4c097abb91c72970d40e4f0e4bb752-84ebd.png 885w,\n/static/ae4c097abb91c72970d40e4f0e4bb752-f5275.png 1094w"\n        sizes="(max-width: 547px) 100vw, 547px"\n      />\n    </span>\n  </span>\n  </p>\n<p>slackの部屋は便利に増やしていけますが、\n同じような部屋が散乱したり、入ってみたものの活動が薄かったり様々あるので\n一定時間発言がない部屋に対してメッセージを送りつけるようなものを書いた。</p>\n<h2>Usage</h2>\n<p>Cronなどと合わせて仕込んで良いタイミングで発言がなさそうなところに対してメッセージを送る。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> CronJob <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;cron&apos;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>CronJob\n<span class="token keyword">const</span> Reminder <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;slack-channel-active-reminder&apos;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span>\n\n<span class="token keyword">const</span> reminder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Reminder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> job <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CronJob</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  cronTime<span class="token punctuation">:</span> <span class="token string">&apos;0 00 18 * * 1-5&apos;</span><span class="token punctuation">,</span>\n  onTick<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    reminder<span class="token punctuation">.</span><span class="token function">postRemindMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  start<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  timeZone<span class="token punctuation">:</span> <span class="token string">&apos;Asia/Tokyo&apos;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\njob<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>中身は <code>@slack/client</code> を使っているだけ。\n便利なAPIが多いと助かる。</p>\n<h2>追記</h2>\n<p><a href="https://github.com/9renpoto/slack-channel-active-reminder/pull/9">https://github.com/9renpoto/slack-channel-active-reminder/pull/9</a></p>\n<p><code>flow gen-flow-files</code> が良いものをだしてくれないため外す。\n早く1.0が待ち遠しい。</p>',frontmatter:{title:"アクティブでなさそうなSlackチャンネルをArchiveお願いする",date:"May 14, 2017"}}},pathContext:{path:"/entry/2017/05/14/slack-channel-active-reminder/"}}}});
//# sourceMappingURL=path---entry-2017-05-14-slack-channel-active-reminder-28e2f094b0f5b12426a8.js.map