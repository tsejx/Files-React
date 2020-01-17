(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{219:function(t,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber","aria-hidden":"true"}},[t._v("#")]),t._v(" Fiber")]),t._v(" "),a("p",[t._v("Fiber 架构思想")]),t._v(" "),a("h2",{attrs:{id:"痛点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#痛点","aria-hidden":"true"}},[t._v("#")]),t._v(" 痛点")]),t._v(" "),a("p",[t._v("究其原因是浏览器是单线程，它将 GUI 描绘，时间器处理，事件处理，JavaScript 执行，远程资源加载统统放在一起。当做某件事，只有将它做完才能做下一件事。如果有足够的时间，浏览器是会对我们的代码进行编译优化（JIT）及进行热代码优化，一些 DOM 操作，内部也会对 Reflow 进行处理。 Reflow 是一个性能黑洞，很可能让页面的大多数元素进行重新布局。")]),t._v(" "),a("p",[t._v("浏览器的运作流程")]),t._v(" "),a("blockquote",[a("p",[t._v("渲染 -> tasks -> 渲染 -> tasks -> 渲染 -> tasks -> ...")])]),t._v(" "),a("h2",{attrs:{id:"原有架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原有架构","aria-hidden":"true"}},[t._v("#")]),t._v(" 原有架构")]),t._v(" "),a("p",[t._v("React 这个纯视图库可以分为三层架构。")]),t._v(" "),a("ul",[a("li",[t._v("虚拟 DOM 层：只负责描述结构与逻辑")]),t._v(" "),a("li",[t._v("内部组件层：负责组件的更新，ReactDOM.render、setState、forceUpdate 都是与它们打交道，能让你多次 setState，只执行一次真实的渲染，在适合的时机执行你的组件实例的生命周期钩子")]),t._v(" "),a("li",[t._v("底层渲染层：不同的显示介质有不同的渲染方法，比如说浏览器端，它使用元素节点、文本节点，在 Native 端，会调用 Object-C、Java 的 GUI，在 Canvas 中，有专门的 API 方法。")])]),t._v(" "),a("p",[t._v("虚拟 DOM 由 JSX 转译过来，JSX 的入口函数是 React.createElement，可操作空间不大，第三大的底层 API 也非常稳定，因此我们只能改变第二层。")]),t._v(" "),a("h2",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("p",[t._v("React v16 将内部组件层改为 Fiber 这种数据结构，因此它的架构名也改叫 Fiber 架构。Fiber 节点拥有 return、child 和 sibling 三个属性，分别对应父节点。")]),t._v(" "),a("p",[t._v("核心思想是任务拆分和协同，主动把执行权交给主线程，使主线程有时间空档处理其他高优先级任务。")]),t._v(" "),a("p",[t._v("当遇到进程阻塞的问题时，"),a("strong",[t._v("任务分割")]),t._v("、"),a("strong",[t._v("异步调用")]),t._v("和"),a("strong",[t._v("缓存策略")]),t._v("是三个显著的解决思路。")]),t._v(" "),a("p",[t._v("在 v16 之前，reconciliation 简单说就是一个自顶向下的递归算法，产出需要对当前 DOM 进行更新或替换的操作列表，一旦开始，会持续占用主线程，中断操作却不容易实现。当 JavaScript 长时间执行（如大量计算等），会阻塞样式计算、绘制等工作，出现页面脱帧现象。")]),t._v(" "),a("h2",{attrs:{id:"核心流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 核心流程")]),t._v(" "),a("p",[t._v("React 的核心流程可以分为两个部分：")]),t._v(" "),a("ul",[a("li",[t._v("reconciliation（调和，调度算法，也可称为 render）：\n"),a("ul",[a("li",[t._v("更新 state 与 props")]),t._v(" "),a("li",[t._v("调用生命周期钩子")]),t._v(" "),a("li",[t._v("生成 Virtual DOM\n"),a("ul",[a("li",[t._v("这里应该称为 Fiber Tree 更为符合")])])]),t._v(" "),a("li",[t._v("通过新旧 Virtual DOM 进行 diff 算法，获取 Virtual Change")]),t._v(" "),a("li",[t._v("确定是否需要重新渲染")])])]),t._v(" "),a("li",[t._v("commit：\n"),a("ul",[a("li",[t._v("如需要，则操作 DOM 节点更新")])])])]),t._v(" "),a("p",[a("strong",[t._v("问题")]),t._v("：随着应用变得越来越庞大，整个更新渲染的过程开始变得吃力，大量的组件渲染会导致主进程长时间被占用，导致一些动画或高频操作出现卡顿和掉帧的情况。而关键点，便是"),a("strong",[t._v("同步阻塞")]),t._v("。在之前的调度算法中，React 需要实例化每个类组件，生成一棵组件树，使用"),a("strong",[t._v("同步递归")]),t._v("的方式进行遍历渲染，而这个过程最大的问题就是无法"),a("strong",[t._v("暂停和恢复")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("解决方法")]),t._v("：解决同步阻塞的方法，通常有两种："),a("strong",[t._v("异步")]),t._v("与"),a("strong",[t._v("任务分割")]),t._v("。而 React Fiber 便是为了实现任务分割而诞生的。")]),t._v(" "),a("p",[a("strong",[t._v("简述")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("在 React v16 将调度算法进行了重构，将之前的 stack reconciler 重构成新版的 Fiber Reconciler，变成了具有链表和指针的"),a("strong",[t._v("单链表树遍历算法")]),t._v("。通过指针映射，每个单元都记录着遍历当下的上一步与下一步，从而使遍历变得可以被暂停和重启。")]),t._v(" "),a("li",[t._v("这里我理解为一种任务分割调度算法，主要是将原先同步更新渲染的任务分割成一个个独立的小任务单元，根据不同的优先级，将小任务分散到浏览器的空闲时间执行，充分利用主进程的事件循环机制。")])]),t._v(" "),a("p",[t._v("Fiber 这里可以具象为一个数据结构：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fiber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向第一个 child 节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向父节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("return "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向第一个兄弟节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("链表树遍历算法")]),t._v("：通过节点保存与映射，便能够随时地进行停止和重启，这样便能达到实现任务分割的基本前提")]),t._v(" "),a("ol",[a("li",[t._v("首先通过不断遍历子节点，到树末尾")]),t._v(" "),a("li",[t._v("开始通过 sibling 遍历兄弟节点")]),t._v(" "),a("li",[t._v("return 返回父节点，继续执行 2")]),t._v(" "),a("li",[t._v("直到 root 节点后，跳出遍历")])]),t._v(" "),a("p",[t._v("任务分割，React 中的渲染更新可以分成两个阶段：")]),t._v(" "),a("ul",[a("li",[t._v("reconciliation 阶段：vdom 的数据对比，是个适合拆分的阶段，比如对比一部分树后，先暂停执行个动画调用，待完成后再回来继续比对")]),t._v(" "),a("li",[t._v("commit 阶段：将 change list 更新到 DOM 上，并不适合拆分，才能保持数据与 UI 的同步。否则可能由于阻塞 UI 更新，而导致数据更新和 UI 不一致的情况")])]),t._v(" "),a("p",[t._v("分散执行：任务分割后，就可以把小任务单元分散到浏览器的空闲期间去排队执行，而实现的关键是两个新 API：requestIdleCallback 与 requestAnimationFrame")]),t._v(" "),a("ul",[a("li",[t._v("低优先级的任务交给 requestIdleCallback 处理，这是个浏览器提供的事件循环空闲期的回调函数，需要 pollyfill，而且拥有 deadline 参数，限制执行事件，以继续切分任务")]),t._v(" "),a("li",[t._v("高优先级的任务交给 requestAnimationFrame 处理")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类似于这样的方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestIdleCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("deadline")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当有空闲时间时，我们执行一个组件渲染")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把任务塞到一个个碎片时间中去")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deadline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeRemaning")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" deadline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("didTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nextComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nextComponent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("performWork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("优先级策略：文本框输入 > 本次调度结束需要完成的任务 > 动画过度 > 交互反馈 > 数据更新 > 不会显示但以防将来会显示的任务")]),t._v(" "),a("p",[t._v("React 17 全面开启 async rendering")]),t._v(" "),a("p",[t._v("因此 17 将会废弃多个生命周期钩子函数（will 系列）")]),t._v(" "),a("p",[t._v("原因是开启 async rendering，在 render 函数之前的所有函数，都有可能被执行多次")]),t._v(" "),a("p",[t._v("长期以来，原有的生命周期函数总是会诱惑开发者在 render 之前的生命周期函数做一些动作，现在这些动作还放在这些函数中的话，有可能会被调用多次，这肯定不是你想要的结果。")]),t._v(" "),a("p",[t._v("在 componentWillMount 执行网络请求，无论请求多快都无法赶上首次 render，而且 componentWillMount 在服务端渲染也会被调用，这样的 I/O 操作放在 componentDidMount 里更加合适。")]),t._v(" "),a("p",[t._v("在 Fiber 启用 async render 之后，更没有理由在 componentWillMount 里执行网络请求，因为 componentWillMount 可能会被调用多次，谁也不会希望无谓地多次调用多次网络请求吧。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("React Fiber 是对 React 来说是一次革命，解决了 React 项目严重依赖于手工优化的痛点，通过系统级别的时间调度，实现划时代的性能优化。鬼才般的 Fiber 结构，为异常边界提供了退路，也为限量更新提供了下一个起点。")]),t._v(" "),a("p",[t._v("React Fiber 最终提供的新功能主要是：")]),t._v(" "),a("ul",[a("li",[t._v("可切分，可中断任务")]),t._v(" "),a("li",[t._v("可重用各分阶段任务，且可以设置优先级")]),t._v(" "),a("li",[t._v("可以在父子组件任务间前进/后退切换任务")]),t._v(" "),a("li",[t._v("render 方法可以返回多元素（即可以返回数组）")]),t._v(" "),a("li",[t._v("支持异常边界处理异常")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("参考资料：")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/uDIknJ-WeUJnPR8S-HnTww",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Fiber 初探"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/37095662",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Fiber 架构"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/57346388?utm_source=wechat_session&utm_medium=social&utm_oi=58000878338048",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入 React Fiber 架构及源码"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzU0OTExNzYwNg==&mid=2247484359&idx=1&sn=442d4a8c5027b58b3decfa3882b87a85&chksm=fbb5880eccc20118186380d943f0f58000e3e8946405f83e70bc43fe9f7323dee6725e1a47ab&token=1033099811&lang=zh_CN&rd2werd=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈 React 16 框架架构 Fiber"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c052f95e51d4523d51c8300",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Fiber 那些事：深入解析新的协调算法"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5bed21546fb9a049e93c4bac",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 重要的一次重构：认识异步渲染架构 Fiber"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/54042084",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Fiber 在并发模式下的运行机制"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Zko4ih2F0-_861cDy1-1hw",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何及为什么 React Fiber 使用链表遍历组件树"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("React Fiber 源码分析\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c4edbede51d453aec64531c",target:"_blank",rel:"noopener noreferrer"}},[t._v("第一篇"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c501613f265da611e4e07a8",target:"_blank",rel:"noopener noreferrer"}},[t._v("第二篇：同步模式"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c515e58e51d45593c376bb4",target:"_blank",rel:"noopener noreferrer"}},[t._v("第三篇：异步状态"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c529aba518825261f7386f6",target:"_blank",rel:"noopener noreferrer"}},[t._v("第四篇：归纳总结"),a("OutboundLink")],1)])])])])])},[],!1,null,null,null);e.default=r.exports}}]);