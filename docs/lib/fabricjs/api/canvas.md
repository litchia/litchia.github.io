---
title: 'Fabric.Canvas'
next: 'object | Fabric'
---

# Canvas

## 触发事件 (Fire Event)

``` js
 object:rotating  // 控制器：旋转
 object:scaling  // 控制器：放缩
 object:moving  // 拖拽：移动
 object:skewing  // 控制器：歪斜
 object:modified  // transform操作结束后，或者statefull为true的任何改变
 before:transform  // transform操作前

 path:created  // 绘画操作结束，并且路径被添加到画布

 selection:created  // 选区创建
 selection:updated  // 选区更改
 before:selection:cleared  // 组合取消之前
 selection:cleared  // 选区取消

 mouse:down
 mouse:move
 mouse:up
 mouse:down:before  // 鼠标点击之前的事件
 mouse:move:before  // 鼠标移动之前的事件
 mouse:up:before  // 鼠标松开之前的事件
 mouse:over  // 鼠标进入canvas
 mouse:out  // 鼠标离开canvas
 mouse:dblclick  // canvas上的双击

 event:dragenter  // 拖动进入
 event:dragover  // 拖动经过
 event:dragleave  // 拖动离开
 drop:before  // 拖动释放之前
 event:drop  // 拖动释放

```

## 继承事件 (Extend StaticCanvas)

``` js
 object:added  // 对象被添加
 object:removed  // 对象被删除
 
 canvas:cleared  // 画布被清空

 after:render  // 渲染结束
 before:render  // 渲染之前
```

## 成员 (Member)

