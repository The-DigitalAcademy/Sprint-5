function gymApp() {
    let fname = document.getElementById('fname').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let id = document.getElementById('id').value;
    let password1 = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    let location = document.getElementById('location').value;
    let (password1 === password2);

    if (fname === '' || surname === '' || email === '' || phone === '' || id === '' || password1 === '' || password2 === '' || location === '') 
    {
        alert('Please fill in all the fields');

    } else if (password1 !== password2) {
        alert('Passwords do not match');
    } else {
        // Redirect to home.html
        window.location.href = 'home.html';
    }
}