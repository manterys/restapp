// AOS.init({
//     duration: 600,
//     once: true,
// })

// Preloader
const appPreloader = function() {
    body = document.body;
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.classList.add('loaded');
        
        preloader.addEventListener('transitionend', function() {
            body.classList.add('show');
            preloader.style.display = 'none';
            AOS.init({
                duration: 600,
                once: true,
            })
        })
    })
}
appPreloader()


// Header
const appHeader = () => {

    const header = document.getElementById('header')
    const scrolled = 150
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
        if (window.scrollY >= scrolled) {
        header.classList.add('scrolled')
        } else {
        header.classList.remove('scrolled')
        }
        if (prevScrollpos > currentScrollPos || currentScrollPos <= 600 || header.classList.contains('menuActive')) {
          header.classList.remove('offset')
        } else {
        header.classList.add('offset')
        }

    prevScrollpos = currentScrollPos;
    }

    const menuBtn = document.getElementById('menu-btn')

    menuBtn.addEventListener('click', () => header.classList.toggle('menuActive'))

    const navLink = document.querySelectorAll('.nav-link')
    navLink.forEach(function(link) {
        link.addEventListener("click", function(e) {
            header.classList.remove('menuActive')
        })
    })

    window.addEventListener('resize', function() {
        if (window.matchMedia('(min-width: 1140px)').matches) {
            if (header.classList.contains('menuActive')) header.classList.remove('menuActive')
        }
    })

}
appHeader()

// Accordion
const accordion = () => {
    const accordionButton = document.querySelectorAll('.accordion__button')
    
    function removeActive() {
        accordionButton.forEach(button =>
            button.classList.remove('accordion__button--active')
            )
        }
        
        accordionButton.forEach(button => {
            button.addEventListener('click', (e) => {
                removeActive()
                if(!button.classList.contains('accordion__button--active')) {
                    button.classList.add('accordion__button--active')
                } else {
                    button.classList.remove('accordion__button--active')
                    console.log("asd")
                    
                }

            }
        )
    })
}
accordion()

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