``` js
 allowTouchScrolling: Boolean  // 当使用触摸屏，并且在canvas上拖拽时，浏览器是否可以滚动

 altActionKey: null|String  ('shiftKey')  // 替代对角值操作的按键： 'altKey', 'shiftKey', 'ctrlKey'。如果为 'null', 'none' 或其他字符串则禁用该功能

 altSelectionKey: null|String  // 在重叠的情况下替代选择的按键： 'altKey', 'shiftKey', 'ctrlKey'。此功能只适用于 preserveObjectStacking 为 true 。如果为 'null', 'none' 或其他字符串则禁用该功能

 backgroundColor: String|fabric.Pattern  // canvas背景颜色

 backgroundImage: fabric.Image  // canvas背景图片，需要通过fabric.StaticCanvas的setBackgroundColor()函数来设置 

 backgroundVpt: Boolean  (true)  // 如果设置为 false ，backgroundImage不受窗口变化的影响

 centeredKey: String  ('altKey')  // 替代居中变换操作的按键： 'altKey', 'shiftKey', 'ctrlKey'。如果为 'null', 'none' 或其他字符串则禁用该功能

 centeredRotation: Boolean  (false)  // 旋转原点  true: 中心; false: 左上角

 centeredScaling: Boolean  (false)  // 缩放原点  true: 中心; false: 左上角

 clipPath: fabric.Object  // 定义一个左上角的黑色裁剪区域，只有形状（shape)，没有描边（stroke）。cliPath会去掉控件controls，可以设置controlsAboveOverlay = true

 containerClass: String  // 最外层的 canvas-container 样式类

 controlsAboveOverlay: Boolean  // 控制器 controls 是否在覆盖图像上

 defaultCursor: String  ('default')  // canvas默认鼠标

 enablePointerEvents :Boolean  // true: PointerEvent; false: MouseEvent

 enableRetinaScaling: Boolean  (true)  // 画布按 devicePixelRatio 缩放，以便在视网膜屏幕上更好地呈现

 fireMiddleClick: Boolean  // canvas 是否可鼠标中击
 
 fireRightClick: Boolean  // canvas 是否可右击

 freeDrawingCursor: String  ('crosshair')  // 鼠标样式: 自由绘画

 hoverCursor: String  ('move')  // 鼠标样式: 对象hover

 imageSmoothingEnabled :Boolean  (true)  // 是否开启图像平滑，默认由浏览器开启

 includeDefaultValues: Boolean  (true)  // toObject / toDatalessObject 是否包含默认值。

 interactive: Boolean  (true)  // 不可更改！！    canvas是否可交互

 isDrawingMode: Boolean  // 绘画模式  创建fabric.Path

 moveCursor: String  ('move')  // 鼠标样式: 对象移动

 notAllowedCursor: String  ('not-allowed')  // 鼠标样式: 禁用操作对象控制角

 overlayColor: String|fabric.Pattern  // canvas 覆盖色，需要通过fabric.StaticCanvas的setOverlayColor()函数来设置

 overlayImage: fabric.Image  // canvas 覆盖图片，需要通过fabric.StaticCanvas的setOverlayImage()函数来设置

 overlayVpt: Boolean  (true)  // 如果设置为 false ，overlayImage不受窗口变化的影响

 perPixelTargetFind: Boolean  // 如果设置为 true ，只能通过点击对象本身才能选择，否则可以点击围框。

 preserveObjectStacking: Boolean  // 对象被选择时是否保留在当前层级。如果设置为 false ，对象会移到顶层

 renderOnAddRemove: Boolean  (true)  // 建议禁用！！   fabric.Collection.add、fabric.Collection.insertAt和fabric.Collection.remove、 fabric.StaticCanvas.moveTo、fabric.StaticCanvas.clear 等是否也应该重新渲染画布。当一次向画布添加/删除大量对象时，禁用此选项不会提高性能，因为渲染是排队并每帧执行一个。无论如何都建议禁用，建议 canvas.requestRenderAll()

 selection: Boolean  (true)  // 是否开启选区

 selectionBorderColor: String  ('rgba(255, 255, 255, 0.3)')  // 选区边框的颜色（通常比选区本身的颜色稍暗）

 selectionColor: String  ('rgba(100, 100, 255, 0.3)')  // 选区颜色

 selectionDashArray: Array  // 如果不为空，选区边框为虚线

 selectionFullyContained: Boolean  // 只有选区完全包含对象，才能选中

 selectionKey: String|Array  ('shiftKey')

 selectionLineWidth: Number  (1)  // 选区边框宽度

 skipOffscreen: Boolean  (true)  // 基于 vptCoords 和 object.aCoords, 不在当前视窗的对象不渲染。否则就算只有一个角，也会渲染。在canvas拥挤或使用平移或缩放时很有用。

 skipTargetFind: Boolean  // 不能点击选择，只能选区选择。如果已经选择了，将取消

 snapAngle: Number  // 不起作用！！   每次旋转锁定的角度，捕捉角度

 snapThreshold: null|Number  // 角度锁定的距离

 stateful: Boolean  // 对象的状态是否会被保存

 stopContextMenu: Boolean  // 是否禁用右击菜单
 
 svgViewportTransformation: Boolean  (true)  // 如果为 true，getSvgTransform()将会把 StaticCanvas 的 viewportTransform 应用到svg变换上，一个缩放的画布将会输出一个缩放的svg。

 targetFindTolerance: Number

 targets: Array.<fabric.Object>  // 跟踪鼠标事件的子目标（subtarget）

 uniformScaling: Boolean  (true)  // 是否可以将对象不成比例的变换一边

 uniScaleKey: String  ('shiftKey')  // 均匀缩放的按键，'altKey', 'shiftKey', 'ctrlKey'。如果为 'null', 'none' 或其他字符串则禁用该功能。如果 canvas.uniformScaling 为 true，按下则为 false

 viewportTransform: Array  // 视窗转换。
                           // 缩放 70% 并向右下平移 50，不倾斜: [0.7, 0, 0, 0.7, 50, 50];

 vptCoords  // 描述canvas元素的对于设计属性的拓展：tl,tr,bl,br。
```

## 方法 (Methods)

