import * as PIXI from "pixi.js"
import { settings } from "pixi.js"
import { UI } from "./ui"
import { Settings } from "./settings"
import { Game } from "./game"

export class Button extends PIXI.Sprite{
    game: Game
    constructor(texture: PIXI.Texture, ui: UI, game: Game) {
        super(texture)

        this.game = game
        this.scale.set(0.03)
        

        this.interactive = true
        this.on('pointerdown', () => this.onClick())
    }

    onClick(){
        new Settings(300, 100, this.game)
    }
}