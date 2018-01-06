<!DOCTYPE html>
<html>
<title>lab2 AY</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3-theme-red.css">
    
<body class="w3-margin">

<div class="w3-container w3-theme">
    <h1>Lab_01, Atanas Yanev</h1>
</div> <!-- title -->
      
<div class="w3-container">
    <h3>Description</h3>
    <p>You have only 10 chances.</p>
</div> <!-- lab discription -->

<div class="w3-container">
    
    <script type="application/javascript">
// jquery, on document rdy
        
        var rightAnswer = Math.floor( Math.random() * 100 ) + 1; //gen random number between 1 and 100
        var guess = prompt( "Guess a number between 1 and 100" ); //user answer
        var answerNumber = 0; //number of chances
        var chanceNumber = 10; // how manny times user can answer
    
        while (answerNumber < chanceNumber)  {
            
            if ( Number(guess) == rightAnswer ) {   
                console.log("Great! you guessed right!"); 
                if ( confirm("PLAY AGAIN? ") ) {
                location.reload();
                }
                break;
            }  
            else {
                    if ( Number(guess) < rightAnswer ) {
                        console.log("answ number:" + answerNumber + " Wrong Answer! You guessed " + guess + " that was too low");
                    } else {
                        console.log("answ number:" + answerNumber + " Wrong Answer! You guessed " + guess + " that was too high");
                    }         
                    answerNumber++;    
                    guess = prompt( "Guess a number between 1 and 100" );
            }  
            
           if ( answerNumber == chanceNumber ) {
               console.log("Wrong Answer! GAME OVER " + answerNumber + " answers of " + chanceNumber + " Chances.");
               console.log("Right answer is " +  rightAnswer); 
               if ( confirm("PLAY AGAIN? ") ) {
                  location.reload(); 
               }
           }           
        }
    </script>
</div> <!-- code -->

<div class="w3-container w3-theme">
    <p>&copy; Atanas Yanev</p>
</div> <!-- footer -->

</body>
</html> 
