let Name = String(document.getElementById("Fname").value);
let Gender = Number(document.getElementById("gender").value);
let Age =Number(document.getElementById("age").value);
let group1 = `Roadwork   (4km) \n Squarts  (20 reps) \n Push ups (25 reps)`;
let group2 = `Roadwork   (3km) \n Squarts  (40 reps) \n Push ups (20 reps)`;
let group3 = `Roadwork   (8km) \n Squarts  (40 reps) \n Push ups (60 reps)`;
let group4 = `Roadwork   (6km) \n Squarts  (60 reps) \n Push ups (35 reps)`;
let group5 = `Roadwork   (5km) \n Squarts  (30 reps) \n Push ups (30 reps)`;
let group6 = `Roadwork   (4km) \n Squarts  (65 reps) \n Push ups (25 reps)`;
let group7 = `Roadwork   (2km) \n Squarts  (10 reps) \n Push ups (10 reps)`;
let group8 = `Roadwork   (1km) \n Squarts  (20 reps) \n Push ups (5 reps)`;
let group9 = `Roadwork   (500m) \n Squarts  (10 reps) \n Push ups (10 reps)`;
let weight = Number(document.getElementById(" weight").value);
let height = parseFloat(prompt("Enter your height"));
let bmi = Number((weight / ((height)^2)))
let weightResult;

function calc() {
    if (bmi < 18.5) {
        weightResult = "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        weightResult = "healthy"; 
    } else if (bmi >= 25.0 && bmi < 29.9) {
        weightResult = "overweight"; 
    } else {
        weightResult = "obese";
    }
}