<template><div><h3 id="mobilecheck-手机号校验" tabindex="-1"><a class="header-anchor" href="#mobilecheck-手机号校验"><span>mobileCheck 手机号校验</span></a></h3>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isnumber类型判断字符是不是纯数值" tabindex="-1"><a class="header-anchor" href="#isnumber类型判断字符是不是纯数值"><span>isNumber类型判断字符是不是纯数值</span></a></h3>
<blockquote>
<p>export declare function isNumber(value: string): boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isnullobject-判断字符是不是-空对象" tabindex="-1"><a class="header-anchor" href="#isnullobject-判断字符是不是-空对象"><span>isNullObject 判断字符是不是  空对象</span></a></h3>
<blockquote>
<p>export declare function isNullObject(value: Object): boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="身份证校验" tabindex="-1"><a class="header-anchor" href="#身份证校验"><span>身份证校验</span></a></h3>
<blockquote>
<p>export declare const idCardCheck: (value: string) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="邮箱校验" tabindex="-1"><a class="header-anchor" href="#邮箱校验"><span>邮箱校验</span></a></h3>
<blockquote>
<p>export declare const emailCheck: (value: string) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是浏览器内核" tabindex="-1"><a class="header-anchor" href="#判断是浏览器内核"><span>判断是浏览器内核</span></a></h3>
<blockquote>
<p>export declare const checkBrowser: () =&gt; string;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是大写字母" tabindex="-1"><a class="header-anchor" href="#判断是否是大写字母"><span>判断是否是大写字母</span></a></h3>
<blockquote>
<p>export declare const checkCapitalLetter: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是中文" tabindex="-1"><a class="header-anchor" href="#判断是否是中文"><span>判断是否是中文</span></a></h3>
<blockquote>
<p>export declare const checkChinese: (data: string) =&gt; boolean</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是中文-数字或字母" tabindex="-1"><a class="header-anchor" href="#判断是否是中文-数字或字母"><span>判断是否是中文，数字或字母</span></a></h3>
<blockquote>
<p>export declare const checkChineseNumberLettter: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是终端类型-值有ios-android-ipad" tabindex="-1"><a class="header-anchor" href="#判断是终端类型-值有ios-android-ipad"><span>判断是终端类型,值有ios,android,iPad</span></a></h3>
<blockquote>
<p>export declare const checkIosAndroidIpad: () =&gt; string;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是字母" tabindex="-1"><a class="header-anchor" href="#判断是否是字母"><span>判断是否是字母</span></a></h3>
<blockquote>
<p>export declare const checkLetter: (data: any) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="checklowercaseletter-判断是否全部是小写字母" tabindex="-1"><a class="header-anchor" href="#checklowercaseletter-判断是否全部是小写字母"><span>checkLowercaseLetter 判断是否全部是小写字母</span></a></h3>
<blockquote>
<p>export declare const checkLowercaseLetter: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是数字" tabindex="-1"><a class="header-anchor" href="#判断是否是数字"><span>判断是否是数字</span></a></h3>
<blockquote>
<p>export declare const checkNum: (data: any) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是字母或数字" tabindex="-1"><a class="header-anchor" href="#判断是否是字母或数字"><span>判断是否是字母或数字</span></a></h3>
<blockquote>
<p>export declare const checkNumOrLetter: (data: string) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断是否是正确的网址" tabindex="-1"><a class="header-anchor" href="#判断是否是正确的网址"><span>判断是否是正确的网址</span></a></h3>
<blockquote>
<p>export declare const checkUrl: (url: string) =&gt; boolean;</p>
</blockquote>
<p><strong>参数</strong></p>
<p><code v-pre>String</code></p>
<p><strong>返回</strong></p>
<p><code v-pre>Boolean</code></p>
<p><strong>例子</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"15512666996"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 true</span></span>
<span class="line"><span class="token function">mobileCheck</span><span class="token punctuation">(</span><span class="token string">"369"</span><span class="token punctuation">)</span>  <span class="token comment">//返回布尔型 false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


