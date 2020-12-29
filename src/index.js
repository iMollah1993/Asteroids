// object destructuring i.e. {MovingObject}
const {MovingObject} = require("./moving_object.js");
const {Asteroid} = require("./asteroid.js");
const {Game} = require("./game.js");
const {GameView} = require("./game_view");

// gives access to these classes to the user in the chrome console
// testing purposes only
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });
    // mo.draw(ctx);

    // const as = new Asteroid({
    //     pos: [30,30]
    // });

    // as.draw(ctx);

    const first_game = new Game({});

    const gameView = new GameView(first_game, ctx);
    gameView.start();
});