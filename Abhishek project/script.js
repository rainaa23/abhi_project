document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login Successful!');
    } else {
        alert('Please fill in both fields.');
    }
});
