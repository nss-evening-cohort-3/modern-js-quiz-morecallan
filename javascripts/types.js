"use strict";

/********************************************
**          Browserify Dependencies        **
********************************************/
var $ = require("jquery"),
    robots = require("robots.js");



/********************************************
**        HOLDS ALL ASSETS FOR TYPES       **
********************************************/
var RobotTypes = {};



/********************************************
**     LOGIC REQ 2: Define 3 type func     **
**     LOGIC REQ 3: Define 2 type func     **
********************************************/
RobotTypes.PlayerTypes = ()  => {
    this.allowedTypes = ["Drone", "Bipedal", "ATV"];
};



/********************************************
**               ROBOT TYPES               **
*****             - Drone               *****
*****             - Bipedal             *****
*****             - Cyborg              *****
********************************************/



/****************** DRONES *****************/
/*******   Drone Type Base Object  *********/
RobotTypes.Drone = ()  => {
    this.name = "Drone"
    this.robotType = "Drone";
    this.healthMax = 150;
};
RobotTypes.Drone.prototype = new RobotTypes.PlayerTypes();


/***   Drone Models: DJ PHANTOM, Bebop   ***/
RobotTypes.DJPhantom = () => {
    // LR4: Give each robot model a different range of health
    this.originalHealth = Math.floor(Math.random() * 40 + 110);
    this.health = originalHealth;
}
RobotTypes.DJPhantom.prototype = new RobotTypes.Drone();

RobotTypes.Bebop = () => {
    // LR4: Give each robot model a different range of health
    this.originalHealth = Math.floor(Math.random() * 50 + 100);
    this.health = originalHealth;
}
RobotTypes.DJPhantom.prototype = new RobotTypes.Drone();
/*******************************************/



/***************** BIPEDAL *****************/
/******   Bipedal Type Base Object  ********/
RobotTypes.Bipedal = ()  => {
    this.name = "Bipedal"
    this.robotType = "Bipedal";
    this.healthMax = 110;
};
RobotTypes.Bipedal.prototype = new RobotTypes.PlayerTypes();


/**  Bipedal Models: Chicken Walker, HUBO **/
RobotTypes.ChickenWalker = () => {
    // LR4: Give each robot model a different range of health
    this.originalHealth = Math.floor(Math.random() * 20 + 90);
    this.health = originalHealth;
}
RobotTypes.ChickenWalker.prototype = new RobotTypes.Bipedal();

RobotTypes.HUBO = () => {
    // LR4: Give each robot model a different range of health
    this.originalHealth = Math.floor(Math.random() * 30 + 80);
    this.health = originalHealth;
}
RobotTypes.HUBO.prototype = new RobotTypes.Bipedal();
/*******************************************/



/****************** CYBORG *****************/
/*******   Cyborg Type Base Object  ********/
RobotTypes.Cyborg = ()  => {
    // LR4: Give each robot model a different range of health
    this.name = "Cyborg"
    this.robotType = "Cyborg";
    this.healthMax = 100;
};
RobotTypes.Cyborg.prototype = new RobotTypes.PlayerTypes();

/** Cyborg Models: InspectorGadget, BionicWoman **/
RobotTypes.InspectorGadget = () => {
    // LR4: Give each robot model a different range of health
    this.originalHealth = Math.floor(Math.random() * 50 + 50);
    this.health = originalHealth;
}
RobotTypes.InspectorGadget.prototype = new RobotTypes.Cyborg();

RobotTypes.BionicWoman = () => {
    // LR4: Give each robot model a different range of health
    this.originalHealth = Math.floor(Math.random() * 60 + 40);
    this.health = originalHealth;
    this.moodSwings = true;
}
RobotTypes.BionicWoman.prototype = new RobotTypes.Cyborg();
/*******************************************/




/********************************************
**             Browserify Exports          **
********************************************/
module.exports = {
  RobotTypes
};
