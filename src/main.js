// document.createElement('div')
const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

dom.wrap(test, div);

const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'hi')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

dom.text(test, '这是新的文本内容')
const text = dom.text(test)
console.log(`text:${text}`)


dom.style(test, { border: '1px solid red', color: 'blue' })
const border = dom.style(test, 'border')
console.log(`border:${border}`)
dom.style(test, 'color', 'red')

dom.class.add(test, 'red')
dom.class.remove(test, 'red')
console.log(dom.class.has(test, 'red'))


const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)


const testDiv = dom.find('#test')[0]
console.log(testDiv)
console.log(dom.find('.red', testDiv))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))



