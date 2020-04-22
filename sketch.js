var canvas, backgroundImage;

var gameState = 0;
var citizenCount;
var citizen;
var vote1;
var email;
var database;
var allplayers;
var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
 
}
