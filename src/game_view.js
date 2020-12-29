const {Game} = require("./game.js");

function GameView(game, ctx){
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    setInterval(()=>{
        this.game.draw(this.ctx);
        this.game.move_objects();
    }, 20);
}

module.exports = {
    GameView
}