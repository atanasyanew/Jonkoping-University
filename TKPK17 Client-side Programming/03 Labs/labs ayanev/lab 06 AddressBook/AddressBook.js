var totalRecords = document.getElementById("bookRecords");
var book; //localStorage

main();

function main() {
    if (localStorage.adressBook != undefined) {
        book = JSON.parse(localStorage.adressBook); //get localstorage data
        displayTableData();
        displayContactAsCard();
    } else {
        totalRecords.innerHTML = "No records found";
        totalRecords.setAttribute("class", "w3-text-red");
    }
}


function displayTableData() {
    var table = document.getElementById("addressBookTable");
    var row;
    var cell1;
    var cell2;
    var cell3;
    var cell4;
    //get how manny records in the storage
    totalRecords.innerHTML = "You have <b>" + book.length + "</b> records";
    totalRecords.setAttribute("class", "");
    //loop localstorage records
    for (i = 0; i < book.length; i++) {
        row = table.insertRow(i); //create row
        cell1 = row.insertCell(0); //create td
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);

        cell1.style.whiteSpace = "nowrap";
        cell2.style.whiteSpace = "nowrap";
        cell3.style.whiteSpace = "nowrap";
        cell4.style.whiteSpace = "nowrap";

        cell1.innerHTML = book[i]["name"]; //add data
        cell2.innerHTML = book[i]["phone"];
        cell3.innerHTML = book[i]["email"];
        cell4.innerHTML = book[i]["birth"];
    }
}


function createContactPerson() {
    //JSON OBJECT
    var person = {
        name: document.getElementById("FormName").value,
        phone: document.getElementById("FormPhone").value,
        email: document.getElementById("FormEmail").value,
        birth: document.getElementById("FormBirth").value
    }

    //if there is no set localStorage
    if (localStorage.adressBook == undefined) {

        var book = []; //array for localStorage
        book.unshift(person); //add the obj to the array
        localStorage.setItem("adressBook", JSON.stringify(book)); //set localStorage

    } else {

        var book = JSON.parse(localStorage.adressBook); //get localstorage data
        book.unshift(person); //add new json obj to the array
        localStorage.setItem("adressBook", JSON.stringify(book)); //update localstorage

    }

    document.location.reload();
}


//update data base on localstorage
function displayContactAsCard() {

    var card = "";

    for (i = 0; i < book.length; i++) {
        card += "<div class=\"well w3-card-8 w3-border \" style=\"width:100%\">";
        card += "<div class=\"w3-container w3-margin w3-center\">";
        card += "<p> Name: " + book[i]["name"] + "</p>";
        card += "<p> Phone: " + book[i]["phone"] + "</p>";
        card += "<p> Email: " + book[i]["email"] + "</p>";
        card += "<p> Birth: " + book[i]["birth"] + "</p>";
        card += "</div>";
        card += "</div>";

    }
    /*
            for ( i = book.length-1; i >= 0; i--) {
                card += "<div class=\"w3-card-8 w3-border w3-margin\" style=\"width:33%\">";
                card += "<div class=\"w3-container w3-center\">";
                card += "<p> Name: " + book[i]["name"] + "</p>";
                card += "<p> Phone: " + book[i]["phone"] + "</p>";
                card += "<p> Email: " + book[i]["email"] + "</p>";
                card += "<p> Birth: " + book[i]["birth"] + "</p>";
                card += "</div>";
                card += "</div>";
    
            }
          */
    document.getElementById("cards").innerHTML = card;
}



/*
TO DO

$(document).ready(function() {
  $('#contact_form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          first_name: {
              validators: {
                      stringLength: {
                      min: 2,
                  },
                      notEmpty: {
                      message: 'Please supply your first name'
                  }
              }
          },
           last_name: {
              validators: {
                   stringLength: {
                      min: 2,
                  },
                  notEmpty: {
                      message: 'Please supply your last name'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your email address'
                  },
                  emailAddress: {
                      message: 'Please supply a valid email address'
                  }
              }
          },
          phone: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your phone number'
                  },
                  phone: {
                      country: 'US',
                      message: 'Please supply a vaild phone number with area code'
                  }
              }
          },
          address: {
              validators: {
                   stringLength: {
                      min: 8,
                  },
                  notEmpty: {
                      message: 'Please supply your street address'
                  }
              }
          },
          city: {
              validators: {
                   stringLength: {
                      min: 4,
                  },
                  notEmpty: {
                      message: 'Please supply your city'
                  }
              }
          },
          state: {
              validators: {
                  notEmpty: {
                      message: 'Please select your state'
                  }
              }
          },
          zip: {
              validators: {
                  notEmpty: {
                      message: 'Please supply your zip code'
                  },
                  zipCode: {
                      country: 'US',
                      message: 'Please supply a vaild zip code'
                  }
              }
          },
          comment: {
              validators: {
                    stringLength: {
                      min: 10,
                      max: 200,
                      message:'Please enter at least 10 characters and no more than 200'
                  },
                  notEmpty: {
                      message: 'Please supply a description of your project'
                  }
                  }
              }
          }
      })
      .on('success.form.bv', function(e) {
          $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
              $('#contact_form').data('bootstrapValidator').resetForm();

          // Prevent form submission
          e.preventDefault();

          // Get the form instance
          var $form = $(e.target);

          // Get the BootstrapValidator instance
          var bv = $form.data('bootstrapValidator');

          // Use Ajax to submit form data
          $.post($form.attr('action'), $form.serialize(), function(result) {
              console.log(result);
          }, 'json');
      });
});
*/
