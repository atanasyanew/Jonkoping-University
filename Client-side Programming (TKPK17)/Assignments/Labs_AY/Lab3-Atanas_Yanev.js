<!DOCTYPE html>
<html>
<title>lab2 AY</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3-theme-red.css">
    
<body class="w3-margin">

<div class="w3-container w3-theme">
    <h1>Lab_02, Atanas Yanev</h1>
</div> <!-- title -->
      
<div class="w3-container">
    <h3>Description</h3>
    <p>Function that can do math operations: + - * and / .</p>
</div> <!-- lab discription -->

<div class="w3-container">
  
<script type="application/javascript">

function Person(firstName, lastName, age) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
}

var family = {};
family.mother = new Person("Susan", "Doyle", 32);
family.father = new Person("John", "Doyle", 33);
family.daughter = new Person("Lily", "Doyle", 5);
family.son = new Person("Mike", "Doyle", 8);

console.table(family, ["firstName", "lastName", "age"]);
     
        

</script>
</div> <!-- code -->

<div class="w3-container w3-theme">
    <p>&copy; Atanas Yanev</p>
</div> <!-- footer -->

</body>
</html> 


function Person(firstName, lastName, age) {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
}

var family = {};
family.mother = new Person("Susan", "Doyle", 32);
family.father = new Person("John", "Doyle", 33);
family.daughter = new Person("Lily", "Doyle", 5);
family.son = new Person("Mike", "Doyle", 8);

console.table(family, ["firstName", "lastName", "age"]);