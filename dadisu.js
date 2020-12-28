const log = console.log.bind(console)
const e = (selector) => {
    let element = document.querySelector(selector)
    if (element === null) {
        let s = `选择器 ${selector} 错误`
        alert(s)
        return null
    } else {
        return element
    }
}

const es = (selector) => {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let s = ` ${selector} 写错了`
        alert(s)
        return []
    } else {
        return elements
    }
}

const templateCell = () => {
    let result = ''
    for (let i = 0; i < 9; i++) {
        result += `    <div class="item" id="item-${i}">
        <img class="disu" src="img/disu.png" alt="">
        <img class="yun" src="img/yun.png">
    </div>`
    }
    return result
}

const renderSquare = () => {
    let result = ''
    let body = e('.picture')
    let container = templateCell()
    result =`<div class="mine">${container}</div>`
    body.insertAdjacentHTML('beforeend', result)
}

const xiaoguo = () => {
    let mouseList = es('.disu')
    let score = e('.score')
    let num_ = 0
    let mine = e('.mine')

    for (let i = 0; i < mouseList.length; i++) {
        mouseList[i].addEventListener('click',function(event) {
            let self = event.target
            self.style.display = 'none'
            let fu = self.closest('.item')
            let content = fu.querySelector('.yun')
            content.style.display = 'block'
            num_ += 10
            score.innerHTML = num_
            setTimeout(function () {
                content.style.display = 'none'
            },300)
        })
    }

    setInterval(function () {
        displayMouse()
    },2000)

    let time = e('.time')
    let time_ = 120
    let time_1 = setInterval(function () {
        time.innerHTML = time_ --
        if (time_ < -1) {
            alert('游戏结束')
            clearInterval(time_1)
        }


    },1000)

}

const displayMouse = () => {
    let mouseList = es('.disu')
    log('随机生成数字中')
    let i = Math.floor(Math.random() * 9)
    if (mouseList[i].style.display === 'block') {
        displayMouse()
    } else {
        mouseList[i].style.display = 'block'
    }
}
const __main = function() {
    renderSquare()
    xiaoguo()
}

__main()