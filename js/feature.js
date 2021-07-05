let menuBtn = document.querySelectorAll('.navButton>span')
let demo = document.querySelectorAll('.content>.hide')
console.log(demo)
for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener('click', function () {
    // 修改span字体样式
    console.log(this)
    for (let j = 0; j < menuBtn.length; j++) {
      menuBtn[j].setAttribute('class', '')
      demo[j].style.display = 'none'
    }
    this.setAttribute('class', 'active')
    // 将元素关联的Demo展示
    demo[i].style.display = 'block'
   })
}