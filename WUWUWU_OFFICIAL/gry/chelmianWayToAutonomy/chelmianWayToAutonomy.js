//test JavascriptFile
//gdy testujesz upewnij się że potem nie ma znowu wywołania getContext
//bo ono je zamaluje
// var c = document.getElementById("gameCanvasFlappyBirds");
// var ctx = c.getContext("2d");
// ctx.rect(20, 20, 150, 100);
// ctx.stroke();

///select our canvas and getContext 2d

let cvs = document.getElementById("gameCanvasFlappyBirds");
let ctx = cvs.getContext("2d");


//Create Image
let bird = new Image(25,25);
let bg = new Image(cvs.width, cvs.height); //background upper
let fg = new Image(); //floor background
let pipeNorth = new Image();
let pipeSouth = new Image();

//download source from url

bird.src = "img_chelmianWayToAutonomy/zerca.png";
bg.src = "img_chelmianWayToAutonomy/bg.png"; //background upper
fg.src = "img_chelmianWayToAutonomy/fg.png"; //floor background
pipeNorth.src = "img_chelmianWayToAutonomy/pipeNorth.png";
pipeSouth.src = "img_chelmianWayToAutonomy/pipeSouth.png";

//Create sounds
var fly = new Audio();
var scor = new Audio();

//download source from url
// /////////fly.src = "sounds/fly.mp3";
// //////////////scor.src = "sounds/score.mp3";

// gap between pipe north and south
var gap = 85;

//the constant is the south pipe position, and it is calculating by adding
//the gap to the north Pipe
var constant;

//the bird X and Y positions
var bX = 10;
var bY = 150;

// that variable say how pixels brd falls at time
var gravity = 1.5;

// we initiate the players score
var score = 0;

//The player control the bird using any key on the keyboard
//We need to ad an eventListener to our document, and when the player p
// press a key, we run a function moveUp, that will move up 
document.addEventListener("keydown", moveUp);

//function to move
function moveUp() {
  bY -= 25;
  fly.play();
}

//table for pipe
var pipe = [];

pipe[0] = {
  x : cvs.width, 
  y : 0
};


//draw Image

function draw() {

  ctx.drawImage( bg, 0, 0, cvs.width, cvs.height-fg.height); //rysowania na canvasie
  for (var i = 0; i < pipe.length ; i++ ){
    
      constant = pipeNorth.height + gap; // position of northPipe
      ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y );
      ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant );

      pipe[i].x--;

      if( pipe[i].x == 125 ){
        pipe.push({
            x : cvs.width,
            y : Math.floor(Math.random()*pipeNorth.height) - pipeNorth.height
        });
      }

      //detect collision

      //1 warunek
      //jesli szerokosc + pozycja ptaka jest wieksza 
      //od pozycji X rury plus szerokosc  rury
      //bX + bird.width >= pipe[i].x + pipeNorth.width 
      //i polożenie X ptaka jest jednocześnie mniejsze od szerokości i pozycji X rury 
      //&& bX <= pipe[i].x + pipeNorth.width 

      //2 warunek
      // do poprzedniego jesli jest dolozony
      //polożenie Y ptaka jest mniejsze wykosci rury plus pozycji Y (pozycja Y jest zero)
      //bY <= pipe[i].y + pipeNorth.height
      //ewentualnie połozenie + wysokośc ptaka jest wieksze od 
      //constans ( a więc wykosc Płn rury plus przerwa)
      // to cos
      //bY+bird.height >= pipe[i].y+constant

      //3 warunek 
      //sprawdza czy ptak plus wysokosc jest wieksze od floor grounda
      //żeby nie walnął w ziemie
      if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width 
        && (bY <= pipe[i].y + pipeNorth.height 
          || bY+bird.height >= pipe[i].y+constant) 
        || bY + bird.height >=  cvs.height - fg.height)
      {
        //location.reload();
        ctx.drawRect(10,10,10,10);
      }

      if( pipe[i].x == 5 ) {
          score++;
          scor.play() // to muzyka
      }
    }
console.log(bird.width+ " width");
console.log(bird.height+ " height")
    ctx.drawImage( fg, 0, cvs.height - fg.height);
    ctx.drawImage( bird, bX, bY, bird.height, bird.width);

    bY += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score :" + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);


  }


draw();
