document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('login-modal').style.display = 'none';
});
