// Toggle Hiện/Ẩn mật khẩu
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const input = this.previousElementSibling;
        const type = input.type === 'password' ? 'text' : 'password';
        input.type = type;
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
});

// Xử lý đăng ký
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('signup-username').value.trim();
        const password = document.getElementById('signup-password').value.trim();

        let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

        const existUser = accounts.find(acc => acc.username === username);
        if (existUser) {
            alert('Username already exists!');
            return;
        }

        const newUser = { username, password, avatar: "https://via.placeholder.com/40" }; // Avatar mặc định
        accounts.push(newUser);
        localStorage.setItem('accounts', JSON.stringify(accounts));
        alert('Registration successful! Please log in.');
        window.location.href = 'signin.html'; // Chuyển sang đăng nhập
    });
}

// Xử lý đăng nhập
const signinForm = document.getElementById('login-form');
if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('signin-username').value.trim();
        const password = document.getElementById('signin-password').value.trim();

        const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const user = accounts.find(acc => acc.username === username && acc.password === password);

        if (user) {
            alert('Login successful!');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'index.html'; // Chuyển về Home
        } else {
            alert('Incorrect username or password!');
        }
    });
}
// Kiểm tra đăng nhập và cập nhật avatar
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const avatarImg = document.getElementById('avatar-img');
    const userAvatarDiv = document.getElementById('user-avatar');
    const authLinksDiv = document.getElementById('auth-links');

    if (currentUser) {
        // Nếu đã đăng nhập, hiển thị avatar
        avatarImg.src = currentUser.avatar;
        userAvatarDiv.style.display = 'block';

        // Ẩn nút Sign In / Sign Up
        authLinksDiv.style.display = 'none';
    } else {
        // Nếu chưa đăng nhập, ẩn avatar và hiện Sign In / Sign Up
        userAvatarDiv.style.display = 'none';
        authLinksDiv.style.display = 'block';
    }
});
