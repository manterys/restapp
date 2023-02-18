// Loader
const appLoader = function() {

    const page = document.querySelector('.page');
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', function() {
        loader.classList.add('loaded')
        
        loader.addEventListener('transitionend', function() {
            page.classList.add('loaded')
            loader.style.display = 'none'
            })
    })
}
appLoader()

// Header
const appHeader = () => {

    const header = document.getElementById('header')
    const pxShow = 100
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
        if (window.scrollY >= pxShow) {
        header.classList.add('scrolled')
        } else {
        header.classList.remove('scrolled')
        }
        if (prevScrollpos > currentScrollPos || currentScrollPos <= 600) {
          header.classList.remove('offset')
        } else {
        header.classList.add('offset')
        }

    prevScrollpos = currentScrollPos;
    }
}
appHeader()

// Animation
const appAnimation = () => {
    const animationTop = document.querySelectorAll('.animation-top')

    window.addEventListener('scroll', animation)

    function animation() {
    const triggerBottom = window.innerHeight / 1.1
    
    animationTop.forEach(animationTopEl => {
        const animTop = animationTopEl.getBoundingClientRect().top

        if(animTop < triggerBottom) {
            animationTopEl.classList.add('animationShow')
        } 
    })
    }
}
appAnimation()

// Move to
const appMoveTo = () => {
    const easeFunctions = {
        easeInQuad: function (t, b, c, d) {
            t /= d
        return c * t * t + b
    },
    easeOutQuad: function (t, b, c, d) {
        t /= d
        return -c * t* (t - 2) + b
    },
    easeInOutQuad: function (t, b, c, d) {
        t /= d/2
        if (t < 1) return c/2*t*t + b
        t--
        return -c/2 * (t*(t-2) - 1) + b
    },
    easeInOutCubic: function (t, b, c, d) {
        t /= d/2
        if (t < 1) return c/2*t*t*t + b
        t -= 2
        return c/2*(t*t*t + 2) + b
    }
    }

    const triggers = document.querySelectorAll('.smoothscroll')

    const moveTo = new MoveTo({
        tolerance: -1,
        duration: 1200,
        easing: 'easeInOutCubic',
        container: window
    }, easeFunctions)

    triggers.forEach(function(trigger) {
        moveTo.registerTrigger(trigger)
    })
}

appMoveTo()

// Splide
new Splide( '.splide', {
    type : 'loop',
    pagination: false,
    arrows: false,
    autoplay: true,
    perPage: 3,
    gap: '2rem',
    breakpoints: {
    1000: {
        pagination: true,
        perPage: 2,
    },
    660: {
        perPage: 1,
    }
 }
 } ).mount();