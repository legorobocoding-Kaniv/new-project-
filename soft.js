let item1: number
item1 = 2

let item2: number
item2 = 8

input.onButtonPressed(Button.A, function () {
    basic.showNumber(item1)    
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(item2)

})


if (item1 > 1) {
    item1 = 8;
}


if (item2 < 10) {
    item2 = 50;
}
