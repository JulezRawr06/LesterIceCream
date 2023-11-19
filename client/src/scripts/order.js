const cart = document.querySelector(".menu__cartItemsInvisibleWrapper")

let totalPrice = 0

const overallPrice = document.querySelector(".menu__overallPrice")

const itemIdentifier = document.querySelector(".menu__cartItemIdentifier")

/* strawberry */
const strawberryDecrease = document.querySelector(".menu__quantityContainerDecrease.strawberry");
const strawberryIncrease = document.querySelector(".menu__quantityContainerIncrease.strawberry");

const strawberryPriceContainer = document.querySelector(".menu__itemPrice.strawberry");
let strawberryPrice = 0

const strawberryQuantityContainer = document.querySelector(".menu__quantity.strawberry")
strawberryQuantityContainer.value = 0
let strawberryQuantity = 0

const strawberryAdd = document.querySelector(".menu__itemAddButton.strawberry")
let strawberryInCart = false
let strawberrySavedPrice = 0

function strawberryChangePrice(n) {

    strawberryPrice = n * 300
    strawberryPriceContainer.textContent  = `₱ ${strawberryPrice}.00`

}

function strawberryChangeQuantity(n) {

    strawberryQuantity = Number(n)
    strawberryQuantityContainer.value = strawberryQuantity

    strawberryChangePrice(strawberryQuantity)

}

strawberryQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        strawberryChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        strawberryChangeQuantity(0)

    } else {

        strawberryChangeQuantity(e.target.value)

    }

})

strawberryDecrease.addEventListener('click', () => {
    if (strawberryQuantity != 0 ) { 

        strawberryChangeQuantity( strawberryQuantity - 1 )
    
    }

})

strawberryIncrease.addEventListener('click', () => {
    if (strawberryQuantity != 10 ) { 

        strawberryChangeQuantity( strawberryQuantity + 1 )


    }
})

strawberryAdd.addEventListener('click', () => {

    if ( strawberryInCart == false && strawberryQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "pink"
        block.classList.add("cartBox")
        block.classList.add("strawberry")

        block.addEventListener("mouseover", () => {
            itemIdentifier.textContent = "Strawberry"
        })

        block.addEventListener("mouseout", () => {
            itemIdentifier.textContent = ""
        })

        block.addEventListener("click", () => {
            block.parentNode.removeChild(block)
            itemIdentifier.textContent = ""
            totalPrice -= strawberrySavedPrice
            overallPrice.textContent = `₱ ${totalPrice}.00`
            strawberryInCart = false
        })

        cart.appendChild(block)

        totalPrice += strawberryPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        strawberrySavedPrice = strawberryPrice
        strawberryChangeQuantity(0)
        strawberryInCart = true

        console.log(strawberrySavedPrice)
    }

})

/* chocolate */
const chocolateDecrease = document.querySelector(".menu__quantityContainerDecrease.chocolate");
const chocolateIncrease = document.querySelector(".menu__quantityContainerIncrease.chocolate");

const chocolatePriceContainer = document.querySelector(".menu__itemPrice.chocolate");
let chocolatePrice = 0

const chocolateQuantityContainer = document.querySelector(".menu__quantity.chocolate")
chocolateQuantityContainer.value = 0
let chocolateQuantity = 0

const chocolateAdd = document.querySelector(".menu__itemAddButton.chocolate")
let chocolateInCart = false
let chocolateSavedPrice = 0

function chocolateChangePrice(n) {

    chocolatePrice = n * 300
    chocolatePriceContainer.textContent  = `₱ ${chocolatePrice}.00`

}

function chocolateChangeQuantity(n) {

    chocolateQuantity = Number(n)
    chocolateQuantityContainer.value = chocolateQuantity

    chocolateChangePrice(chocolateQuantity)

}

chocolateQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        chocolateChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        chocolateChangeQuantity(0)

    } else {

        chocolateChangeQuantity(e.target.value)

    }

})

