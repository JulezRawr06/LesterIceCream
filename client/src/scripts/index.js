// let test = document.querySelector(".chocolate")

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     console.log(rect)
//     return (
//         rect.x == 0
//     );
// }

// if (isInViewport(test)) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// function debounce(cb, delay=2000) {
//     return (...args) => {
//         setTimeout(() => {
//             cb(...args)
//         }, delay)           
//     }
// }

// const scrollUpdate = debounce(() => console.log('works'))

// let cont = document.querySelector(".highlights")

// cont.addEventListener("scroll", (e) => 
//     {
//         scrollUpdate()
//     }
// )