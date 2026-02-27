let iconElement = 
` 
all.svg
cart.svg
chevon-right.svg
copy.svg
cube.svg
file.svg
fire.svg
gear.svg
hamburger.svg
heart.svg
home.svg
input-calendar.svg
input-credit-card.svg
input-lock.svg
input-person.svg
input-reveal.svg
input-search.svg
input-unreveal.svg
link.svg
news.svg
person.svg
rocket.svg
stack.svg
star.svg
truck.svg
wrench.svg`.match(/^[a-z-]+/mg)

for (element of iconElement) {
    console.log(`.${element} {
    --icon-url: url(/assets/svg/${element}.svg)
}`)
}