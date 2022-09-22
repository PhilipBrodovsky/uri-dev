(() => {
    "use strict";
    const n = document.getElementById("users");
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (n) {
            return n.json();
        })
        .then(function (e) {
            !(function (e) {
                for (const t of e)
                    n.innerHTML += `\n                <div>\n                    <h2>${t.name}</h2>\n                    <h3>${t.email}</h3>\n                </div>\n        `;
            })(e),
                (function (n) {
                    console.log("users", n);
                })(e);
        });
})();
