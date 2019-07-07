   
   
    const GAME_SPEED = 80;
    const CANVAS_BORDER_COLOUR = 'black';
    const CANVAS_BACKGROUND_COLOUR = "lightblue";
    const SNAKE_COLOUR = 'lightgreen';
    const SNAKE_BORDER_COLOUR = 'darkgreen';
    const FOOD_COLOUR = 'red';
    const FOOD_BORDER_COLOUR = 'darkred';


 

  function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}


    let kosciuszkoTeam = [
      {x: 10, y: 10}
    ]

    // The user's score
    let score = 0;
    // When set to true the kosciuszkoTeam is changing direction
    let changingDirection = false;
    // chelmianRecrut x-coordinate
    let chelmianRecrutX;
    // chelmianRecrut y-coordinate
    let chelmianRecrutY;
    // Horizontal velocity
    let dx = 10;
    // Vertical velocity
    let dy = 0;

    // Get the canvas element
    const gameCanvas = document.getElementById("gameCanvas");
    //wysokosc canvasa uzyskam przez gameCanvas.height, gameCanvas.width
    // Return a two dimensional drawing context
    const ctx = gameCanvas.getContext("2d");

    function makeImages(){
      chelmball = new Image();
      chelmball.src = 'img_snake/chelmkosckosa MINI.png';
      kosciuszkoball = new Image();
      kosciuszkoball.src = 'img_snake/koscMINI.png';
      russianBall = new Image();
      russianBall.src = 'img_snake/rus1.png';
      //chelmball.onload = function(){
        //ctx.drawImage(chelmball,0,0,50,50);
      //}

    }
    makeImages();
    // Start game
    main();
    // Create the first chelmianRecrut location
    createChelmianRecrut();
    // Call changeDirection whenever a key is pressed
    document.addEventListener("keydown", changeDirection);


    /**
     * Main function of the game
     * called repeatedly to advance the game
     */
    function main() {
      console.log("wit")
      // If the game ended return early to stop game
      if (didGameEnd()) return;

      console.log("witaj");
      setTimeout(function onTick() {
        changingDirection = false;
        clearCanvas();
        drawChelmianRecrut();
        advanceKosciuszkoTeam();
        drawSnake();

        // Call game again
        main();
      }, GAME_SPEED)
    }

    /**
     * Change the background colour of the canvas to CANVAS_BACKGROUND_COLOUR and
     * draw a border around it
     */
    function clearCanvas() {
      //  Select the colour to fill the drawing
      ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
      //  Select the colour for the border of the canvas
      ctx.strokestyle = CANVAS_BORDER_COLOUR;

      // Draw a "filled" rectangle to cover the entire canvas
      ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
      // Draw a "border" around the entire canvas
      ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);


    }

    /**
     * Draw the food on the canvas
     */
    function drawChelmianRecrut() {

      ctx.fillStyle = FOOD_COLOUR;
      ctx.strokestyle = FOOD_BORDER_COLOUR;
      //ctx.fillRect(foodX, foodY, 10, 10);
      //ctx.strokeRect(foodX, foodY, 10, 10);

      //chelmball.onload = function(){
        ctx.drawImage(chelmball,chelmianRecrutX,chelmianRecrutY,10,10);
      //}
    }

    /**
     * Advances the kosciuszkoTeam by changing the x-coordinates of its parts
     * according to the horizontal velocity and the y-coordinates of its parts
     * according to the vertical veolocity
     */
    function advanceKosciuszkoTeam() {
      // Create the new kosciuszkoTeam's head
      const head = {x: kosciuszkoTeam[0].x + dx, y: kosciuszkoTeam[0].y + dy};
      // Add the new head to the beginning of snake body
      kosciuszkoTeam.unshift(head);

      const didEatFood = kosciuszkoTeam[0].x === chelmianRecrutX 
                  && kosciuszkoTeam[0].y === chelmianRecrutY;
      if (didEatFood) {
        // Increase score
        score += 10;
        // Display score on screen
        document.getElementById('score').innerHTML = score;

        // Generate new chelmianRecrut location
        createChelmianRecrut();
      } else {
        // Remove the last part of kosciuszkoTeam body
        kosciuszkoTeam.pop();
      }
    }

    /**
     * Returns true if the head of the kosciuszkoTeam touched another part of the game
     * or any of the walls
     */
    function didGameEnd() {
      for (let i = 4; i < kosciuszkoTeam.length; i++) {
        if (kosciuszkoTeam[i].x === kosciuszkoTeam[0].x 
          && kosciuszkoTeam[i].y === kosciuszkoTeam[0].y) return true
      }

      const hitLeftWall = kosciuszkoTeam[0].x < 0;
      const hitRightWall = kosciuszkoTeam[0].x > gameCanvas.width - 10;
      const hitToptWall = kosciuszkoTeam[0].y < 0;
      const hitBottomWall = kosciuszkoTeam[0].y > gameCanvas.height - 10;

      return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
    }

    /**
     * Generates a random number that is a multiple of 10 given a minumum
     * and a maximum number
     * @param { number } min - The minimum number the random number can be
     * @param { number } max - The maximum number the random number can be
     */
    function randomTen(min, max) {
      return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    }

    /**
     * Creates random set of coordinates for the kosciuszkoTeam chelmianRecrut.
     */
    function createChelmianRecrut() {
      // Generate a random number the chelmianRecrut x-coordinate
      chelmianRecrutX = randomTen(0, gameCanvas.width - 10);
      // Generate a random number for the chelmianRecrut y-coordinate
      chelmianRecrutY = randomTen(0, gameCanvas.height - 10);

      // if the new chelmianRecrut location is where the kosciuszkoTeam currently is, generate a new food location
      kosciuszkoTeam.forEach(function isFoodOnSnake(part) {
        const foodIsoNsnake = part.x == chelmianRecrutX && part.y == chelmianRecrutY;
        if (foodIsoNsnake) createChelmianRecrut();
      });
    }

    /**
     * Draws the snake on the canvas
     */
    function drawSnake() {
      // loop through the snake parts drawing each part on the canvas
      kosciuszkoTeam.forEach(drawSnakePart)
    }

    /**
     * Draws a part of the snake on the canvas
     * @param { object } snakePart - The coordinates where the part should be drawn
     */
    function drawSnakePart(snakePart) {
      // Set the colour of the snake part
      ctx.fillStyle = SNAKE_COLOUR;

      // Set the border colour of the snake part
      ctx.strokestyle = SNAKE_BORDER_COLOUR;

      // Draw a "filled" rectangle to represent the kosciuszkoTeam part at the coordinates
      // the part is located
      //ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
      ctx.drawImage(kosciuszkoball,snakePart.x,snakePart.y,10,10);
      // Draw a border around the snake part
      //ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    /**
     * Changes the vertical and horizontal velocity of the kosciuszkoTeam according to the
     * key that was pressed.
     * The direction cannot be switched to the opposite direction, to prevent the 
     * kosciuszkoTeam
     * from reversing
     * For example if the the direction is 'right' it cannot become 'left'
     * @param { object } event - The keydown event
     */
    function changeDirection(event) {
      const LEFT_KEY = 37;
      const RIGHT_KEY = 39;
      const UP_KEY = 38;
      const DOWN_KEY = 40;
      /**
       * Prevent the kosciuszkoTeam from reversing
       * Example scenario:
       * kosciuszkoTeam is moving to the right. User presses down and immediately left
       * and the kosciuszkoTeam immediately changes direction without taking a step down first
       */
      if (changingDirection) return;
      changingDirection = true;

      const keyPressed = event.keyCode;

      const goingUp = dy === -10;
      const goingDown = dy === 10;
      const goingRight = dx === 10;
      const goingLeft = dx === -10;

      if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
      }
      if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
      }
      if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
      }
      if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
      }
    }