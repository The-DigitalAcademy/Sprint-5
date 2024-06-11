function gymApp() {
    let fname = document.getElementById('fname').value;
    let gender = document.getElementById('gender').value;
    let age = Number(document.getElementById('age').value); 
    let weight = Number(document.getElementById('weight').value);
    let height = Number(document.getElementById('height').value);
    let bmi = weight / (height * height);
    let weightresults;
   

    if (bmi < 18.5) {
        weightresults = 'Underweight )';
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        weightresults = 'Healthy )';
    }
    else if (bmi >= 25 && bmi < 29.9) {
        weightresults = 'Overweight )';
    }
    else if (bmi >= 30) {
        weightresults = 'Obese )';
    }

    if (fname === '' || gender === '' || age === '' || weight === '' || height === '') {
        alert('Please fill in all the fields');
    } else {
        // If all fields are filled, proceed with form submission
        document.getElementById('display').innerHTML = 'Name: ' + name + '<br>' +
            'Gender: ' + gender + '<br>' +
            'Age: ' + age + '<br>' +
            'Weight: ' + weight + '<br>' +
            'Height: ' + height;
    }



    document.getElementById('display').innerHTML = 'Hi ' + fname + ', Here is your profile:<br>' +
                                                      'Age      : ' + age + '<br>' +
                                                      'Gender   : ' + gender + '<br>' +
                                                      'Weight   : ' + weight + ' KG <br>'+
                                                      'BMI      : ' + bmi.toFixed(1) + 
                                                      '(You are ' + weightresults; + '<br>' 

    if (age >= 15 && age < 21) { 
        if (gender === 'Male') {
            document.getElementById('display').innerHTML += 'This is an exercise routine tailored specifically for you:' +
                                                             'Roadwork - 4KM per day<br>' +
                                                             'Squats - 20 per day<br>' +
                                                             'Push Ups - 25 per day';
        } else if (gender === 'Female') {
            document.getElementById('display').innerHTML += '<br>This is an exercise routine tailored specifically for you:<br>' +
                                                             'Roadwork - 3KM per day<br>' +
                                                             'Squats - 40 per day<br>' +
                                                             'Push Ups - 20 per day';
        }
    }

    if (age >= 20 && age < 31) { 
        if (gender === 'Male') {
            document.getElementById('display').innerHTML += '<br>This is an exercise routine tailored specifically for you:<br>' +
                                                             'Roadwork - 8KM per day<br>' +
                                                             'Squats - 20 per day<br>' +
                                                             'Push Ups - 50 per day';
        } else if (gender === 'Female') {
            document.getElementById('display').innerHTML += '<br>This is an exercise routine tailored specifically for you:<br>' +
                                                             'Roadwork - 6KM per day<br>' +
                                                             'Squats - 40 per day<br>' +
                                                             'Push Ups - 50 per day';
        }
    }

    if (age >= 30 && age < 51) { 
        if (gender === 'Male') {
            document.getElementById('display').innerHTML += '<br>This is an exercise routine tailored specifically for you:<br>' +
                                                             'Roadwork - 5KM per day<br>' +
                                                             'Squats - 20 per day<br>' +
                                                             'Push Ups - 30 per day';
        } else if (gender === 'Female') {
            document.getElementById('display').innerHTML += '<br>This is an exercise routine tailored specifically for you:<br>' +
                                                             'Roadwork - 3KM per day<br>' +
                                                             'Squats - 30 per day<br>' +
                                                             'Push Ups - 20 per day';
        }
    }
    if (age >= 50 && age < 100) { 
        if (gender === 'Male') {
            document.getElementById('display').innerHTML += '<br>This is an exercise routine tailored specifically for you:<br>' +
                                                             'Roadwork - 2KM per day<br>' +
                                                             'Squats - 10 per day<br>' +
                                                             'Push Ups - 15 per day';
        } else if (gender === 'Female') {
            document.getElementById('display').innerHTML += '<br>This is an exercise routine tailored specifically for you:<br>' +
                                                             'Roadwork - 1.5KM per day<br>' +
                                                             'Squats - 15 per day<br>' +
                                                             'Push Ups - 10 per day';
        }
    }
}
