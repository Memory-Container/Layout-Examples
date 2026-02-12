let header = document.querySelectorAll(`header`)

header.forEach(element => {
    let indicator = element.querySelector(".indicator")
    let elements = element.querySelectorAll("li:not(.indicator)")
    let hamburger = element.querySelector(".hamburger") ?? 0
    let innerWrap = element.querySelector(".inner-wrapper")
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            element.classList.toggle("shrink")
            if (innerWrap.className.includes("shrink")) {
                setTimeout(()=>{innerWrap.classList.toggle("shrink")}, 50)
            } else {
                setTimeout(()=>{innerWrap.classList.toggle("shrink")}, 0)
            }
        })
    }
    function moveIndicator(tab, indicator) {
        if (element.className.includes("style3")) {
            indicator.style.left = tab.offsetLeft + tab.offsetWidth / 2 - 3 + 'px'
        } else {
            indicator.style.left = tab.offsetLeft + 'px'
            indicator.style.width = tab.offsetWidth + 'px'
        }
        console.log(element.className.includes("style3"))
    }
    elements.forEach(element1 => {
        element1.addEventListener("click", () => {
            elements.forEach(element2 => {
                element2.classList.remove("active")
            })
            element1.classList.toggle("active")
            moveIndicator(element1, indicator)
        })
    })
    elements[0].classList.toggle("active")
    moveIndicator(elements[0], indicator)
})