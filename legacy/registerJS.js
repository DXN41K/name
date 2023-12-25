document.getElementById('registrationForm').addEventListener('submit', function(event) {
    
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    if (username === '' || email === '' || password === '') {
      alert('Пожалуйста, заполните все поля формы');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Пожалуйста, введите корректный email');
      return; 
    }
  
    if (password.length < 6) {
      alert('Пароль должен содержать не менее 6 символов');
      return; 
    }

  
    if (password != confirmPassword) {
      alert("Пароли не совпадают");
      return;
    } else {
      document.getElementById("registrationForm").reset(); // Сброс формы после валидации
    }
  
    const userData = {
      username: username,
      email: email,
      password: password
    };
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Проверка наличия пользователя с таким именем или адресом электронной почты
    const userExists = users.some(function(user) {
        return user.username === username || user.email === email;
    });

    if (userExists) {
        alert('Пользователь с таким именем пользователя или адресом электронной почты уже существует');
        return; // Прерываем отправку формы, если пользователь уже существует
    }
    
    // Добавление нового пользователя к существующему списку
    users.push(userData);
  
    // Сохранение обновленного списка пользователей в LocalStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    alert("Форма отправлена!");

    window.location.href = 'login.html';
});
  
  // Функция для валидации формата email
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  