1.  "233"
2.  Math.round(7.25)
3.  if (x !== 12) {
    alert("Not 12")
}
4.  document.getElementById("main").innerHTML = "Hello <em>World</em> !";
5.  document.querySelector("p").innerText = "New text";
6.  var x = 1;
    while (x<=5) {
        console.log(x);
        x++;
    }
7.  var myArray = [1,2,3,4,5];
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
8.  "blue"
9.  x.pop()
10  "I think you know this one"
11. bar is 0, baz is 2
12. Alert if Skirt
    var array = ["shirt", "pants", "skirt", "jacket", "skirt"]
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "skirt") {
            alert("found it!");
            break;
        }
    }

13. Sort and return
    var myNumber = [5,1,3,9,6,2];
    function lowest(arr) {
        var tempArr = arr.sort();
        return tempArr[0];
    }
    /*call the function*/
    lowest(myNumber);

14. Sum if Num
    var myArray = ["one", 2, 3, "four", 5, "six", "seven",8,9];

    function sumIfNum(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                sum += arr[i];
            }
        }
        return sum;
    }
    /*call the function*/
    sumIfNum(myArray);

15. No more secrets
    function noMoreSecrets(secret) {
        var secretMessage = "";
        for (var i = 0; i < secret.note.length; i++) {
            for (var ii = 0; ii < secret.list.length; ii++) {
                if (secret.note[i] === secret.list[ii].cue) {
                    for (var iii = 1; iii < secret.list[ii].sequence+1; iii++) {
                        secretMessage += secret.note[i+iii]
                    }
                }
            }
        }
        return secretMessage.toUpperCase();
    }
    var secretObject = {
        note:"if I tell you this,you must promise to keep it a secret. Are you up for the challenge? If that is the case then that would be: awesome!",
        list: [{cue:",", sequence:3}, {cue:".", sequence:4}, {cue:":", sequence:9}]
    };
    /*call the function and pass in the secretObject as an argument*/
    noMoreSecrets(secretObject)
