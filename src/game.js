const { Asteroid } = require("./asteroid.js");

function Game() {
    // this.DIM_X = DIM_X;
    // this.DIM_Y = DIM_Y;
    // this.NUM_ASTEROIDS = NUM_ASTEROIDS;
    this.DIM_X = 500;
    this.DIM_Y = 500;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
};

Game.prototype.addAsteroids = function () {
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {

        this.asteroids.push(new Asteroid({
            pos: this.randomPosition(),
            game: this
        }));
    }
};

Game.prototype.randomPosition = function () {
    let pos = [0, 0];

    pos[0] = Math.floor(Math.random() * Math.floor(this.DIM_X));
    pos[1] = Math.floor(Math.random() * Math.floor(this.DIM_Y));

    return pos;
};

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

    this.asteroids.forEach(asteroid => {
        asteroid.draw(ctx)
    });
};

Game.prototype.move_objects = function(){
    this.asteroids.forEach(asteroid => {
        asteroid.move()
    });
}

Game.prototype.wrap = function(pos){
    pos[0] = pos[0] % this.DIM_X;
    pos[1] = pos[1] % this.DIM_Y;
    return pos;
}

module.exports = {
    Game
}