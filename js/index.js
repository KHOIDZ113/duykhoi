window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const authArea = document.getElementById('auth-area');

    if (isLoggedIn === 'true') {
        const user = JSON.parse(localStorage.getItem('user'));
        authArea.innerHTML = `
            <img src="https://via.placeholder.com/40" alt="Avatar" class="avatar" title="${user.username}">
            <a href="#" onclick="logout()">Logout</a>
        `;
    }
});

// Đăng xuất
function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.reload();
}
window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('user'));

    const navbar = document.querySelector('.navbar');

    if (isLoggedIn && user) {
        navbar.innerHTML += `
            <div class="user-info">
                <img src="${user.avatar}" alt="Avatar" class="avatar">
                <span>${user.username}</span>
                <button id="logout-btn">Logout</button>
            </div>
        `;

        document.getElementById('logout-btn').addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('user');
            location.reload();
        });
    }
});
