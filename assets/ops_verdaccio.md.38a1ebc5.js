import{_ as a,c as s,o as n,a as e}from"./app.46b43e5d.js";const l="/assets/verdaccio_start.2e5241a2.png",c="/assets/verdaccio_site.b9ecc928.png",y=JSON.parse('{"title":"\u5C40\u57DF\u7F51\u5185\u642D\u5EFA npm \u79C1\u6709\u4ED3\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5728 node \u73AF\u5883\u4E0B\uFF0C\u5B89\u88C5 verdaccio","slug":"\u5728-node-\u73AF\u5883\u4E0B\uFF0C\u5B89\u88C5-verdaccio","link":"#\u5728-node-\u73AF\u5883\u4E0B\uFF0C\u5B89\u88C5-verdaccio","children":[]},{"level":2,"title":"\u542F\u52A8 verdaccio \u67E5\u770B","slug":"\u542F\u52A8-verdaccio-\u67E5\u770B","link":"#\u542F\u52A8-verdaccio-\u67E5\u770B","children":[]},{"level":2,"title":"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7F\u5C40\u57DF\u7F51\u4E0B\u53EF\u4EE5\u8BBF\u95EE","slug":"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7F\u5C40\u57DF\u7F51\u4E0B\u53EF\u4EE5\u8BBF\u95EE","link":"#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7F\u5C40\u57DF\u7F51\u4E0B\u53EF\u4EE5\u8BBF\u95EE","children":[]},{"level":2,"title":"\u4F7F\u7528 pm2 \u7BA1\u7406\u8FDB\u7A0B","slug":"\u4F7F\u7528-pm2-\u7BA1\u7406\u8FDB\u7A0B","link":"#\u4F7F\u7528-pm2-\u7BA1\u7406\u8FDB\u7A0B","children":[]},{"level":2,"title":"\u6CE8\u518C\u7528\u6237","slug":"\u6CE8\u518C\u7528\u6237","link":"#\u6CE8\u518C\u7528\u6237","children":[]},{"level":2,"title":"\u5207\u6362\u4ED3\u5E93\u6E90","slug":"\u5207\u6362\u4ED3\u5E93\u6E90","link":"#\u5207\u6362\u4ED3\u5E93\u6E90","children":[]},{"level":2,"title":"\u53D1\u5E03\u4ED3\u5E93","slug":"\u53D1\u5E03\u4ED3\u5E93","link":"#\u53D1\u5E03\u4ED3\u5E93","children":[]}],"relativePath":"ops/verdaccio.md"}'),p={name:"ops/verdaccio.md"},o=e(`<h1 id="\u5C40\u57DF\u7F51\u5185\u642D\u5EFA-npm-\u79C1\u6709\u4ED3\u5E93" tabindex="-1">\u5C40\u57DF\u7F51\u5185\u642D\u5EFA npm \u79C1\u6709\u4ED3\u5E93 <a class="header-anchor" href="#\u5C40\u57DF\u7F51\u5185\u642D\u5EFA-npm-\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a></h1><h2 id="\u5728-node-\u73AF\u5883\u4E0B\uFF0C\u5B89\u88C5-verdaccio" tabindex="-1">\u5728 node \u73AF\u5883\u4E0B\uFF0C\u5B89\u88C5 verdaccio <a class="header-anchor" href="#\u5728-node-\u73AF\u5883\u4E0B\uFF0C\u5B89\u88C5-verdaccio" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i -g verdaccio</span></span>
<span class="line"></span></code></pre></div><h2 id="\u542F\u52A8-verdaccio-\u67E5\u770B" tabindex="-1">\u542F\u52A8 verdaccio \u67E5\u770B <a class="header-anchor" href="#\u542F\u52A8-verdaccio-\u67E5\u770B" aria-hidden="true">#</a></h2><p><img src="`+l+'" alt="verdaccio\u542F\u52A8"></p><ul><li>\u7B2C\u4E00\u884C\u6307\u660E\u4E86 verdaccio \u7684\u914D\u7F6E\u6587\u4EF6</li><li>\u6700\u540E\u4E00\u884C\u662F\u6307\u53EF\u89C6\u5316\u5730\u5740\u548C\u7AEF\u53E3\u53F7\u3002 \u4E00\u822C\u662F <a href="http://localhost:4873/" target="_blank" rel="noreferrer">http://localhost:4873/</a></li></ul><p><img src="'+c+`" alt="verdaccio\u7F51\u9875"></p><h2 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7F\u5C40\u57DF\u7F51\u4E0B\u53EF\u4EE5\u8BBF\u95EE" tabindex="-1">\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7F\u5C40\u57DF\u7F51\u4E0B\u53EF\u4EE5\u8BBF\u95EE <a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F7F\u5C40\u57DF\u7F51\u4E0B\u53EF\u4EE5\u8BBF\u95EE" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">vim /Users/.../.config/verdaccio/config.yaml</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u672B\u5C3E\u6DFB\u52A0\u540E\u4FDD\u5B58</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">listen: 0.0.0.0:4873</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528-pm2-\u7BA1\u7406\u8FDB\u7A0B" tabindex="-1">\u4F7F\u7528 pm2 \u7BA1\u7406\u8FDB\u7A0B <a class="header-anchor" href="#\u4F7F\u7528-pm2-\u7BA1\u7406\u8FDB\u7A0B" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;">#\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">npm i pm2 -g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">pm2 start verdaccio</span></span>
<span class="line"></span></code></pre></div><p>\u5B8C\u6210\u540E\u4F7F\u7528 IP \u5730\u5740 + \u7AEF\u53E3\u53F7\uFF0C\u53EF\u4EE5\u67E5\u770B\u662F\u5426\u542F\u52A8\u6210\u529F\u3002</p><h2 id="\u6CE8\u518C\u7528\u6237" tabindex="-1">\u6CE8\u518C\u7528\u6237 <a class="header-anchor" href="#\u6CE8\u518C\u7528\u6237" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm adduser</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5207\u6362\u4ED3\u5E93\u6E90" tabindex="-1">\u5207\u6362\u4ED3\u5E93\u6E90 <a class="header-anchor" href="#\u5207\u6362\u4ED3\u5E93\u6E90" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">nrm add </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> http://</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">IP</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:4873</span></span>
<span class="line"><span style="color:#A6ACCD;">nrm use </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u53D1\u5E03\u4ED3\u5E93" tabindex="-1">\u53D1\u5E03\u4ED3\u5E93 <a class="header-anchor" href="#\u53D1\u5E03\u4ED3\u5E93" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u767B\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">npm login</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u53D1\u5E03</span></span>
<span class="line"><span style="color:#A6ACCD;">npm publish</span></span>
<span class="line"></span></code></pre></div>`,20),r=[o];function i(t,d,h,v,u,g){return n(),s("div",null,r)}const _=a(p,[["render",i]]);export{y as __pageData,_ as default};