chocolateDecrease.addEventListener('click', () => {
    if (chocolateQuantity != 0 ) { 

        chocolateChangeQuantity( chocolateQuantity - 1 )
    
    }

})

chocolateIncrease.addEventListener('click', () => {
    if (chocolateQuantity != 10 ) { 

        chocolateChangeQuantity( chocolateQuantity + 1 )


    }
})

chocolateAdd.addEventListener('click', () => {

    if ( chocolateInCart == false && chocolateQuantity != 0) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#A7796D"
        block.classList.add("chocolate")

        cart.appendChild(block)

        totalPrice += chocolatePrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        chocolateInCart = true
        chocolateChangeQuantity(0)
    }

})

/* cookies n cream */
const cookiesncreamDecrease = document.querySelector(".menu__quantityContainerDecrease.cookiesncream");
const cookiesncreamIncrease = document.querySelector(".menu__quantityContainerIncrease.cookiesncream");

const cookiesncreamPriceContainer = document.querySelector(".menu__itemPrice.cookiesncream");
let cookiesncreamPrice = 0

const cookiesncreamQuantityContainer = document.querySelector(".menu__quantity.cookiesncream")
cookiesncreamQuantityContainer.value = 0
let cookiesncreamQuantity = 0

const cookiesncreamAdd = document.querySelector(".menu__itemAddButton.cookiesncream")
let cookiesncreamInCart = false
let cookiesncreamSavedPrice = 0


function cookiesncreamChangePrice(n) {

    cookiesncreamPrice = n * 300
    cookiesncreamPriceContainer.textContent  = `₱ ${cookiesncreamPrice}.00`

}

function cookiesncreamChangeQuantity(n) {

    cookiesncreamQuantity = Number(n)
    cookiesncreamQuantityContainer.value = cookiesncreamQuantity

    cookiesncreamChangePrice(cookiesncreamQuantity)

}

cookiesncreamQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        cookiesncreamChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        cookiesncreamChangeQuantity(0)

    } else {

        cookiesncreamChangeQuantity(e.target.value)

    }

})

cookiesncreamDecrease.addEventListener('click', () => {
    if (cookiesncreamQuantity != 0 ) { 

        cookiesncreamChangeQuantity( cookiesncreamQuantity - 1 )
    
    }

})

cookiesncreamIncrease.addEventListener('click', () => {
    if (cookiesncreamQuantity != 10 ) { 

        cookiesncreamChangeQuantity( cookiesncreamQuantity + 1 )


    }
})

cookiesncreamAdd.addEventListener('click', () => {

    if ( cookiesncreamInCart == false && cookiesncreamQuantity != 0) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#d6c7bb"
        block.classList.add("cookiesncream")

        cart.appendChild(block)

        totalPrice += cookiesncreamPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        cookiesncreamInCart = true
        cookiesncreamChangeQuantity(0)
    }

})

/* ube */
const ubeDecrease = document.querySelector(".menu__quantityContainerDecrease.ube");
const ubeIncrease = document.querySelector(".menu__quantityContainerIncrease.ube");

const ubePriceContainer = document.querySelector(".menu__itemPrice.ube");
let ubePrice = 0

const ubeQuantityContainer = document.querySelector(".menu__quantity.ube")
ubeQuantityContainer.value = 0
let ubeQuantity = 0

const ubeAdd = document.querySelector(".menu__itemAddButton.ube")
let ubeInCart = false
let ubeSavedPrice = 0

function ubeChangePrice(n) {

    ubePrice = n * 300
    ubePriceContainer.textContent  = `₱ ${ubePrice}.00`

}

function ubeChangeQuantity(n) {

    ubeQuantity = Number(n)
    ubeQuantityContainer.value = ubeQuantity

    ubeChangePrice(ubeQuantity)

}

ubeQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        ubeChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        ubeChangeQuantity(0)

    } else {

        ubeChangeQuantity(e.target.value)

    }

})

