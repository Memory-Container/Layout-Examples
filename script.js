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
let keysInfo = []
window.addEventListener("keydown", (e) => {
    keysInfo = [e.key, e.code, e.keyCode]
})
let telInput = document.querySelector("input[type='tel']")
telInput.addEventListener("input", () => {
    if ((telInput.value.length == 3 || telInput.value.length == 7) && (keysInfo[0] != "Delete" &&  keysInfo[0] != "Backspace")) {
        telInput.value+= '-'
    }
})

let passwordInput = document.querySelector("input.password")
let eyeIcon = document.querySelector(".eyeIcon")
eyeIcon.addEventListener("click", () => {
    if (eyeIcon.className.includes('input-eye-reveal')) {
        eyeIcon.classList.remove('input-eye-reveal')
        eyeIcon.classList.add('input-eye-unreveal')
        passwordInput.type = "text"
    } else {
        eyeIcon.classList.remove('input-eye-unreveal')
        eyeIcon.classList.add('input-eye-reveal')
        passwordInput.type = "password"
    }
})
passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length > 0) {
        eyeIcon.style.display = "block"
    } else {
        eyeIcon.style.display = "none"
    }
})

let ccInput = document.querySelector("input.credit-card")
let ccAdd = [5, 10, 15]
ccInput.addEventListener("input", () => {
    if ((ccAdd.includes(ccInput.value.length) && ccInput.value.length != 0) && (keysInfo[0] != "Delete" &&  keysInfo[0] != "Backspace")) {
        ccInput.value+= '-'
    }
})

const tagInput = document.querySelector("#add-user");
const tagsContainer = document.querySelector(".user-selected");

let username = [];

tagInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const value = tagInput.value.trim();
        if (!value) return;
        if (username.includes(value)) {
            tagInput.value = ""
            return;
        }
        username.push(value);
        tagInput.value = ""
        const user = document.createElement("span");
        user.classList.add("user");
        user.innerHTML = `
            <div class="user-img"></div>
            ${value}
            <span class="x">⨯</span>
        `
        tagsContainer.appendChild(user);
        user.querySelector(".x").addEventListener("click", () => {
            username = username.filter(name => name !== value)
            user.remove()
        });
    }
});

let current = [0, 0, 0, 0, 0]
document.querySelector('.layout4').querySelectorAll(".inner-layout").forEach(element => {
    let indicator = element.querySelector(".indicator")
    element.querySelectorAll(".container").forEach((crumb, idx) => {
        console.log(indicator)
        if (indicator) {
            function moveIndicator(tab, indicator) {
                    indicator.style.left = tab.offsetLeft + 'px'
                    indicator.style.width = tab.offsetWidth + 'px'
            }
            if (idx == 2) {
                moveIndicator(element.querySelectorAll(".container")[2], indicator)
            }
        }
        crumb.addEventListener("click", (e) => {
            if (indicator) {
                moveIndicator(crumb, indicator)
            }
            if (idx == 0 && !(element.className.includes("style1") || element.className.includes("style2"))) {
                element.querySelectorAll(".container")[idx].classList.add("current")
                element.querySelectorAll(".container")[idx].classList.remove("active")
            } else {
                element.querySelectorAll(".container")[0].classList.add("active")
            }
            for (let i = 0; i < element.querySelectorAll(".container").length; i++) {
                if (i < idx) {
                    element.querySelectorAll(".container")[i != 0 ? i : 0].classList.add("active")
                    if (!element.querySelectorAll(".icon:not(.icon.inside)")) {
                        element.querySelectorAll(".icon:not(.icon.inside)")[Math.max(Math.min(i, element.querySelectorAll(".container").length - 1), 0)].classList.add("active")
                    }
                    if (!(element.className.includes("style1") || element.className.includes("style2"))) {
                        element.querySelectorAll(".container")[idx].classList.add("current")
                    }
                    if (i != idx) {
                        element.querySelectorAll(".container")[i].classList.remove("current")
                    }
                } else {
                    if (i != 0) {
                        element.querySelectorAll(".container")[i].classList.remove("active")
                        if (idx != element.querySelectorAll(".container").length - 1 && !element.querySelectorAll(".icon:not(.icon.inside)")) {
                            element.querySelectorAll(".icon:not(.icon.inside)")[Math.max(Math.min(i, element.querySelectorAll(".container").length - 2), 0)].classList.remove("active")
                        }
                    }
                    if (i == 0 && !element.querySelectorAll(".icon:not(.icon.inside)")) {
                        element.querySelectorAll(".icon:not(.icon.inside)")[Math.max(Math.min(i, element.querySelectorAll(".container").length - 2), 0)].classList.remove("active")
                    }
                    if (i != idx) {
                        element.querySelectorAll(".container")[i].classList.remove("current")
                    }
                }
            }
        })
    })
})
function move(direction) {
    let main = document.querySelector('main')
    if (direction == "up" && main.style.top.match(/-?\d+/)[0] + 100 < 0) {
        main.style.top = Number(main.style.top.match(/-?\d+/)[0]) + 100 + "vh"
    }
    if (direction == "down" && main.style.top.match(/-?\d+/)[0] - 100 >= -400) {
        main.style.top = parseInt(main.style.top.match(/-?\d+/)[0]) - 100 + "vh"
    }
}
let input = document.querySelector('.input-container.style1')
let input2 = document.querySelector('.input-container.style1 input')
input.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation();
    input2.focus()
})