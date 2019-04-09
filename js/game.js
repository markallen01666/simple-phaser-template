// Simple Phaser 3 game template - M. Allen 2019

// Create new game scene
let gameScene = new Phaser.Scene("Game");

// Set scene parameters
gameScene.init = function() {

};

// Load assets into scene
gameScene.preload = function() {

};

// Create scene after loading game assets
gameScene.create = function() {

};

// Update frame
gameScene.update = function() {

};

// End of game
gameScene.gameOver = function() {

};

// Game configuration
let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  scene: gameScene
};

// Create game using the configuration
let game = new Phaser.Game(config);
