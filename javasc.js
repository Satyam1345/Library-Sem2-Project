function registerUser() {
    // Get the form values
    const firstname = document.getElementById('first_name').value;
    const lastname = document.getElementById('last_name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const roll = document.getElementById('roll').value;
    const branch = document.getElementById('branch').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;

    // Validate the form inputs
    if (firstname === '' || lastname === '' || username === '' || email === '' || phone === '' || roll === '' || branch === '' || password === '' || confirm === '') {
        alert('Please fill in all the fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Email must contain the "@" symbol.');
        return;
    }

    if (password !== confirm) {
        alert('Password does not match.');
        return;
    }

    if (!password.includes('@')) {
        alert('Password must contain the "@" symbol.');
        return;
    }

    // Store the user data in localStorage
    const user = { firstname, lastname, username, email, phone, roll, branch, password, confirm };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Reset the form
    document.getElementById('first_name').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('roll').value = '';
    document.getElementById('branch').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm').value = '';

    alert('User registered successfully!');
    window.location.replace('2StudentLoginPage.html');
}



function loginUser() {
    // Get the form values
    const username = document.getElementById('usern').value;
    const password = document.getElementById('pass').value;

    // Get the user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Find the user with the matching username
    let user = users.find(u => u.username === username);
    // Check if the user was found and the password matches

    if (user && user.password === password) {
        alert(`Welcome back, ${user.firstname}!`);
        if (user.branch === 'CSE') {
            
            window.location.replace = "5CsDept.html";
        } else if (user.branch === "ECE") {
          
            window.location.replace = "10EceDept.html";
        } else if (user.branch === "CE") {
          
            window.location.replace = "14CivilDept.html";
        } else if (user.branch === "EE") {        
         
            window.location.replace = "12ElectricalDept.html";
        } else if (user.branch === "ME") {   
            
            window.location.replace = "6MechDept.html"; 
        }
    } else {
        alert('Invalid Username or password. Please try again.');
    }

    // Reset the form
    document.getElementById('usern').value = '';
    document.getElementById('pass').value = '';
}