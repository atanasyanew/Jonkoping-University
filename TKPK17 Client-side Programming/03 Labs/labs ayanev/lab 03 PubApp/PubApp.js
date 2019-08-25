

var orders = [];


//time function
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


//generate id for new order
function newOrderId() {
    var newId = new Date();
    var y = newId.getFullYear();
    var M = newId.getMonth();
    var d = newId.getDay();
    var h = newId.getHours();
    var m = newId.getMinutes();
    var s = newId.getSeconds();
    return y + "" + M + "" + d + "" + h + "" + m + "" + s;
}


//generate order table
function displayOrderTable() {
    // orderId,orderDtCreate,orderDtEnd,orderClient,orderDiscription,orderPrice
    var table = "";

    for (var i = 0; i < orders.length; i++) {
        //table += "<tr>";
        orders[i][2] == "In Progress" ? table += "<tr class=\"w3-text-red\">" : table += "<tr class=\"\">";

        table += "<td>" + i + "</td>";

        for (var j = 0; j < orders[i].length; j++) {
            table += "<td>" + orders[i][j] + "</td>";
        }

        //button complate
        table += "<td nowrap>";
        if (orders[i][2] == "In Progress") {
            table += "<button class=\"btn btn-xs btn-success\" onclick=\"markOrderAsDone(" + i + ")\">Complete</button>";
        } else {
            table += "<span><i class=\"glyphicon glyphicon-ok\"></i> Completed</span>";
        }
        table += "</td>";

        table += "<td>";
        table += "<button type=\"button\" class=\"btn btn-xs btn-danger\" onclick=\"removeOrder(" + i + ")\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</button>";
        table += "</td>";

        table += "</tr>";
    }

    document.getElementById("OrdersTable").innerHTML = table;
}
//

//add order function
function addOrder() {
    //vars for the main array
    var orderClient = document.getElementById('orderClient').value;
    var orderDiscription = document.getElementById('orderDiscription').value;
    var orderPrice = document.getElementById('OrderPrice').value;
    var orderId = newOrderId();
    var orderDtCreate = getTime();
    var orderDtEnd = "In Progress";
    //string msg for confirm
    var stringNewOrderMsg = "\n\nARE YOU SURE  YOU WANT TO ADD NEW ORDER WITH THE FOLLOWING INFORMATION? \n\n";
    stringNewOrderMsg += "Order Number: " + orderId + "\n\n";
    stringNewOrderMsg += "Customer: " + orderClient + "\n\n";
    stringNewOrderMsg += "Order Discription: " + orderDiscription + "\n\n";
    stringNewOrderMsg += "Order Price: " + orderPrice + "\n\n";
    stringNewOrderMsg += "Created: " + orderDtCreate + "\n\n";

    //check for correct order and add data to array
    if (confirm(stringNewOrderMsg)) {
        //define the new order array
        var newOrder = [orderId, orderDtCreate, orderDtEnd, orderClient, orderDiscription, orderPrice];
        //add the order array to the array (2D array)
        //orders.push(newOrder);
        orders.unshift(newOrder);
        //generate table from function
        displayOrderTable(); //generate table
        displayReportTable(); //generate table
    }
}
//

//function to change element in 2D array
function markOrderAsDone(i) {
    var i;
    orders[i][2] = getTime(); //orderDtEnd
    displayOrderTable();
    displayReportTable()
}
//

//remove intem from 1st array, delete record
function removeOrder(i) {
    if (confirm("Are you sure?")) {
        var i;
        orders.splice(i, 1);
    }
    displayOrderTable();
    displayReportTable();
}
//

//generate report table
function displayReportTable() {
    document.getElementById("reportTotalOrders").innerHTML = orders.length;

    var sum = 0;
    for (var x = 0; x < orders.length; x++) {
        sum += Number(orders[x][5]);
    }
    document.getElementById("giveTheMoneyBitch").innerHTML = sum;


    //reportAvrTime



}

//from labs:
/*
var orderObject = {};
orderObject.customer = promp("Customer name? ");
orderObject.drink = promp("drink? ");
orderObject.extra = promp("extra? ");
orderObject.food = promp("food? ");
orders.push(orderObject);
console.table(orders);
*/

/*
function orders(orderClient, orderDiscription, OrderPrice) {
this.orderClient = orderClient;
this.orderDiscription = orderDiscription;
this.OrderPrice = OrderPrice;
}
//create
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
*/
