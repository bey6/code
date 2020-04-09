export default class ContextMenu {
  // 上下文菜单样式
  style = `.context-menu {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: 1px solid #a8a8a8;
  border-radius: 1px;
  box-shadow: 5px 5px 1px -4px #666;
  width: auto;
  color: #333;
  font: 500 1em 'microsoft yahei', sans-serif;
  background-color: #f0f0f0;
}

.context-menu--show {
  display: flex;
  flex-direction: column;
  visibility: visible;
}

.context-menu--hidden {
  visibility: hidden;
}

.pd-2 {
  padding: 0 2px;
}

.pdl-3em {
  padding-left: 2.15em;
}

.context-menu__item {
  display: flex;
  flex-direction: row;
  padding: 2px;
  cursor: default;
  min-width: 128px;
  user-select: none;
}

.context-menu__item:hover {
  background-color: rgb(171, 223, 199);
}

.context-menu__item__icon,
.context-menu__item__text {
  display: block;
}

.context-menu__item__icon {
  text-align: center;
  width: 35px;
  line-height: 0.9em;
}

.context-menu__item__text {
  flex-grow: 1;
  flex-basis: 128px;
  padding: 0 4px;
  font-size: 0.9em;
}

.context-menu__split {
  margin: 1px;
  padding: 0;
  border: none;
  height: 1px;
  background-color: #bbbbbb;
}`
  /**
   * 对象实例
   */
  __cm
  /**
   * 菜单的宽度
   */
  SELF_WIDTH
  /**
   * 菜单的高度
   */
  SELF_HEIGHT
  /**
   * 事件源
   */
  EVENT_TARGET

  /**
   * After display status changed
   */
  afterToggle = undefined

  constructor(host, autoClose = true, items = []) {
    this.autoClose = autoClose
    this.initialization(host, items)
  }

  /**
   *
   * @param { string } host 宿主选择器
   * @param { [{ label: 'Item label', icon: 'Unicode img', click: 'A fuction that put it to be the click event'},...] } items 菜单项
   */
  initialization(host, items) {
    const STYLE = document.createElement('style')
    STYLE.innerText = this.style
    document.body.appendChild(STYLE)

    this.__cm = document.createElement('ul')
    this.__cm.className = 'context-menu context-menu--hidden'
    this.__cm.addEventListener('contextmenu', e => e.preventDefault())

    items.forEach(item => {
      let contextNode = document.createElement('li')
      contextNode.className = 'context-menu__item pd-2'

      // click event
      if (item.click)
        contextNode.addEventListener('click', e =>
          item.click(e, this.EVENT_TARGET)
        )

      // icon 与 文本
      let icon, text
      icon = document.createElement('span')
      icon.className = 'context-menu__item__icon'
      icon.textContent = item.icon
      text = document.createElement('span')
      text.className = 'context-menu__item__text'
      text.textContent = item.label
      contextNode.append(icon)
      contextNode.append(text)
      this.__cm.append(contextNode)

      // 后分割线
      if (item.splitAfter) {
        let splitNode = document.createElement('li')
        splitNode.className = 'pd-2 pdl-3em'
        let hrNode = document.createElement('div')
        hrNode.className = 'context-menu__split'
        splitNode.append(hrNode)
        this.__cm.append(splitNode)
      }
    })
    document.body.append(this.__cm)

    this.SELF_WIDTH = this.__cm.clientWidth
    this.SELF_HEIGHT = this.__cm.clientHeight

    let hostNode = document.querySelector(host)
    if (!hostNode) {
      throw Error(`The host '${host}' you given can't find from document.`)
    }

    hostNode.addEventListener('contextmenu', e => {
      e.preventDefault()
      this.EVENT_TARGET = e.target
      this.positioned(e.clientX, e.clientY)
      this.toggle(true)
    })

    document.body.addEventListener('click', e => {
      if (!e.target.className.includes('context-menu__item') || this.autoClose)
        this.toggle(false)
    })
  }

  /**
   * Switch context menu show status.
   * @param { boolean } status [Optional] set an appointed value.
   */
  toggle(status = undefined) {
    this.__cm.className = 'context-menu context-menu--hidden'

    setTimeout(() => {
      if (status !== undefined) {
        if (status) this.__cm.className = 'context-menu context-menu--show'
        else this.__cm.className = 'context-menu context-menu--hidden'
      } else {
        if (this.__cm.className === 'context-menu context-menu--show')
          this.__cm.className = 'context-menu context-menu--hidden'
        else this.__cm.className = 'context-menu context-menu--show'
      }
      if (this.afterToggle) this.afterToggle()
    }, 80)
  }

  /**
   * Set the point of the context menu.
   * @param { number } x Axis x
   * @param { number } y Axis y
   */
  positioned(x = 0, y = 0) {
    const VIEW_WIDTH = document.body.clientWidth,
      VIEW_HEIGHT = document.body.clientHeight,
      SCROLL_WIDTH =
        document.body.scrollLeft | document.documentElement.scrollLeft,
      SCROLL_HEIGHT =
        document.body.scrollTop | document.documentElement.scrollTop

    // 修正坐标
    if (x + this.SELF_WIDTH > VIEW_WIDTH) {
      this.__cm.style.left =
        SCROLL_WIDTH + VIEW_WIDTH - this.SELF_WIDTH - 5 + 'px'
    } else {
      this.__cm.style.left = x + SCROLL_WIDTH + 'px'
    }

    // 修正坐标
    if (y + this.SELF_HEIGHT > VIEW_HEIGHT) {
      this.__cm.style.top =
        SCROLL_HEIGHT + VIEW_HEIGHT - this.SELF_HEIGHT - 5 + 'px'
    } else {
      this.__cm.style.top = y + SCROLL_HEIGHT + 'px'
    }
  }
}
