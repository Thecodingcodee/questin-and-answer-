namespace SpriteKind {
    export const Npc1 = SpriteKind.create()
    export const Complete = SpriteKind.create()
    export const Npc2 = SpriteKind.create()
    export const Npc3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc1, function (sprite, otherSprite) {
    Dialog_mode = true
    game.showLongText("If a big factory is pumping waste into the water what kind of pollution is it", DialogLayout.Bottom)
    story.showPlayerChoices("Land and air pollution ", "Water pollution ")
    if (story.checkLastAnswer("Land and air pollution ")) {
        info.changeScoreBy(-5)
    } else if (story.checkLastAnswer("Water pollution ")) {
        info.changeScoreBy(5)
        Rosy.setKind(SpriteKind.Complete)
    } else {
    	
    }
    Dialog_mode = false
    pause(2000)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc2, function (sprite, otherSprite) {
    Dialog_mode = true
    game.showLongText("Does non properly disposed of trash damage the environment ", DialogLayout.Bottom)
    story.showPlayerChoices("No it's good for the environment ", "Yes it causes erosion")
    if (story.checkLastAnswer("No it's good for the environment ")) {
        info.changeScoreBy(-7)
    } else if (story.checkLastAnswer("Yes it causes erosion")) {
        info.changeScoreBy(8)
        Mookay.setKind(SpriteKind.Complete)
    } else {
    	
    }
    Dialog_mode = false
    pause(2000)
})
info.onScore(22, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc3, function (sprite, otherSprite) {
    Dialog_mode = true
    game.showLongText("2 over 5 divide by 8 over 21 multiplied by 37²", DialogLayout.Bottom)
    story.showPlayerChoices("21/6", "13/4")
    if (story.checkLastAnswer("21/6")) {
        info.changeScoreBy(10)
    } else if (story.checkLastAnswer("13/4")) {
        info.changeScoreBy(9)
        Doggo.setKind(SpriteKind.Complete)
    } else {
    	
    }
    pause(2000)
    Dialog_mode = false
})
let Dialog_mode = false
let Doggo: Sprite = null
let Mookay: Sprite = null
let Rosy: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let Trent = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f c f f f f f f . . 
    c f f f c c f f f f f f f 
    c f f f f f f f c f f f f 
    c c f f e e f f f c c c . 
    f c c f f e e f f f f f . 
    f f f b f e e f b f f f . 
    f f 4 1 f 4 4 f 1 4 f f . 
    e f e e 4 4 4 4 4 e f . . 
    e 4 4 4 e 7 7 7 b f e f . 
    . e 4 4 e 7 7 7 7 f 4 e . 
    . . e e 6 6 6 6 6 f . . . 
    . . . f f f f f f f . . . 
    . . . . . . . f f f . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Trent, tiles.getTileLocation(1, 0))
Rosy = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b e e 4 4 4 4 4 f b b f . 
    . . f 4 4 4 e d d d b f e f . . 
    . . f e 4 4 e d d d d c 4 e . . 
    . . . f e e d d b d b b f e . . 
    . . . f f 1 d 1 d 1 1 f f . . . 
    . . . . . f f f b b f . . . . . 
    `, SpriteKind.Npc1)
tiles.placeOnTile(Rosy, tiles.getTileLocation(7, 13))
Mookay = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Npc2)
tiles.placeOnTile(Mookay, tiles.getTileLocation(11, 6))
Doggo = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Npc3)
tiles.placeOnTile(Doggo, tiles.getTileLocation(15, 12))
scene.cameraFollowSprite(Trent)
Dialog_mode = false
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
info.startCountdown(35)
forever(function () {
    if (Dialog_mode == false) {
        controller.moveSprite(Trent)
    } else if (false) {
        controller.moveSprite(Trent, 0, 0)
    } else {
    	
    }
})
forever(function () {
    if (Dialog_mode == false) {
        controller.moveSprite(Rosy)
    } else if (Dialog_mode == true) {
        controller.moveSprite(Trent, 0, 0)
    } else {
    	
    }
})
forever(function () {
    if (Dialog_mode == false) {
        controller.moveSprite(Trent)
    } else if (Dialog_mode == true) {
        controller.moveSprite(Trent, 0, 0)
    } else {
    	
    }
})
