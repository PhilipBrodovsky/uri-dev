const usersEl = document.getElementById("users");

export function renderUsers(users) {
    for (const user of users) {
        usersEl.innerHTML += `
                <div>
                    <h2>${user.name}</h2>
                    <h3>${user.email}</h3>
                </div>
        `;
    }
}
