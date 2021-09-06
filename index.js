const maleNames = {
  Sunday: "Kwasi",

  Monday: "Kwadwo",

  Tuesday: "Kwabena",

  Wednesday: "Kwaku",

  Thursday: "Yaw",

  Friday: "Kofi",

  Saturday: "Kwame"
}


const femaleNames = {
  Sunday: "Akosua",

  Monday: "Adwoa",

  Tuesday: "Abenaa",

  Wednesday: "Akua",

  Thursday: "Yaa",

  Friday: " Afua",

  Saturday: "Ama"
}
//Problem breakdown
// Submit > onclicklistner > validate > process

document.getElementById("submit").addEventListener(("click"), function () {
  validateData();

  // validateDataWithLoop();

})
function validateData() {
  let username = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  // Get list of gender radio buttons
  let radiosGender = document.getElementsByName("gender");
  // Cascade if checks
   if (username) {
    // If name is filled
    // alert("Name is filled");
    console.log("Name is filled");
    // Check if dob is filled
    if (dob) {
      // If dob is filled, do something
      // alert("Dob is filled");
      console.log("Dob is filled");
      // Check if gender is filled
      let oneGenderSelected = false;

      for( i = 0; i < radiosGender.length; i++ ) {
          if(radiosGender[i].checked) {
            oneGenderSelected = true;
          }
      }
      if (oneGenderSelected) {
        // Do something if at least one gender is selected
        console.log("A gender is selected");

        // Process the collected data
        showOutput();
      } else {
        // No gender is selected yet
        alert("Please select your gender");

      }
    } else {
      // Dob not filled
      alert("Please enter your DOB");
    }

  } else {
    alert("Please enter your name");
  }
}
function showOutput(){
  let username = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;

  let actualDate = new Date(dob);

  let weekDay = actualDate.toLocaleDateString("EN-US", { weekday: 'long' });
  console.log(weekDay);

   if (document.getElementById("male").checked) {
    // alert("Hello " + username + ". Your Akan Name is: " + maleNames[weekDay])

    // Alert using string literals
    // To use string literals use back ticks, dollar signs and curly braces
    // eg `Hello ${userName}`
     alert(`Hello ${username}. Your Akan Name is ${maleNames[weekDay]}`);
  } 
   else if (document.getElementById("female").checked) {
    // alert("Hello " + username + ". Your Akan Name is: " + femaleNames[weekDay])

    // Alert using string literals
    // To use string literals use back ticks, dollar signs and curly braces
    // eg `Hello ${userName}`
    alert(`Hello ${username}. Your Akan Name is ${femaleNames[weekDay]}`);
  }
}


// // document.getElementById("buu").addEventListener(("click"), function () {
// //    var date = document.getElementbyId("DOB").value;
// //  var gender = document.getElementsByName("gender");
// //   var dateFinal = new Date(date);
// //   function validity(){
// //     var date = document.querySelector("DOB").value;
// //     var gender = document.getElementsByName("gender");
// //     if(date.length===0 && gender.unchecked){
// //         alert("You need to Enter your Date of Birth");
// //     }
// //   }
// //   if (document.getElementById("male").checked) {
// //    // alert("I am  a male");
// //     var weekDay = dateFinal.toLocaleDateString("EN-US", { weekday: 'long' })
// //     alert(document.getElementById("jina").innerHTML + "Akan Name is :"+ maleNames[weekDay])
// //   }

// // //  else if(dateFinal.length === 0 ){
// // //     alert("You need to Enter your Date of Birth")

// // // }
// // // else{
// // //     alert("You need to Enter your gender" )
// // // }



// // if (document.getElementById("female").checked) {
// //     alert("I am  a female");       }

// })
