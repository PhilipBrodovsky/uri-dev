import { renderUsers } from "./helper.js";
import * as Utils from "./utils.js";
const url = "https://jsonplaceholder.typicode.com/users";

// get http
fetch(url)
    .then(function (res) {
        const users = res.json();
        return users;
    })
    .then(function (users) {
        renderUsers(users);
        Utils.renderUsers(users);
    });
