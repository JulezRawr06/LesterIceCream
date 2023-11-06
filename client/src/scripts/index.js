let strawberry = document.querySelector(".strawberry")
let chocolate = document.querySelector(".chocolate")
let cookiesNCream = document.querySelector(".cookiescream")
let ube = document.querySelector(".ube")

const link = document.querySelector(".made__link")
const root = document.querySelector(":root")

let CURR_THEME


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.x == 0
    );
}

function check() {
    if (isInViewport(strawberry)) {
        root.style.setProperty("--currentPrimary", "#ffc0cb")
        root.style.setProperty("--currentAccent", "#ffa8b7")
        root.style.setProperty("--currentTextHover", "#fb6780")
        link.style.color = "black"
    } else if (isInViewport(chocolate)) {
        root.style.setProperty("--currentPrimary", "#A7796D")
        root.style.setProperty("--currentAccent", "#341104")
        root.style.setProperty("--currentTextHover", "#64481d")
        link.style.color = "snow"
    } else if (isInViewport(cookiesNCream)) {
        root.style.setProperty("--currentPrimary", "#d6c7bb")
        root.style.setProperty("--currentAccent", "#a4928b")
        root.style.setProperty("--currentTextHover", "#5f5349")
        link.style.color = "black"
    } else if (isInViewport(ube)) {
        root.style.setProperty("--currentPrimary", "#8878c3")
        root.style.setProperty("--currentAccent", "#7b69b6")
        root.style.setProperty("--currentTextHover", "#11114e")
        link.style.color = "black"
    } else {
        root.style.setProperty("--currentAccent", "transparent")
    }
}

// // function debounce(cb, delay=1000) {
// //     return (...args) => {
// //         setTimeout(() => {
// //             cb(...args)
// //         }, delay)           
// //     }
// // }

// // const scrollUpdate = debounce(() => {
// //     if (isInViewport(strawberry)) {
// //         console.log('strawberry')
// //     } else if (isInViewport(chocolate)) {
// //         console.log('chocolate')
// //     } else if (isInViewport(cookiesNCream)) {
// //         console.log('cookies and cream')
// //     } else if (isInViewport(ube)) {
// //         console.log('ube')
// //     }
// // })

let cont = document.querySelector(".highlights")

cont.addEventListener("scroll", (e) => 
    {
        check()
        e.stopImmediatePropagation()
    }
)