``` js
 initialize(el, optionsopt) → {Object}  // 构造函数

 __onMouseWheel(e)  // 鼠标滚轮方法

 _chooseObjectsToRender() → {Array}  // 将对象分成两组，一组立即渲染，另一组作为 activeGroup 渲染。

 _onDrop(e)  // 释放

 /**
  *  e: 事件对象
  *  target: 鼠标悬浮对象
  */
 _setCursorFromEvent(e, target)  // 根据鼠标的位置设置光标样式（不可用于Opera）

 absolutePan(point) → {fabric.Canvas}  // 平移视窗，为了将点放置在画布的左上角

 add(…object) → {Self}  // 将对象添加到集合、画布或组，然后渲染画布（如果 renderOnAddRemove 不是 false）。在组的情况下，不会对边界框进行更改。对象应该是fabric.Object 的实例（或继承自fabric.Object），强烈建议组不要使用此函数。您可以使用 add 方法添加一堆对象，但是您需要为 Group 类运行 addWithUpdate 调用。否则position/bbox 将是错误的
 
 bringForward(object, intersectingopt) → {fabric.Canvas}  // 如果某对象和另外一个对象有交集，设置 intersecting 为true可以提升该对象的层级让他处于上面

 bringToFront(object) → {fabric.Canvas}  // 将某对象移到最顶层

 calcOffset() → {fabric.Canvas}  // 计算 canvas 元素相对于 document 的偏移量。这个方法也依附于 window 的 'resize' 事件

 calcViewportBoundaries() → {Object}  // 使用当前 viewportTransform 计算画布 4 个角的位置。使用 absolute 坐标 (aCoords) 有助于确定对象何时在当前渲染视口中

 centerObject(object) → {fabric.Canvas}  // 使某对象居中

 centerObjectH(object) → {fabric.Canvas}  // 对象水平居中

 centerObjectV(object) → {fabric.Canvas}  // 对象垂直居中

 clear() → {fabric.Canvas}  // 清除 canvas 实例 (背景、对象等)

 clearContext(ctx) → {fabric.Canvas}  // 清除 context2D

 /**
  * callback: canvas实例为参数的回调函数
  * properties: canvas克隆时保留哪些属性
  */
 clone(callbackopt, propertiesopt)  // 克隆 canvas 实例
 
 cloneWithoutData(callbackopt)  // 克隆 canvas 实例而不克隆现有数据。这实际上复制了画布尺寸、剪辑属性等，但将数据留空（以便您可以使用自己的数据填充）

 complexity() → {Number}  // 返回 集合复杂度

 /**
  * deep: true：所有后代；
  *       false：只检查对象
  */
 contains(object, deepopt) → {Boolean}  // 如果集合包含一个对象，则返回true

 createSVGFontFacesMarkup(objects) → {String}

 createSVGRefElementsMarkup() → {String}

 discardActiveObject(e) → {fabric.Canvas}  // 取消当前活跃对象。

 dispose() → {fabric.Canvas}  // 清空 canvas 对象，并移除所有事件监听

 drawClipPathOnCanvas(ctx)  // 在 lowerCanvasEl 上绘制缓存的 clipPath

 drawControls(ctx)  // 绘制对象控制器

 /**
  * skipGroup: 是否跳过组合
  */
 findTarget(e, skipGroup) → {fabric.Object}  // 确定点击的对象

 /**
  * eventName: 事件名
  */
 fire(eventName, optionsopt) → {Self}  // 触发带有可选选项对象的事件

 /**
  * callback: (object: 当前对象，index，对象数组)
  * context: 如果没有，则在全局对象（window）下调用回调
  */
 forEachObject(callback, context) → {Self}  // 对组合中的每个对象都执行事件

 /**
  * callbacks: onComplete / onChange
  */
 fxCenterObjectH(object, callbacksopt) → {fabric.AnimationContext}  // 动画水平居中

 fxCenterObjectV(object, callbacksopt) → {fabric.AnimationContext}  // 动画垂直居中

 fxRemove(object, callbacksopt) → {fabric.AnimationContext}  // 动画移除对象

 fxStraightenObject(object) → {fabric.Canvas}  // 动画使对象变直变正

 getActiveObject() → {fabric.Object}  // 获取当前选中的活跃对象

 getActiveObjects() → {fabric.Object}  // 获取当前选中的对象数组

 getCenter() → {Object}  // canvas 中心点  返回{top, left}

 getContext() → {CanvasRenderingContext2D}  // 获取canvas上下文

 getElement() → {HTMLCanvasElement}  // 获取 canvas 元素Element

 getHeight() → {Number}  // canvas 高度

 getWidth() → {Number}  // canvas 宽度

 getObjects(typeopt) → {Array}  // 获取 canvas 的所有对象

 /**
  * ignoreZoom: true：viewportTransform处理坐标
  *             false：单纯点坐标
  */
 getPointer(e, ignoreZoom) → {Object}  // 获取点击点的相对坐标  返回{x, y}

 getSelectionContext() → {CanvasRenderingContext2D}  // 选区的画布上下文

 getSelectionElement() → {HTMLCanvasElement}  // 选区的 canvas 元素Element

 getVpCenter() → {fabric.Point}  // 计算画布中与实际视口中心相对应的点。
 
 getZoom() → {Number}  // 获取 zoom 缩放等级

 /**
  * object: 插入的对象
  * index: 插入对象的索引
  * nonSplicing: 为 true 时不会发生对象裁剪或移位
  */
 insertAt(object, index, nonSplicing) → {Self}  // 将对象添加到集合中，然后渲染画布（如果 renderOnAddRemove 不是 false）。强烈建议组 (group)不要使用此函数。您可以使用 insertAt 方法添加一堆对象，但是您需要为 Group 类运行 addWithUpdate 调用。否则/bbox 将是错误的

 isEmpty() → {Boolean}  // 集合是否为空

 isTargetTransparent(target, x, y) → {Boolean}  // 该对象在 { x, y }的位置是否为透明

 item(index) → {Self} // 返回特定索引的对象

 /**
  * json
  * callback: 解析并初始化后调用  （ canvas.renderAll.bind(canvas)
  * reviver: 每个 fabric 对象创建后调用  { jsonObject, fabric.Object instance }
  */
 loadFromJSON(json, callback, reviveropt) → {fabric.Canvas}  // 在 canvas 中加载json

 moveTo(object, index) → {fabric.Canvas}  // 将对象移动到指定层级

 relativePan(point) → {fabric.Canvas}  // 相对平移 viewpoint

 remove(…object) → {Self}  // 移除集合中的对象。如果 renderOnAddRemove 不为 false 则渲染画布

 removeListeners()  // 移除所有事件监听

 renderAll() → {fabric.Canvas}  // 渲染顶部画布，和辅助容器画布 （ upper-canvas，canvas-container）

 renderCanvas(ctx, objects) → {fabric.Canvas}  // 渲染 background、对象、overlay、控制器

 renderTop() → {fabric.Canvas}  // 渲染 upper-canvas 画布，或者选中的组合

 requestRenderAll() → {fabric.Canvas}  // 建议！！！     将 renderAll 请求附加到下一个动画帧。

 restorePointerVpt(pointer) → {Object}  // 返回不受屏幕影响的点集合

 sendBackwards(object, intersectingopt) → {fabric.Canvas}  // 将对象下移一层

 sendToBack(object) → {fabric.Canvas}  // 将对象移动到最底层

 /**
  * e: 在执行 "object:selected " 时传递
  */
 setActiveObject(object, eopt) → {fabric.Canvas}  // 设置活跃对象
 
  /**
  * callback: （ canvas.renderAll.bind(canvas) ）
  */
 setBackgroundColor(backgroundColor, callback) → {fabric.Canvas}  // 给 canvas 设置backgroundColor

 setBackgroundImage(image, callback, optionsopt) → {fabric.Canvas}  // 设置backgroundImage

 setCursor(value)  // 给 canvas 元素设置鼠标

  /**
  * dimensions: { width，height } 如果 cssOnly 为 true，需要加上 px/%/em
  * options: { 
  *            backstoreOnly:Boolean    将 dimensions 作为 canvas 后备尺寸
  *            cssOnly:Boolean   将 dimensions 作为 css 尺寸
  *          }
  */
 setDimensions(dimensions, optionsopt) → {fabric.Canvas}  // 设置 canvas 宽高

 setHeight(value, optionsopt) → {fabric.Canvas}  // canvas 高度设置

 setWidth(value, optionsopt) → {fabric.Canvas}  // canvas 宽度设置

 setOverlayColor(overlayColor, callback) → {fabric.Canvas}  // 设置 canvas 的上层覆盖色
 
 setOverlayImage(image, callback, optionsopt) → {fabric.Canvas}  // 设置 canvas 的上层覆盖图形

 setViewportTransform(vpt) → {fabric.Canvas}  // 设置 canvas 的视口转换

 setZoom(value) → {fabric.Canvas}  // 设置 canvas 的缩放等级

 size() → {Number}  // 获取集合的大小，即包含多少对象

 straightenObject(object) → {fabric.Canvas}  // 使某个对象变正变直
 
  /**
  * multiplier: 缩放系数
  * cropping: { left，top，width，height }
  */
 toCanvasElement(multiplieropt, croppingopt)  // 创建一个有当前 canvas 内容的新 canvas 元素，不需要 resize 实际大小或者 重绘。将对象所有权转移到一个新的画布上，绘制它，然后设置一切。这是用于获取 dataUrl 的中间步骤，但在不传递 dataUrl 字符串的情况下创建画布的快速图像副本也很有用

 toJSON(propertiesToIncludeopt) → {Object}  // 将 canvas 导出为 JSON

 toDatalessJSON(propertiesToIncludeopt) → {String}  // 将 canvas 导出为 JSON，不包含数据

 toObject(propertiesToIncludeopt) → {Object}  // 将 canvas 导出为 Object

 toDatalessObject(propertiesToIncludeopt) → {Object}  // 将 canvas 导出为 Object，不包含数据

  /**
  * optionsopt: {
  *                 format: String     "jpeg" / "png"。  默认"png"
  *                 quality: Number     "jpeg" 时的质量等级 （ 0...1）。  默认1
  *                 multiplier: Number      缩放系数。   默认1
  *                 left: Number
  *                 top: Number
  *                 width: Number
  *                 height: Number
  *                 enableRetinaScaling: Boolean    是否启用视网膜缩放
  *             }
  */
 toDataURL(optionsopt) → {String}  // 将 canvas 导出为一个 dataUrl 图像。当 multiplier 有值时，裁剪会适当缩放

 toString() → {String}  // 将 canvas 导出为字符串

  /**
  * options: {
  *                 suppressPreamble: Boolean   为 true 时不包含 xml 标签    默认false
  *                 viewBox     { x，y，width，height }
  *                 encoding: String      编码     默认 "UTF-8"
  *                 width: String
  *                 height: String
  *             }
  * reviver: svg => {}
  */
 toSVG(optionsopt, reviveropt) → {String}  // 将 canvas 导出为 SVG

 viewportCenterObject(object) → {fabric.Canvas}  // 在视口中垂直和水平居中对象

 viewportCenterObjectH(object) → {fabric.Canvas}  // 在视口中水平居中对象

 viewportCenterObjectV(object) → {fabric.Canvas}  // 在视口中垂直居中对象

 zoomToPoint(point, value) → {fabric.Canvas}  // 以某点为中心进行 value 倍的缩放，value 小于 1 缩小，大于 1 放大
```
