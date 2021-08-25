import { uikit } from '../uikit.js';
import {dataToArgs } from "../helpers/args.js";

export function Notify( data ) {
    let area = document.querySelector('.notify_area');
    area.insertAdjacentHTML("beforeend", `
        <nice-notify 
            ${dataToArgs(data)} >
        </nice-notify>
    `);
    return null;
}

document.addEventListener('uikit_init_start', (e) => {
    document.body.insertAdjacentHTML('beforeend', `<div class="notify_area"></div>` );
    uikit.Notify = Notify;
});