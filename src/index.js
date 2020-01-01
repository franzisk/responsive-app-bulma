import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.sass";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

document.addEventListener("DOMContentLoaded", () => {
    (document.querySelectorAll(".notification .delete") || []).forEach($delete => {
        const $notification = $delete.parentNode;
        $delete.addEventListener("click", () => {
            $notification.parentNode.removeChild($notification);
        });
    });
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