ubeDecrease.addEventListener('click', () => {
    if (ubeQuantity != 0 ) { 

        ubeChangeQuantity( ubeQuantity - 1 )
    
    }

})

ubeIncrease.addEventListener('click', () => {
    if (ubeQuantity != 10 ) { 

        ubeChangeQuantity( ubeQuantity + 1 )


    }
})

ubeAdd.addEventListener('click', () => {

    if ( ubeInCart == false && ubeQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#8878c3"
        block.classList.add("ube")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += ubePrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        ubeInCart = true
        ubeChangeQuantity(0)
    }

})

/* melon */
const mangoDecrease = document.querySelector(".menu__quantityContainerDecrease.mango");
const mangoIncrease = document.querySelector(".menu__quantityContainerIncrease.mango");

const mangoPriceContainer = document.querySelector(".menu__itemPrice.mango");
let mangoPrice = 0

const mangoQuantityContainer = document.querySelector(".menu__quantity.mango")
mangoQuantityContainer.value = 0
let mangoQuantity = 0

const mangoAdd = document.querySelector(".menu__itemAddButton.mango")
let mangoInCart = false
let mangoSavedPrice = 0

function mangoChangePrice(n) {

    mangoPrice = n * 300
    mangoPriceContainer.textContent  = `₱ ${mangoPrice}.00`

}

function mangoChangeQuantity(n) {

    mangoQuantity = Number(n)
    mangoQuantityContainer.value = mangoQuantity

    mangoChangePrice(mangoQuantity)

}

mangoQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        mangoChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        mangoChangeQuantity(0)

    } else {

        mangoChangeQuantity(e.target.value)

    }

})

mangoDecrease.addEventListener('click', () => {
    if (mangoQuantity != 0 ) { 

        mangoChangeQuantity( mangoQuantity - 1 )
    
    }

})

mangoIncrease.addEventListener('click', () => {
    if (mangoQuantity != 10 ) { 

        mangoChangeQuantity( mangoQuantity + 1 )


    }
})

mangoAdd.addEventListener('click', () => {

    if ( mangoInCart == false && mangoQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#ffbf34"
        block.classList.add("mango")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += mangoPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        mangoInCart = true
        mangoChangeQuantity(0)
    }

})

/* melon */
const melonDecrease = document.querySelector(".menu__quantityContainerDecrease.melon");
const melonIncrease = document.querySelector(".menu__quantityContainerIncrease.melon");

const melonPriceContainer = document.querySelector(".menu__itemPrice.melon");
let melonPrice = 0

const melonQuantityContainer = document.querySelector(".menu__quantity.melon")
melonQuantityContainer.value = 0
let melonQuantity = 0

const melonAdd = document.querySelector(".menu__itemAddButton.melon")
let melonInCart = false
let melonSavedPrice = 0

function melonChangePrice(n) {

    melonPrice = n * 300
    melonPriceContainer.textContent  = `₱ ${melonPrice}.00`

}

function melonChangeQuantity(n) {

    melonQuantity = Number(n)
    melonQuantityContainer.value = melonQuantity

    melonChangePrice(melonQuantity)

}

melonQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        melonChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        melonChangeQuantity(0)

    } else {

        melonChangeQuantity(e.target.value)

    }

})

melonDecrease.addEventListener('click', () => {
    if (melonQuantity != 0 ) { 

        melonChangeQuantity( melonQuantity - 1 )
    
    }

})

melonIncrease.addEventListener('click', () => {
    if (melonQuantity != 10 ) { 

        melonChangeQuantity( melonQuantity + 1 )


    }
})

melonAdd.addEventListener('click', () => {

    if ( melonInCart == false && melonQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#febaad"
        block.classList.add("melon")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += melonPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        melonInCart = true
        melonChangeQuantity(0)
    }

})

/* buko */
const bukoDecrease = document.querySelector(".menu__quantityContainerDecrease.buko");
const bukoIncrease = document.querySelector(".menu__quantityContainerIncrease.buko");

