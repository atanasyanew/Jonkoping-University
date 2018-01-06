  var guesList = document.getElementById("list");

  function updateDom(msg) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    guesList.appendChild(node);
  }

  function playGame() {

    var rightAnswer = Math.floor(Math.random() * 100) + 1; //gen random number between 1 and 100
    var guess = prompt("Guess a number between 1 and 100"); //user answer
    var answerNumber = 0; //number of chances
    var chanceNumber = 5; // how manny times user can answer

    while (answerNumber < chanceNumber) {

      if (Number(guess) == rightAnswer) {
        console.log("Great! you guessed right!");

        var msg = "Great! you guessed right!";
        updateDom(msg);
        console.log(msg);
        if (confirm("PLAY AGAIN? ")) {
          playGame();
        }
        break;
      }
      else {
        if (Number(guess) < rightAnswer) {

          var msg = "Answer #" + answerNumber;
          msg += " Wrong Answer! You guessed " + guess + " that was too LOW";
          updateDom(msg);
          console.log(msg);
        } else {

          var msg = "Answer #" + answerNumber;
          msg += " Wrong Answer! You guessed " + guess + " that was too HIGH";
          updateDom(msg);
          console.log(msg);
        }
        answerNumber++;
        guess = prompt("Guess a number between 1 and 100");
        if (!guess) {
          break;
          document.location.reload();
        }
      }

      if (answerNumber == chanceNumber) {
        var msg = "Wrong Answer! GAME OVER " + answerNumber + " answers of " + chanceNumber + " Chances.";
        updateDom(msg);
        console.log(msg);
        msg = "Right answer is " + rightAnswer;
        updateDom(msg);
        console.log(msg);

        break;
        /*
        if ( confirm("PLAY AGAIN? ") ) {
           playGame();
          //document.location.reload();
       }
     */

      }
    }
  }
