const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const message = document.getElementById('login-message');

const usersUrl = new URL('./users.json', window.location.href);

async function loadUsers() {
    const response = await fetch(usersUrl);

    if (!response.ok) {
        throw new Error('Unable to load user records.');
    }

    return response.json();
}

function setMessage(text, type = 'error') {
    message.textContent = text;
    message.classList.toggle('success', type === 'success');
}

form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    setMessage('');

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
        setMessage('Enter both username and password.');
        return;
    }

    try {
        const users = await loadUsers();
        const isValidUser = users.find((user) => user.username === username && user.password === password);

        if (!isValidUser) {
            setMessage('Incorrect username or password.');
            return;
        }

        sessionStorage.setItem('weather-vault-user', username);
        setMessage('Login successful. Redirecting...', 'success');
        window.location.href = 'dashboard.html';
    } catch (error) {
        setMessage('Could not validate credentials. Check that the app is served from a local web server.');
        console.error(error);
    }
});
