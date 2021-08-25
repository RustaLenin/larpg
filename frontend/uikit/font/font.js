import {uikit} from "../uikit.js";

document.addEventListener('uikit_init_start', (e) => {
    uikit.insertAdjacentHTML('beforeend', `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    `);
});