const bukoPriceContainer = document.querySelector(".menu__itemPrice.buko");
let bukoPrice = 0

const bukoQuantityContainer = document.querySelector(".menu__quantity.buko")
bukoQuantityContainer.value = 0
let bukoQuantity = 0

const bukoAdd = document.querySelector(".menu__itemAddButton.buko")
let bukoInCart = false
let bukoSavedPrice = 0

function bukoChangePrice(n) {

    bukoPrice = n * 300
    bukoPriceContainer.textContent  = `₱ ${bukoPrice}.00`

}

function bukoChangeQuantity(n) {

    bukoQuantity = Number(n)
    bukoQuantityContainer.value = bukoQuantity

    bukoChangePrice(bukoQuantity)

}

bukoQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        bukoChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        bukoChangeQuantity(0)

    } else {

        bukoChangeQuantity(e.target.value)

    }

})

bukoDecrease.addEventListener('click', () => {
    if (bukoQuantity != 0 ) { 

        bukoChangeQuantity( bukoQuantity - 1 )
    
    }

})

bukoIncrease.addEventListener('click', () => {
    if (bukoQuantity != 10 ) { 

        bukoChangeQuantity( bukoQuantity + 1 )


    }
})

bukoAdd.addEventListener('click', () => {

    if ( bukoInCart == false && bukoQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#d2fba4"
        block.classList.add("buko")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += bukoPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        bukoInCart = true
        bukoChangeQuantity(0)
    }

})

/* bukoPandan */
const bukoPandanDecrease = document.querySelector(".menu__quantityContainerDecrease.bukoPandan");
const bukoPandanIncrease = document.querySelector(".menu__quantityContainerIncrease.bukoPandan");

const bukoPandanPriceContainer = document.querySelector(".menu__itemPrice.bukoPandan");
let bukoPandanPrice = 0

const bukoPandanQuantityContainer = document.querySelector(".menu__quantity.bukoPandan")
bukoPandanQuantityContainer.value = 0
let bukoPandanQuantity = 0

const bukoPandanAdd = document.querySelector(".menu__itemAddButton.bukoPandan")
let bukoPandanInCart = false
let bukoPandanSavedPrice = 0

function bukoPandanChangePrice(n) {

    bukoPandanPrice = n * 300
    bukoPandanPriceContainer.textContent  = `₱ ${bukoPandanPrice}.00`

}

function bukoPandanChangeQuantity(n) {

    bukoPandanQuantity = Number(n)
    bukoPandanQuantityContainer.value = bukoPandanQuantity

    bukoPandanChangePrice(bukoPandanQuantity)

}

bukoPandanQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        bukoPandanChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        bukoPandanChangeQuantity(0)

    } else {

        bukoPandanChangeQuantity(e.target.value)

    }

})

bukoPandanDecrease.addEventListener('click', () => {
    if (bukoPandanQuantity != 0 ) { 

        bukoPandanChangeQuantity( bukoPandanQuantity - 1 )
    
    }

})

bukoPandanIncrease.addEventListener('click', () => {
    if (bukoPandanQuantity != 10 ) { 

        bukoPandanChangeQuantity( bukoPandanQuantity + 1 )


    }
})

bukoPandanAdd.addEventListener('click', () => {

    if ( bukoPandanInCart == false && bukoPandanQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#83ce89"
        block.classList.add("bukoPandan")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += bukoPandanPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        bukoPandanInCart = true
        bukoPandanChangeQuantity(0)
    }

})

/* langka */
const langkaDecrease = document.querySelector(".menu__quantityContainerDecrease.langka");
const langkaIncrease = document.querySelector(".menu__quantityContainerIncrease.langka");

const langkaPriceContainer = document.querySelector(".menu__itemPrice.langka");
let langkaPrice = 0

