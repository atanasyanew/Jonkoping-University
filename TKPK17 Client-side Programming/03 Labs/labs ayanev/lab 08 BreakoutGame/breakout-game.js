
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ballSound = document.getElementById("audio");

    function getTime() {
        var today = new Date();
        var y = today.getFullYear();
        var M = today.getMonth();
        var d = today.getDay();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        return y + "." + M + "." + d + " " + h + ":" + m + ":" + s;
    }

    var ball = {
        x: canvas.width / 2,
        y: canvas.height - 10, //-padding
        r: 10,
        //  color: document.getElementById("ballColor").value,
        speed: 4,
        dx: 1,
        dy: -1,
        draw: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            //ctx.fillStyle = this.color;
            ctx.fillStyle = document.getElementById("ballColor").value;
            ctx.fill();
            ctx.closePath();
        }
    };


    var paddle = {
        height: 10,
        width: canvas.width * 0.20,
        x: (canvas.width - this.width) / 2,
        // y: canvas.height-this.height, //bug when replace it in  ctx.rect
        rightPressed: false,
        leftPressed: false,
        color: "#F4512C",
        sensitive: 5,
        draw: function () {
            //context.rect(x,y,width,height);
            ctx.beginPath();
            ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }


    var game = {
        lives: 3,
        score: 0,
        textFonts: "16px Arial",
        color: "#F4512C",
        drawScore: function () {
            //context.fillText(text,x,y,maxWidth);
            ctx.font = this.textFonts;
            ctx.fillStyle = this.color;
            ctx.fillText("Score: " + this.score, 8, 20);
        },
        drawLives: function () {
            ctx.font = this.textFonts;
            ctx.fillStyle = this.color;
            ctx.fillText("Lives: " + this.lives, canvas.width - 65, 20);
        },
        ballSound: function () {
            var enabledSounds = document.getElementById("soundCheck").checked;
            if (enabledSounds) {
                ballSound.play();
            }
        },
        saveScore: function () {
            //JSON OBJECT
            var player = {
                date: getTime(),
                GameScore: this.score
            }

            //if there is no set localStorage
            if (localStorage.gameScoreBook == undefined) {
                var book = []; //array for localStorage
                book.push(player); //add the obj to the array
                localStorage.setItem("gameScoreBook", JSON.stringify(book)); //set localStorage
            } else {
                var book = JSON.parse(localStorage.gameScoreBook); //get localstorage data
                book.push(player); //add new json obj to the array
                localStorage.setItem("gameScoreBook", JSON.stringify(book)); //update localstorage
            }

        },

        displayScoreBook: function () {
            //get localstorage data
            var book = JSON.parse(localStorage.gameScoreBook);
            var list = "";
            for (i = book.length - 1; i >= 0; i--) {
                list += "<li> Date: " + book[i]["date"] + " | ";
                list += "Score: " + book[i]["GameScore"] + "</li>";
            }
            document.getElementById("scoreList").innerHTML = list;
        }
    }

    var brick = {
        width: ball.r * 8,
        height: ball.r * 4,
        padding: 8,
        OffsetTop: 30,
        OffsetLeft: 40,
        //TO DO: calc how manny bricks we need for a row based on canvas width
        rows: 6,
        cols: 3,
        color: "#F4512C",

        drawBricks: function () {
            for (c = 0; c < brick.cols; c++) {
                for (r = 0; r < brick.rows; r++) {
                    if (bricks[c][r].status == 1) {
                        var brickX = (r * (this.width + this.padding)) + this.OffsetLeft;
                        var brickY = (c * (this.height + this.padding)) + this.OffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, this.width, this.height);
                        ctx.fillStyle = this.color;
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }
    }

    var bricks = [];

    for (c = 0; c < brick.cols; c++) {
        bricks[c] = [];
        for (r = 0; r < brick.rows; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    //EVENTS
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);

    function keyDownHandler(e) {
        if (e.keyCode == 39) {
            paddle.rightPressed = true;
        }
        else if (e.keyCode == 37) {
            paddle.leftPressed = true;
        }
    }
    function keyUpHandler(e) {
        if (e.keyCode == 39) {
            paddle.rightPressed = false;
        }
        else if (e.keyCode == 37) {
            paddle.leftPressed = false;
        }
    }
    function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
            paddle.x = relativeX - paddle.width / 2;
        }
    }

    function brickDetection() {
        for (c = 0; c < brick.cols; c++) {
            for (r = 0; r < brick.rows; r++) {
                var b = bricks[c][r];
                if (b.status == 1) {
                    if (ball.x > b.x && ball.x < b.x + brick.width && ball.y > b.y && ball.y < b.y + brick.height) {
                        ball.dy = -ball.dy;
                        b.status = 0;
                        game.score++;
                        if (game.score == brick.rows * brick.cols) {
                            if (confirm("YOU WIN, CONGRATS! \nSAVE YOUR SCORE!")) {
                                game.saveScore();
                            }
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }



    function gameStart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        brick.drawBricks();
        ball.draw();
        paddle.draw();
        game.drawScore();
        game.drawLives();
        brickDetection();

        //Bouncing off the left and right
        if (ball.x + ball.dx > canvas.width - ball.r || ball.x + ball.dx < ball.r) {
            ball.dx = -ball.dx;
            game.ballSound();
        }
        //Bouncing off the top
        if (ball.y + ball.dy < ball.r) {
            ball.dy = -ball.dy;
            game.ballSound();
        }
        //Bouncing off the top, if paddle
        else if (ball.y + ball.dy > canvas.height - ball.r) {
            //paddle bounce logic
            if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
                ball.dy = -ball.dy;
                game.ballSound();
            }
            //GAME OVER logic
            else {
                game.lives--;
                //REAL GAME OVER if no lives
                if (!game.lives) {
                    //  alert("GAME OVER");
                    if (confirm("GAME OVER! \nDO YOU WANT TO SAVE YOUR SCORE?")) {
                        game.saveScore();
                        //to do add logic to save score in local store
                    }
                    document.location.reload();
                    //cancelAnimationFrame();
                }
                //if lives restart ball possition
                else {
                    ball.x = canvas.width / 2;
                    ball.y = canvas.height - paddle.height;
                    //can add additional option if user next change increase ball speed
                    //ball.dx = 5;
                    //ball.dy = -5;
                    paddle.x = (canvas.width - paddle.width) / 2;
                }
            }
        }

        //paddle moving
        if (paddle.rightPressed && paddle.x < canvas.width - paddle.width) {
            paddle.x += paddle.sensitive;
        }
        else if (paddle.leftPressed && paddle.x > 0) {
            paddle.x -= paddle.sensitive;
        }
        //make the ball move :D
        ball.x += ball.dx * ball.speed;
        ball.y += ball.dy * ball.speed;
        requestAnimationFrame(gameStart);
    }

    //some graphs before game start :)
    function pageStart() {
        //context.fillText(text,x,y,maxWidth);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Verdana";
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle = gradient;
        ctx.fillText("Breakout-game!", 180, 80);

        var gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient2.addColorStop("0", "#FFFFFF");
        gradient2.addColorStop("0.5", "#00966E");
        gradient2.addColorStop("1.0", "#D62612");
        ctx.fillStyle = gradient2;
        ctx.fillText("Hello there!", 200, 200);

        var gradient3 = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient3.addColorStop("0", "#005b99");
        gradient3.addColorStop("1.0", "#fcd116");
        ctx.font = "20px Verdana";
        ctx.fillStyle = gradient3;
        ctx.fillText("Use left/right arrows or mouse and show us your best!", 20, 300);
        //context.fillRect(x,y,width,height);
        //Bulgaria Flag
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(10, 10, 100, 20);
        ctx.fillStyle = "#00966E";
        ctx.fillRect(10, 30, 100, 20);
        ctx.fillStyle = "#D62612";
        ctx.fillRect(10, 50, 100, 20);
        //Sweden flags
        //Bulgaria Flag
        ctx.fillStyle = "#005b99";
        ctx.fillRect(10, 80, 100, 60);
        ctx.fillStyle = "#fcd116";
        ctx.fillRect(10, 100, 100, 20);
        ctx.fillStyle = "#fcd116";
        ctx.fillRect(40, 80, 20, 60);
    }
    pageStart();

    if (localStorage.gameScoreBook != undefined) {
        game.displayScoreBook();
    } else {
        document.getElementById("scoreList").innerHTML = "<b> Do your best and record your score! </b>";
    }
