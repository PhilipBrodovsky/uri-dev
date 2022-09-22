import { renderUsers } from "../../demo/helper";
import * as Utils from "../../demo/utils";
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
