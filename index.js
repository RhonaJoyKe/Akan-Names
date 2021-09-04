const maleNames = [{
    Sunday: "Kwasi",

    Monday: "Kwadwo",

    Tuesday: "Kwabena",

    Wednesday: "Kwaku",

    Thursday: "Yaw",

    Friday: "Kofi",

    Saturday: "Kwame"
}
]
const femaleNames = [{
    Sunday: "Akosua",

    Monday: "Adwoa",

    Tuesday: "Abenaa",

    Wednesday: "Akua",

    Thursday: "Yaa",

    Friday: " Afua",

    Saturday: "Ama"
}
]


document.getElementById("buu").addEventListener(("click"), function () {
    var date = document.querySelector("#DOB").value;
    var gender = document.getElementsByName("gender");
    var dateFinal = new Date(date)
    if (document.getElementById("male").checked) {
        alert("I am  a male");
        var weekDay = dateFinal.toLocaleDateString("EN-US", { weekday: 'long' })
        if (weekDay ==) {

        }
        if (document.getElementById("female").checked) {
            alert("I am  a female");
        }

    })
