const Util = require("./utils.js");
const {MovingObject} = require("./moving_object");

function Asteroid(options){
    options.color = options.color || "grey";
    options.radius = options.radius || 15;
    options.vel = Util.randomVec(2);

    // using the next line does line 5 - 8 for us.
    MovingObject.call(this, options);
    // run MovingObject constructor
    // this refers to instance of Asteroid
};

Util.inherits(Asteroid, MovingObject);

module.exports = {
    Asteroid
}