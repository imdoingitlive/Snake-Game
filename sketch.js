var snake;
var scl = 20;
var highScore = 0;
var food;

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('sketch');

    snake = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation () {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);

    if (snake.eat(food)) {
        pickLocation();
    }

    snake.death();
    snake.update();
    snake.show();

    fill(192, 90, 90);
    rect(food.x, food.y, scl, scl);

    var score = snake.tail.length * 100;

    if (highScore < score) {
        highScore = score;
    }

    textAlign(LEFT, TOP);
    textSize(20);
    textStyle(BOLD);
    fill('#5ac1c1');
    text("SCORE: " + score, width-580, 30);
    text("HIGH SCORE: " + highScore, width-580, 10);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    }
}