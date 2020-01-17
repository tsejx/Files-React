(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{224:function(t,e,n){"use strict";n.r(e);var a=n(0),_=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"setstate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setstate","aria-hidden":"true"}},[t._v("#")]),t._v(" setState")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("partialState：setState传入的第一个参数，对象或函数")])]),t._v(" "),n("li",[n("p",[t._v("_pendingStateQueue：当前组件等待执行更新的state队列")])]),t._v(" "),n("li",[n("p",[t._v("isBatchingUpdates：react用于标识当前是否处于批量更新状态，所有组件公用")])]),t._v(" "),n("li",[n("p",[t._v("dirtyComponent：当前所有处于待更新状态的组件队列")])]),t._v(" "),n("li",[n("p",[t._v("transcation：react的事务机制，在被事务调用的方法外包装n个waper对象，并一次执行：waper.init、被调用方法、waper.close")])]),t._v(" "),n("li",[n("p",[t._v("FLUSH_BATCHED_UPDATES：用于执行更新的waper，只有一个close方法")])]),t._v(" "),n("li",[n("p",[t._v("1.将setState传入的partialState参数存储在当前组件实例的state暂存队列中。")])]),t._v(" "),n("li",[n("p",[t._v("2.判断当前React是否处于批量更新状态，如果是，将当前组件加入待更新的组件队列中。")])]),t._v(" "),n("li",[n("p",[t._v("3.如果未处于批量更新状态，将批量更新状态标识设置为true，用事务再次调用前一步方法，保证当前组件加入到了待更新组件队列中。")])]),t._v(" "),n("li",[n("p",[t._v("4.调用事务的waper方法，遍历待更新组件队列依次执行更新。")])]),t._v(" "),n("li",[n("p",[t._v("5.执行生命周期componentWillReceiveProps。")])]),t._v(" "),n("li",[n("p",[t._v("6.将组件的state暂存队列中的state进行合并，获得最终要更新的state对象，并将队列置为空。")])]),t._v(" "),n("li",[n("p",[t._v("7.执行生命周期componentShouldUpdate，根据返回值判断是否要继续更新。")])]),t._v(" "),n("li",[n("p",[t._v("8.执行生命周期componentWillUpdate。")])]),t._v(" "),n("li",[n("p",[t._v("9.执行真正的更新，render。")])]),t._v(" "),n("li",[n("p",[t._v("10.执行生命周期componentDidUpdate。")])])]),t._v(" "),n("h1",{attrs:{id:"三-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三-总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 三.总结")]),t._v(" "),n("h2",{attrs:{id:"_1-钩子函数和合成事件中："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-钩子函数和合成事件中：","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.钩子函数和合成事件中：")]),t._v(" "),n("p",[t._v("在"),n("code",[t._v("react")]),t._v("的生命周期和合成事件中，"),n("code",[t._v("react")]),t._v("仍然处于他的更新机制中，这时"),n("code",[t._v("isBranchUpdate")]),t._v("为true。")]),t._v(" "),n("p",[t._v("按照上述过程，这时无论调用多少次"),n("code",[t._v("setState")]),t._v("，都会不会执行更新，而是将要更新的"),n("code",[t._v("state")]),t._v("存入"),n("code",[t._v("_pendingStateQueue")]),t._v("，将要更新的组件存入"),n("code",[t._v("dirtyComponent")]),t._v("。")]),t._v(" "),n("p",[t._v("当上一次更新机制执行完毕，以生命周期为例，所有组件，即最顶层组件"),n("code",[t._v("didmount")]),t._v("后会将"),n("code",[t._v("isBranchUpdate")]),t._v("设置为false。这时将执行之前累积的"),n("code",[t._v("setState")]),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"_2-异步函数和原生事件中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-异步函数和原生事件中","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.异步函数和原生事件中")]),t._v(" "),n("p",[t._v("由执行机制看，"),n("code",[t._v("setState")]),t._v("本身并不是异步的，而是如果在调用"),n("code",[t._v("setState")]),t._v("时，如果"),n("code",[t._v("react")]),t._v("正处于更新过程，当前更新会被暂存，等上一次更新执行后在执行，这个过程给人一种异步的假象。")]),t._v(" "),n("p",[t._v("在生命周期，根据JS的异步机制，会将异步函数先暂存，等所有同步代码执行完毕后在执行，这时上一次更新过程已经执行完毕，"),n("code",[t._v("isBranchUpdate")]),t._v("被设置为false，根据上面的流程，这时再调用"),n("code",[t._v("setState")]),t._v("即可立即执行更新，拿到更新结果。")]),t._v(" "),n("h2",{attrs:{id:"_3-partialstate合并机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-partialstate合并机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 3."),n("code",[t._v("partialState")]),t._v("合并机制")]),t._v(" "),n("p",[t._v("我们看下流程中"),n("code",[t._v("_processPendingState")]),t._v("的代码，这个函数是用来合并"),n("code",[t._v("state")]),t._v("暂存队列的，最后返回一个合并后的"),n("code",[t._v("state")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  _processPendingState: function (props, context) {\n\n\n\n    var inst = this._instance;\n\n\n\n    var queue = this._pendingStateQueue;\n\n\n\n    var replace = this._pendingReplaceState;\n\n\n\n    this._pendingReplaceState = false;\n\n\n\n    this._pendingStateQueue = null;\n\n\n\n \n\n\n\n    if (!queue) {\n\n\n\n      return inst.state;\n\n\n\n    }\n\n\n\n \n\n\n\n    if (replace && queue.length === 1) {\n\n\n\n      return queue[0];\n\n\n\n    }\n\n\n\n \n\n\n\n    var nextState = _assign({}, replace ? queue[0] : inst.state);\n\n\n\n    for (var i = replace ? 1 : 0; i < queue.length; i++) {\n\n\n\n      var partial = queue[i];\n\n\n\n      _assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);\n\n\n\n    }\n\n\n\n \n\n\n\n    return nextState;\n\n\n\n  },\n\n\n\n复制代码\n")])])]),n("p",[t._v("我们只需要关注下面这段代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" _assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);\n\n\n\n复制代码\n")])])]),n("p",[t._v("如果传入的是对象，很明显会被合并成一次：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Object.assign(\n\n\n\n  nextState,\n\n\n\n  {index: state.index+ 1},\n\n\n\n  {index: state.index+ 1}\n\n\n\n)\n\n\n\n复制代码\n")])])]),n("p",[t._v("如果传入的是函数，函数的参数preState是前一次合并后的结果，所以计算结果是准确的。")]),t._v(" "),n("h2",{attrs:{id:"_4-componentdidmount调用setstate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-componentdidmount调用setstate","aria-hidden":"true"}},[t._v("#")]),t._v(" 4."),n("code",[t._v("componentDidMount")]),t._v("调用"),n("code",[t._v("setstate")])]),t._v(" "),n("blockquote",[n("p",[t._v("在componentDidMount()中，你 可以立即调用setState()。它将会触发一次额外的渲染，但是它将在浏览器刷新屏幕之前发生。这保证了在此情况下即使render()将会调用两次，用户也不会看到中间状态。谨慎使用这一模式，因为它常导致性能问题。在大多数情况下，你可以 在constructor()中使用赋值初始状态来代替。然而，有些情况下必须这样，比如像模态框和工具提示框。这时，你需要先测量这些DOM节点，才能渲染依赖尺寸或者位置的某些东西。")])]),t._v(" "),n("p",[t._v("以上是官方文档的说明，不推荐直接在"),n("code",[t._v("componentDidMount")]),t._v("直接调用"),n("code",[t._v("setState")]),t._v("，由上面的分析："),n("code",[t._v("componentDidMount")]),t._v("本身处于一次更新中，我们又调用了一次"),n("code",[t._v("setState")]),t._v("，就会在未来再进行一次"),n("code",[t._v("render")]),t._v("，造成不必要的性能浪费，大多数情况可以设置初始值来搞定。")]),t._v(" "),n("p",[t._v("当然在"),n("code",[t._v("componentDidMount")]),t._v("我们可以调用接口，再回调中去修改"),n("code",[t._v("state")]),t._v("，这是正确的做法。")]),t._v(" "),n("p",[t._v("当state初始值依赖dom属性时，在"),n("code",[t._v("componentDidMount")]),t._v("中"),n("code",[t._v("setState")]),t._v("是无法避免的。")]),t._v(" "),n("h2",{attrs:{id:"_5-componentwillupdate-componentdidupdate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-componentwillupdate-componentdidupdate","aria-hidden":"true"}},[t._v("#")]),t._v(" 5."),n("code",[t._v("componentWillUpdate")]),t._v(" "),n("code",[t._v("componentDidUpdate")])]),t._v(" "),n("p",[t._v("这两个生命周期中不能调用"),n("code",[t._v("setState")]),t._v("。")]),t._v(" "),n("p",[t._v("由上面的流程图很容易发现，在它们里面调用"),n("code",[t._v("setState")]),t._v("会造成死循环，导致程序崩溃。")]),t._v(" "),n("h2",{attrs:{id:"_6-推荐使用方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-推荐使用方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 6.推荐使用方式")]),t._v(" "),n("p",[t._v("在调用"),n("code",[t._v("setState")]),t._v("时使用函数传递"),n("code",[t._v("state")]),t._v("值，在回调函数中获取最新更新后的"),n("code",[t._v("state")]),t._v("。")])])},[],!1,null,null,null);e.default=_.exports}}]);