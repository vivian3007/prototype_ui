import * as PIXI from 'pixi.js'
import settingsImage from "./images/settings.png"
import { UI } from './ui'

export class Game {
    private pixiWidth = 800
    private pixiHeight = 500
    
    public pixi: PIXI.Application
    public loader: PIXI.Loader
    private interface: UI

    constructor() {
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight, backgroundColor: 0x1099bb });
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader();
        this.loader.add('settingsTexture', settingsImage)
        this.loader.load(()=>this.loadCompleted());
    }

    public loadCompleted() {
        //create ui
        this.interface = new UI(this)
        this.pixi.stage.addChild(this.interface)
    }
}

let game = new Game()