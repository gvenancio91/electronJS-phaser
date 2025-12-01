import { mainLoad } from "./mainLoad.js";
import { mainScene } from "./mainScene.js";

let game = new Phaser.Game({

    width: 800,
    height: 600,
    scene:[
        mainLoad,
        mainScene
    ]

});