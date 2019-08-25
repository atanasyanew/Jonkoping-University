var answer = Math.floor(Math.random() * 10) + 1;
var score = 0;
var guessCount = 10;
var parent = document.getElementById("ballsContainer");

function playerFeedback(msg) {
  var node = document.createElement("LI");
  //var textnode = document.createTextNode(msg);
  //node.appendChild(textnode);
  node.innerHTML = msg;
  document.getElementById("feedbackList").appendChild(node);
}


function playGame() {
  event.preventDefault();
  var msg = "";
  var guess = Number(document.getElementById("guessBox").value);




  answer = Math.floor(Math.random() * 10) + 1;
  // validate input
  if (guess > 0 && guess <= 10) {
    if (guess <= answer) {
      // gj, add score
      score = score + guess;
      msg = "Your guess is " + String(guess);
      msg += " | <span class=\"w3-text-green\"> Score +" + String(guess) + "</span>";
      console.log(msg);
      playerFeedback(msg);
    } else {
      msg = "Your guess is " + String(guess);
      msg += " | <span class=\"w3-text-yellow\"> No Score </span>";
      console.log(msg);
      playerFeedback(msg);
    }

    // refresh data
    guessCount = --guessCount;
    document.getElementById("score").innerText = score;
    document.getElementById("guessCount").innerText = guessCount;
  }

  else {
    // you typed wrong value
    msg = "Your guess is " + String(guess);
    msg += " | <span class=\"w3-text-red\">Wrong value!</span> Try a number between 1 and 10.";
    console.log(msg);
    playerFeedback(msg);
  }

  //display balls
  parent.innerHTML = "";

  for (var i = 1; i <= answer; i++) {
    var tempLi = document.createElement("li");
    tempLi.id = "ball";
    parent.appendChild(tempLi);
  }

  document.getElementById("guessBox").value = "";


  if (guess == answer) {
    msg = "<span class=\"w3-text-green\">Correct!</span> Your guess is " + String(guess);
    console.log(msg);
    playerFeedback(msg);
  }

  if (guessCount == 0) {
    msg = "<h4 class=\"w3-text-orange\">Game over. Your final score is " + String(score) + "</h4>";
    console.log(msg);
    playerFeedback(msg);

    var myNode = document.getElementById("form");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }

    var btn = "<button type=\"submit\" onclick=\"location.reload()\" class=\"btn btn-warning\">Play again!</button>";
    document.getElementById("form").innerHTML = btn;
    //document.getElementById("form").removeEventListener("submit", playGame);
    //document.body.removeChild(document.getElementById("form"));
  }

}

document.getElementById("form").addEventListener("submit", playGame);
