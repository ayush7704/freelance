let topbarheight = document.querySelector('.topbar').offsetHeight;
let headerHeight = document.querySelector('header').offsetHeight
window.addEventListener('resize', () => {
    let headerHeight = document.querySelector('header').offsetHeight
    let topbarheight = document.querySelector('.topbar').offsetHeight;
    document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`)
    document.documentElement.style.setProperty('--topbarheight', `${topbarheight}px`)
})
window.addEventListener('DOMContentLoaded', () => {

    let headerHeight = document.querySelector('header').offsetHeight
    let topbarheight = document.querySelector('.topbar').offsetHeight;
    document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`)
    document.documentElement.style.setProperty('--topbarheight', `${topbarheight}px`)
})


console.log(headerHeight - topbarheight)
let ham = document.querySelector('.hamburgue')
ham.addEventListener('click', function () {

    // const block = document.querySelector('.d-none')
    const hamspan = document.querySelector('.hamburgue span')

    const spanbfr = window.getComputedStyle(hamspan, '::before')
    const header = document.querySelector('.header')
    console.log(spanbfr.top)
    if (spanbfr.top == '-8px') {
        hamspan.style.background = 'transparent'
        header.style.display = 'block'

        // // gsap point 
        // gsap.from('.d-none', {
        //     x: -150,
        //     opacity: 0,
        //     duration: 0.7,
        // })
        console.log('iff')
        document.documentElement.style.setProperty('--top', `0px`)
        document.documentElement.style.setProperty('--bottom', `0px`)
        document.documentElement.style.setProperty('--rotatebfr', `135deg`)
        document.documentElement.style.setProperty('--rotateaft', `-135deg`)
    }
    else {
        console.log('else')
        hamspan.style.background = ''
        header.style.display = ''
        document.documentElement.style.setProperty('--top', `-8px`)
        document.documentElement.style.setProperty('--bottom', `-8px`)
        document.documentElement.style.setProperty('--rotatebfr', `0deg`)
        document.documentElement.style.setProperty('--rotateaft', `0deg`)
    }

})
