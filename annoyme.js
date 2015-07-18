"use strict";
(function() {
var CHANCE = Object.freeze({
    LOW: 0.05,
    MEDIUM: 0.15,
    HIGH: 0.3,
    VERY_HIGH: 0.5,
    OBVIOUS: 1
});

class Annoyance {
    constructor(chanceLevel) {
        this.chanceLevel = chanceLevel;
    }
    
    run() {
        if(this.shouldIRun())
            console.log("I run like the wind.");
    }
    
    shouldIRun() {
        var should = false;
        var rand = Math.random();
        if(rand <= this.chanceLevel)
            should = true;
        return should;
    }
}

class RickRoll extends Annoyance {
    run() {
        var self = this;
        $("a").each(function(){
            if(self.shouldIRun())
                $(this).attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        });
    }
}    

$(document).ready(function(){
    var annoyances = [new RickRoll(CHANCE.LOW)];
    annoyances.forEach(function(current){
        if(current instanceof Annoyance) {
            current.run();
        }
    });
});
}());