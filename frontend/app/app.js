import {uikit} from '../uikit/uikit.js';

const app = document.querySelector('#app');

app.insertAdjacentHTML('afterbegin', `
    <nice-icon icon="email" size="small" pointer="true"></nice-icon>
    <nice-button icon="send" size="small" text="Submit"></nice-button>`);