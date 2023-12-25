function getUserByUsername(username) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.username === username);
}

const user = getUserByUsername('loggedInUser');

if (user) {alert('es');}
else {alert('no');}

Document.getElementById('Main_username').textContent = user.username