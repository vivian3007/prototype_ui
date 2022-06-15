import * as PIXI from "pixi.js"
import { settings } from "pixi.js"
import { Button } from "./button"
import { UI } from "./ui"
import { Game } from "./game"

export class Settings extends PIXI.Graphics{
    private game: Game
    constructor(x: number, y: number, game: Game) {
        super()

        this.game = game

        const settingsText = new PIXI.Text("Settings komen hier", {
            "align": "center",
            "fontFamily": "Comic Sans MS",
            "fontSize": 50,
        })

        settingsText.anchor.set(0.5)
        settingsText.x = 400
        settingsText.y = 200

        this.game.pixi.stage.addChild(settingsText)
    }
}