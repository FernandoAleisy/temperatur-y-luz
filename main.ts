let t = 0
let L = 0
input.onButtonPressed(Button.A, function () {
    t = 1
    L = 0
    basic.showString("-")
    while (t == 1) {
        basic.showNumber(input.temperature())
        while (input.temperature() <= 8) {
            music.playMelody("C5 - C5 - C5 - C5 - ", 120)
        }
        while (input.temperature() > 21) {
            music.playMelody("C5 - C5 - C5 - C5 - ", 120)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    t = 0
    L = 1
    basic.showString("-")
    while (L == 1) {
        while (input.lightLevel() <= 200) {
            while (input.lightLevel() <= 100) {
                music.playMelody("G - G - G - G - ", 120)
            }
            basic.showString("opt")
        }
        while (input.lightLevel() >= 200) {
            music.playMelody("G - G - G - G - ", 120)
        }
    }
})
