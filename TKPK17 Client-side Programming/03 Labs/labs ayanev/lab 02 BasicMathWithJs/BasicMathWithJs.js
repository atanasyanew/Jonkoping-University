var guesList = document.getElementById("list");

  function updateDom(msg) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    guesList.appendChild(node);
  }



  function userInputCheck(value) {

    if (isNaN(value)) {
      if (confirm(value + " is not a valid number! Do you want to restart the program?")) {
        location.reload();
      } else {
        alert("program closed");
      }
    }
    else {
      return value;
    }
  } //check user input

  function userInputCheckOperator(operator) {
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {

      return operator;
    }
    else {
      if (confirm(operator + " is not a valid operation! Do you want to restart the program?")) {
        location.reload();
      } else {
        alert("program closed");
      }

    }
  } //check operator

  function myCalculator() {

    if (confirm('Enter two numbers and choose math operation')) {

      var value1 = userInputCheck(prompt("Enter First Value")); //user input
      var value2 = userInputCheck(prompt("Enter Second Value")); //user input
      var mathOperation = userInputCheckOperator(prompt("Eter math operation: + - * / "));
      var result;
      var txtMsg;
      var calcMsg;

      switch (mathOperation) {
        case "+":
          result = Number(value1) + Number(value2);
          txtMsg = " | Value1: " + value1 + ", Value2: " + value2 + ", Operation: " + mathOperation + " ";
          calcMsg = "(" + value1 + mathOperation + value2 + " = " + result + ") ";
          updateDom(calcMsg + txtMsg);
          console.log("value1: " + value1 + " value2: " + value2 + " operation: " + mathOperation);
          console.log(value1 + mathOperation + value2 + " = " + result);
          //alert(value1 + mathOperation + value2 + " = " + result)
          //confirm('New calculation?') ? location.reload() : alert("Successful exit from calculator");
          break;
        case "-":
          result = Number(value1) - Number(value2);
          txtMsg = " | Value1: " + value1 + ", Value2: " + value2 + ", Operation: " + mathOperation + " ";
          calcMsg = "(" + value1 + mathOperation + value2 + " = " + result + ") ";
          updateDom(calcMsg + txtMsg);
          console.log("value1: " + value1 + " value2: " + value2 + " operation: " + mathOperation);
          console.log(value1 + mathOperation + value2 + " = " + result);
          //alert(value1 + mathOperation + value2 + " = " + result)
          //confirm('New calculation?') ? location.reload() : alert("Successful exit from calculator");
          break;
        case "*":
          result = Number(value1) * Number(value2);
          txtMsg = " | Value1: " + value1 + ", Value2: " + value2 + ", Operation: " + mathOperation + " ";
          calcMsg = "(" + value1 + mathOperation + value2 + " = " + result + ") ";
          updateDom(calcMsg + txtMsg);
          console.log("value1: " + value1 + " value2: " + value2 + " operation: " + mathOperation);
          console.log(value1 + mathOperation + value2 + " = " + result);
          //alert(value1 + mathOperation + value2 + " = " + result)
          //confirm('New calculation?') ? location.reload() : alert("Successful exit from calculator");
          break;
        case "/":
          result = Number(value1) / Number(value2);
          txtMsg = " | Value1: " + value1 + ", Value2: " + value2 + ", Operation: " + mathOperation + " ";
          calcMsg = "(" + value1 + mathOperation + value2 + " = " + result + ") ";
          updateDom(calcMsg + txtMsg);
          console.log("value1: " + value1 + " value2: " + value2 + " operation: " + mathOperation);
          console.log(value1 + mathOperation + value2 + " = " + result);
          //alert(value1 + mathOperation + value2 + " = " + result)
          //confirm('New calculation?') ? location.reload() : alert("Successful exit from calculator");
          break;
        default:
          break;
      }
    }
    else {
      alert("Successful exit from calculator");
    }
  } //main