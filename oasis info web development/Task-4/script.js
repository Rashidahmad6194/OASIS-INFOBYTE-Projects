const users = {};

function showLoginPage() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'none';
}

function showRegisterPage() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'block';
    document.getElementById('home-page').style.display = 'none';
}

function showHomePage(username) {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('user-name').textContent = username;
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users[username];
    if (user && user.password === password) {
        showHomePage(username);
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users[username]) {
        alert('Username already exists');
    } else {
        users[username] = { password: password };
        alert('Registration successful. Please log in.');
        showLoginPage();
    }
});

function logout() {
    showLoginPage();
}

// Show login page initially
showLoginPage();