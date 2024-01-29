let bgimgheight = document.body.offsetHeight - document.querySelector('footer').offsetHeight;
document.documentElement.style.setProperty('--bgimg', `${bgimgheight}px`)

function cssvars() {
    let bgimgheight = document.body.offsetHeight - document.querySelector('footer').offsetHeight;
    document.documentElement.style.setProperty('--bgimg', `${bgimgheight}px`)

    let headerHeight = document.querySelector('header').offsetHeight;
    let topbarheight = document.querySelector('.topbar').offsetHeight;
    let page3 = document.querySelector('.page3').offsetHeight
    document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`)
    document.documentElement.style.setProperty('--topbarheight', `${topbarheight}px`)
    document.documentElement.style.setProperty
    ('--page3height', `${page3}px`)
    console.log(headerHeight)
}
window.addEventListener('resize', cssvars)
window.addEventListener('DOMContentLoaded', cssvars)
cssvars()

document.querySelectorAll('.links-open').forEach((elm)=>{
    elm.addEventListener('click',(e)=>{
        const parentElement = e.target.closest('.linksdiv');

        let allopen = document.querySelectorAll('.linksdiv.expanded')
        allopen.forEach((a)=>{
            a.classList.remove('expanded')
        })
        // Toggle the 'expanded' class on the parent element
        parentElement.classList.toggle('expanded');
        console.log( e.target.closest('.linksdiv'))
        // e.target.parentEleme 
    })
})

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
        document.documentElement.style.setProperty('--bottom', `8px`)
        document.documentElement.style.setProperty('--rotatebfr', `0deg`)
        document.documentElement.style.setProperty('--rotateaft', `0deg`)
    }

})

// const splide = new Splide( '.splide', {
//     type   : 'loop',
//     drag   : 'free',
//     focus  : 'center',
//     perPage: 3,
//     autoScroll: {
//       speed: 1,
//     },
//   } );
  
//   splide.mount();