const langkaQuantityContainer = document.querySelector(".menu__quantity.langka")
langkaQuantityContainer.value = 0
let langkaQuantity = 0

const langkaAdd = document.querySelector(".menu__itemAddButton.langka")
let langkaInCart = false
let langkaSavedPrice = 0

function langkaChangePrice(n) {

    langkaPrice = n * 300
    langkaPriceContainer.textContent  = `₱ ${langkaPrice}.00`

}

function langkaChangeQuantity(n) {

    langkaQuantity = Number(n)
    langkaQuantityContainer.value = langkaQuantity

    langkaChangePrice(langkaQuantity)

}

langkaQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        langkaChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        langkaChangeQuantity(0)

    } else {

        langkaChangeQuantity(e.target.value)

    }

})

langkaDecrease.addEventListener('click', () => {
    if (langkaQuantity != 0 ) { 

        langkaChangeQuantity( langkaQuantity - 1 )
    
    }

})

langkaIncrease.addEventListener('click', () => {
    if (langkaQuantity != 10 ) { 

        langkaChangeQuantity( langkaQuantity + 1 )


    }
})

langkaAdd.addEventListener('click', () => {

    if ( langkaInCart == false && langkaQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#f7c681"
        block.classList.add("langka")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += langkaPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        langkaInCart = true
        langkaChangeQuantity(0)
    }

})

/* macapuno */
const macapunoDecrease = document.querySelector(".menu__quantityContainerDecrease.macapuno");
const macapunoIncrease = document.querySelector(".menu__quantityContainerIncrease.macapuno");

const macapunoPriceContainer = document.querySelector(".menu__itemPrice.macapuno");
let macapunoPrice = 0

const macapunoQuantityContainer = document.querySelector(".menu__quantity.macapuno")
macapunoQuantityContainer.value = 0
let macapunoQuantity = 0

const macapunoAdd = document.querySelector(".menu__itemAddButton.macapuno")
let macapunoInCart = false
let macapunoSavedPrice = 0

function macapunoChangePrice(n) {

    macapunoPrice = n * 300
    macapunoPriceContainer.textContent  = `₱ ${macapunoPrice}.00`

}

function macapunoChangeQuantity(n) {

    macapunoQuantity = Number(n)
    macapunoQuantityContainer.value = macapunoQuantity

    macapunoChangePrice(macapunoQuantity)

}

macapunoQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        macapunoChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        macapunoChangeQuantity(0)

    } else {

        macapunoChangeQuantity(e.target.value)

    }

})

macapunoDecrease.addEventListener('click', () => {
    if (macapunoQuantity != 0 ) { 

        macapunoChangeQuantity( macapunoQuantity - 1 )
    
    }

})

macapunoIncrease.addEventListener('click', () => {
    if (macapunoQuantity != 10 ) { 

        macapunoChangeQuantity( macapunoQuantity + 1 )


    }
})

macapunoAdd.addEventListener('click', () => {

    if ( macapunoInCart == false && macapunoQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#d89074"
        block.classList.add("macapuno")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += macapunoPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        macapunoInCart = true
        macapunoChangeQuantity(0)
    }

})

/* avocado */
const avocadoDecrease = document.querySelector(".menu__quantityContainerDecrease.avocado");
const avocadoIncrease = document.querySelector(".menu__quantityContainerIncrease.avocado");

const avocadoPriceContainer = document.querySelector(".menu__itemPrice.avocado");
let avocadoPrice = 0

const avocadoQuantityContainer = document.querySelector(".menu__quantity.avocado")
avocadoQuantityContainer.value = 0
let avocadoQuantity = 0

const avocadoAdd = document.querySelector(".menu__itemAddButton.avocado")
let avocadoInCart = false
let avocadoSavedPrice = 0

function avocadoChangePrice(n) {

    avocadoPrice = n * 300
    avocadoPriceContainer.textContent  = `₱ ${avocadoPrice}.00`

}

