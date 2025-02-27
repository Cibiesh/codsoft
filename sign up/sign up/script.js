document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('message');

    if (name && email && password) {
        message.style.color = "green";
        message.textContent = "✅ Signup Successful!";
        this.reset();
    } else {
        message.style.color = "red";
        message.textContent = "❌ Please fill all fields!";
    }
});
