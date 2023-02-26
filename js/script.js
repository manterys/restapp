// Header
const appHeader = () => {

    const header = document.getElementById('header')
    const pxShow = 100

    window.onscroll = function() {
    
        if (window.scrollY >= pxShow) {
        header.classList.add('scrolled')
        } else {
        header.classList.remove('scrolled')
        }
    }
}
appHeader()

// Counter
const appCounter = () => {
    const startCounter = document.querySelector('.fun-facts')
    const counter = document.querySelectorAll('.counter')

    // IntersectionObserver
    let CounterObserver = new IntersectionObserver(
        (entries, observer) => {
            let [entry] = entries;
            if (!entry.isIntersecting) return;
            
            counter.forEach(counterEl => {
                counterEl.innerText = '0'
                
                const updateCounter = () => {
                    const target = +counterEl.getAttribute('data-target')
                    const count = +counterEl.innerText
                    
                    const increment = target / 200
                    
                    if(count < target) {
                        counterEl.innerText = `${Math.ceil(count + increment)}`
          setTimeout(updateCounter, 40)
        } else {
            counterEl.innerText = target
        }
    }
    
    updateCounter()
})

// observer.unobserve(startCounter)
// observation is only one time
observer.unobserve(startCounter)

},
{
    root: null,
    threshold: window.innerWidth > 768 ? 0.3 : 0.2,
}
)
    CounterObserver.observe(startCounter)
}
appCounter()

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
    type: false,
    pagination: false,
    arrows: false,
    // autoWidth: true,
    perPage: 1,
    padding: '5rem',
    gap: '1rem',
    mediaQuery: 'min',
    breakpoints: {
        550: {
            perPage: 2,
        },
        1000: {
            destroy: true,
        }

 }
 } ).mount();