"use strict";
const EventEmitter = require('events');
class Clock extends EventEmitter {
    constructor(){
        super();
    }
    tick(){
        let self = this;
        setInterval(function(){
            self.emit('tick');
        }, 1000);
    }
}

const clock = new Clock();
clock.on('tick', ()=>{
    console.log('woohoo');
});
clock.tick();

