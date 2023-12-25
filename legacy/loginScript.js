function validateLogin(event) {
    
    event.preventDefault(); 
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Получение существующих пользователей из LocalStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Поиск пользователя с введенными учетными данными
    const user = users.find(user => (user.username === username || user.email === username) && user.password === password);

    if (user) {
        alert('Успешный вход!');
        localStorage.setItem('loggedInUser', user.username);
        window.location.href = 'app/main.html'; 
    } else {
        alert('Неверное имя пользователя или пароль. Попробуйте снова.');
    }
}