function avocadoChangeQuantity(n) {

    avocadoQuantity = Number(n)
    avocadoQuantityContainer.value = avocadoQuantity

    avocadoChangePrice(avocadoQuantity)

}

avocadoQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        avocadoChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        avocadoChangeQuantity(0)

    } else {

        avocadoChangeQuantity(e.target.value)

    }

})

avocadoDecrease.addEventListener('click', () => {
    if (avocadoQuantity != 0 ) { 

        avocadoChangeQuantity( avocadoQuantity - 1 )
    
    }

})

avocadoIncrease.addEventListener('click', () => {
    if (avocadoQuantity != 10 ) { 

        avocadoChangeQuantity( avocadoQuantity + 1 )


    }
})

avocadoAdd.addEventListener('click', () => {

    if ( avocadoInCart == false && avocadoQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#568203"
        block.classList.add("avocado")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += avocadoPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        avocadoInCart = true
        avocadoChangeQuantity(0)
    }

})

/* cheese */
const cheeseDecrease = document.querySelector(".menu__quantityContainerDecrease.cheese");
const cheeseIncrease = document.querySelector(".menu__quantityContainerIncrease.cheese");

const cheesePriceContainer = document.querySelector(".menu__itemPrice.cheese");
let cheesePrice = 0

const cheeseQuantityContainer = document.querySelector(".menu__quantity.cheese")
cheeseQuantityContainer.value = 0
let cheeseQuantity = 0

const cheeseAdd = document.querySelector(".menu__itemAddButton.cheese")
let cheeseInCart = false
let cheeseSavedPrice = 0

function cheeseChangePrice(n) {

    cheesePrice = n * 300
    cheesePriceContainer.textContent  = `₱ ${cheesePrice}.00`

}

function cheeseChangeQuantity(n) {

    cheeseQuantity = Number(n)
    cheeseQuantityContainer.value = cheeseQuantity

    cheeseChangePrice(cheeseQuantity)

}

cheeseQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        cheeseChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        cheeseChangeQuantity(0)

    } else {

        cheeseChangeQuantity(e.target.value)

    }

})

cheeseDecrease.addEventListener('click', () => {
    if (cheeseQuantity != 0 ) { 

        cheeseChangeQuantity( cheeseQuantity - 1 )
    
    }

})

cheeseIncrease.addEventListener('click', () => {
    if (cheeseQuantity != 10 ) { 

        cheeseChangeQuantity( cheeseQuantity + 1 )


    }
})

cheeseAdd.addEventListener('click', () => {

    if ( cheeseInCart == false && cheeseQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#ffa600"
        block.classList.add("cheese")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += cheesePrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        cheeseInCart = true
        cheeseChangeQuantity(0)
    }

})

/* buko sherbet */
const bukoSherbetDecrease = document.querySelector(".menu__quantityContainerDecrease.bukoSherbet");
const bukoSherbetIncrease = document.querySelector(".menu__quantityContainerIncrease.bukoSherbet");

const bukoSherbetPriceContainer = document.querySelector(".menu__itemPrice.bukoSherbet");
let bukoSherbetPrice = 0

const bukoSherbetQuantityContainer = document.querySelector(".menu__quantity.bukoSherbet")
bukoSherbetQuantityContainer.value = 0
let bukoSherbetQuantity = 0

const bukoSherbetAdd = document.querySelector(".menu__itemAddButton.bukoSherbet")
let bukoSherbetInCart = false
let bukoSherbetSavedPrice = 0


function bukoSherbetChangePrice(n) {

    bukoSherbetPrice = n * 300
    bukoSherbetPriceContainer.textContent  = `₱ ${bukoSherbetPrice}.00`

}

function bukoSherbetChangeQuantity(n) {

    bukoSherbetQuantity = Number(n)
    bukoSherbetQuantityContainer.value = bukoSherbetQuantity

    bukoSherbetChangePrice(bukoSherbetQuantity)

}

bukoSherbetQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        bukoSherbetChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        bukoSherbetChangeQuantity(0)

    } else {

        bukoSherbetChangeQuantity(e.target.value)

    }

})

bukoSherbetDecrease.addEventListener('click', () => {
    if (bukoSherbetQuantity != 0 ) { 

        bukoSherbetChangeQuantity( bukoSherbetQuantity - 1 )
    
    }

})

bukoSherbetIncrease.addEventListener('click', () => {
    if (bukoSherbetQuantity != 10 ) { 

        bukoSherbetChangeQuantity( bukoSherbetQuantity + 1 )


    }
})

bukoSherbetAdd.addEventListener('click', () => {

    if ( bukoSherbetInCart == false && bukoSherbetQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundColor = "#85FFBD"
        block.style.backgroundImage = "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
        
        block.classList.add("bukoSherbet")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += bukoSherbetPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        bukoSherbetInCart = true
        bukoSherbetChangeQuantity(0)
    }

})

/* buko pandan sherbet */
const bukoPandanSherbetDecrease = document.querySelector(".menu__quantityContainerDecrease.bukoPandanSherbet");
const bukoPandanSherbetIncrease = document.querySelector(".menu__quantityContainerIncrease.bukoPandanSherbet");

const bukoPandanSherbetPriceContainer = document.querySelector(".menu__itemPrice.bukoPandanSherbet");
let bukoPandanSherbetPrice = 0

const bukoPandanSherbetQuantityContainer = document.querySelector(".menu__quantity.bukoPandanSherbet")
bukoPandanSherbetQuantityContainer.value = 0
let bukoPandanSherbetQuantity = 0

const bukoPandanSherbetAdd = document.querySelector(".menu__itemAddButton.bukoPandanSherbet")
let bukoPandanSherbetInCart = false
let bukoPandanSherbetSavedPrice = 0

function bukoPandanSherbetChangePrice(n) {

    bukoPandanSherbetPrice = n * 300
    bukoPandanSherbetPriceContainer.textContent  = `₱ ${bukoPandanSherbetPrice}.00`

}

function bukoPandanSherbetChangeQuantity(n) {

    bukoPandanSherbetQuantity = Number(n)
    bukoPandanSherbetQuantityContainer.value = bukoPandanSherbetQuantity

    bukoPandanSherbetChangePrice(bukoPandanSherbetQuantity)

}

bukoPandanSherbetQuantityContainer.addEventListener('input', (e) => {
    
    if ( e.target.value > 10 ) {

        bukoPandanSherbetChangeQuantity(10)

    } else if ( e.target.value < 0 ) {

        bukoPandanSherbetChangeQuantity(0)

    } else {

        bukoPandanSherbetChangeQuantity(e.target.value)

    }

})

bukoPandanSherbetDecrease.addEventListener('click', () => {
    if (bukoPandanSherbetQuantity != 0 ) { 

        bukoPandanSherbetChangeQuantity( bukoPandanSherbetQuantity - 1 )
    
    }

})

bukoPandanSherbetIncrease.addEventListener('click', () => {
    if (bukoPandanSherbetQuantity != 10 ) { 

        bukoPandanSherbetChangeQuantity( bukoPandanSherbetQuantity + 1 )


    }
})

bukoPandanSherbetAdd.addEventListener('click', () => {

    if ( bukoPandanSherbetInCart == false && bukoPandanSherbetQuantity != 0 ) {
        const block = document.createElement("span")
        block.style.width = "16px"
        block.style.height = "16px"
        block.style.border = "1px darkslategray solid"
        block.style.backgroundImage = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )"
        
        block.classList.add("bukoPandanSherbet")
        block.style.content = "U"

        cart.appendChild(block)

        totalPrice += bukoPandanSherbetPrice
        overallPrice.textContent = `₱ ${totalPrice}.00`
    
        bukoPandanSherbetInCart = true
        bukoPandanSherbetChangeQuantity(0)
    }

})