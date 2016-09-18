var canvas;
var ctx;
var cellSize;
var game;



/// PIXEL ART ///
////////////////////////////////////////////////////////////////////////////////

pixCharacter =  [
  [ [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ','#','#','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
    [' ',' ','#','#',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ','#','#','#',' ',' ',' ',' ',' ',' ','#','#','#',' ',' '],
    [' ',' ',' ',' ','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
    ['#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#',' '],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ',' ',' ','#',' '],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ',' ',' ','#',' '],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#'],
    ['#','#',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ','#',' ',' ',' ',' ','#'],
    [' ','#',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#',' ',' ',' ','#'],
    [' ','#',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ','#'],
    [' ','#','#',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ','#'],
    [' ',' ','#',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#',' ','#',' '],
    [' ',' ','#','#',' ',' ',' ',' ',' ','#',' ','#',' ','#',' ',' ',' ','#',' '],
    [' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
    [' ',' ',' ','#','#','#','#',' ',' ',' ',' ',' ',' ','#','#','#',' ',' ',' '],
    [' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ','#',' ',' ',' '],
    [' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' '],
    [' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' '] ],

  [ [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#','#',' ',' ',' ',' ',' '],
    [' ',' ','#','#','#','#','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ','#','#','#',' ',' ',' ',' ',' ',' ','#','#','#',' ',' '],
    [' ',' ',' ',' ','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
    ['#','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#',' '],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ',' ',' ','#',' '],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ',' ',' ','#',' '],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' '],
    ['#','#',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ','#',' ',' ',' ','#',' '],
    [' ','#',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#',' ',' ','#',' '],
    [' ','#',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#',' ',' ','#',' '],
    [' ','#','#',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ','#',' '],
    [' ',' ','#',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ','#',' '],
    [' ',' ','#','#',' ',' ',' ','#',' ','#',' ','#',' ','#',' ',' ',' ','#',' '],
    [' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
    [' ',' ',' ','#','#','#','#',' ',' ',' ',' ',' ',' ','#','#','#',' ',' ',' '],
    [' ',' ',' ',' ','#',' ','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' '],
    [' ',' ',' ','#','#',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '] ],

    [ [' ',' ',' ',' ','#','#',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
      [' ',' ',' ','#',' ',' ','#',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ','#','#','#',' ',' ',' ',' ',' ',' ','#','#','#',' ',' '],
      [' ',' ',' ',' ','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
      [' ','#','#','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#',' '],
      ['#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' '],
      ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#',' ','#','#',' ',' ','#',' '],
      ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','#'],
      ['#','#',' ',' ',' ',' ',' ',' ',' ','#',' ','#',' ','#',' ',' ',' ',' ','#'],
      [' ','#',' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#',' ',' ',' ','#'],
      [' ','#',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#','#',' ',' ','#'],
      [' ','#','#',' ',' ',' ',' ','#','#','#','#','#','#','#','#',' ',' ',' ','#'],
      [' ',' ','#',' ',' ',' ',' ',' ','#','#','#','#','#','#','#',' ',' ','#',' '],
      [' ',' ','#','#',' ',' ',' ',' ',' ','#',' ','#',' ','#',' ',' ',' ','#',' '],
      [' ',' ',' ','#','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
      [' ',' ',' ',' ','#','#','#',' ',' ',' ',' ',' ',' ','#','#','#',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ','#','#','#','#','#','#','#','#',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' '] ]
];



/// CLASSES ///
////////////////////////////////////////////////////////////////////////////////
/// BLOCK CLASS (Constructor) ///

function Block(cellsize, x, y, speed, pix) {
  this.cellSize = cellSize;
  this.posX = x * cellSize;
  this.posY = y * cellSize;
  this.speed = speed * cellSize;
  this.pix = pix;
  this.images = [];
}

Block.prototype.getX = function() {
  return this.posX;
}

Block.prototype.getY = function() {
  return this.posY;
}

Block.prototype.getSpeed = function() {
  return this.speed;
}

Block.prototype.setX = function(x) {
  this.posX = x;
}

Block.prototype.setY = function(y) {
  this.posY = y;
}

Block.prototype.setSpeed = function(speed) {
  this.speed = speed;
}

Block.prototype.drawFromArray = function(array, canvasCtx) {
  //start coordinates on the canvas, left-top corner
  var coord_x = 0;
  var coord_y = 0;
  var arrLength = array.length;

  for (var i=0; i<arrLength; i++){		//start from first line of the map array
    var rowLength = array[i].length;

    for (var j=0; j<rowLength; j++){		//check each element in that line

      if (array[i][j] === '#'){
        canvasCtx.fillStyle = '#333';
        canvasCtx.fillRect(coord_x, coord_y, this.cellSize, this.cellSize);
      }
      coord_x += this.cellSize;
    }
    coord_y += this.cellSize;		//after line check is complete, it goes to next map line
    coord_x = 0;		//sets x to 0, as check of new line start from the beginning
  }
}

Block.prototype.createImage = function(imageNr) {
    // create a character canvas
    var picture = document.createElement('canvas');

    // 20 cells width and height
    picture.width = this.cellSize*20;
    picture.height = this.cellSize*20;
    var pictureCtx = picture.getContext('2d');

    // draw a character image
    this.drawFromArray(this.pix[imageNr], pictureCtx);
    return picture;
}

Block.prototype.drawImages = function() {
  //draw character images
  this.images = [];
  for (var i=0; i<this.pix.length; i++) {
    var image = this.createImage(i);
    this.images.push(image);
  }
}

Block.prototype.fitSize = function(cellSize) {
  this.cellSize = cellSize;
  this.setX(heroX * cellSize);
  this.setY(heroY * cellSize);
  this.setSpeed(heroSpeed * cellSize);
  this.drawImages();
};


/// CHARACTER CLASS (Constructor) ///

function Character(cellSize, x, y, speed, pix) {
  // Reuse initialization
  Block.call(this, cellSize, x, y, speed, pix);

  // image type pointer
  this.runPosition = 0;
  this.jumpHeight = 30;
  this.jumpHeightCounter = this.jumpHeight;
  this.jumping = false;
  this.landing = false;
}

// inherit form a Block
Character.prototype = new Block();
// use its own constructor
Character.prototype.constructor = Character;
// add a method
Character.prototype.jump = function() {
  this.jumping = true;
};

////////////////////////////////////////////////////////////////////////////////



canvas = document.getElementById('canvas-game');
ctx = canvas.getContext("2d");

// on resize or screen orientation change
window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('orientationchange', resizeCanvas, false);



// draw a first canvas
function init() {
  canvas.width = window.innerWidth;
  canvas.height = canvas.width/4;

  var seizePoint = canvas.height/3;

  // height and width of an image cell
  cellSize = seizePoint/20;
}
init();


// define a character
var heroX  = 10;
var heroY = 40;
var heroSpeed = 60;
var hero = new Character(cellSize, heroX, heroY, heroSpeed, pixCharacter);


window.onclick = function() {
  if (hero.landing == false) {
    hero.jump();
  }
};
window.touchstart = function() {
  if (hero.landing == false) {
    hero.jump();
  }
};


// resize a canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = canvas.width/4;

  var seizePoint = canvas.height/3;

  // height and width of an image cell
  cellSize = seizePoint/20;

  // resize character images and fit positions
  hero.fitSize(cellSize);
}
resizeCanvas();


// loop function
function run() {
	update((Date.now() - time) / 1000);
	drawScene();
	time = Date.now();
}


// counter to change run images
var runCounter = 0;

function update(mod) {

  if (!hero.jumping) {

    // if on ground - running
    if (hero.landing == false) {
      runCounter += 1;
      if (runCounter > 7) {
        hero.runPosition = hero.runPosition == 0 ? 1 : 0;
        runCounter = 0;
      }
    }

    // same as hero.posY += hero.speed * mod
    hero.setY(hero.getY() + hero.getSpeed() * mod);
    if (hero.getY() + cellSize * 20 >= canvas.height) {
      hero.setY(hero.getY() - hero.getSpeed() * mod);
      hero.landing = false;
    }

  } else {
    // in air
    hero.landing = true;
    // reset counter for later use
    runCounter = 0;
    // draw a jumping image
    hero.runPosition = 2;

    // move up
    hero.setY(hero.getY() - hero.getSpeed() * mod);
		hero.jumpHeightCounter -= 1;

    // reached jump height
    if (hero.jumpHeightCounter <= 0) {
      hero.jumping = false;
      hero.jumpHeightCounter = hero.jumpHeight;

    }
  }

}

function drawScene() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (hero.runPosition == 0) {
    ctx.drawImage(hero.images[0], hero.getX(), hero.getY());
  } else if(hero.runPosition == 1) {
    ctx.drawImage(hero.images[1], hero.getX(), hero.getY());
  } else if(hero.runPosition == 2) {
    ctx.drawImage(hero.images[2], hero.getX(), hero.getY());
  }
}


var time = Date.now();
setInterval(run, 20);
