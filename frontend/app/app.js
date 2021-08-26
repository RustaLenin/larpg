import {uikit} from '../uikit/uikit.js';

const app = document.querySelector('#app');

app.insertAdjacentHTML('afterbegin', `
    <nice-icon icon="email" size="small" pointer="true"></nice-icon>
    <nice-button icon="send" size="small" text="Submit"></nice-button>
    <nice-field
        icon="email" 
        type="email" 
        name="email"
        label="E-Mail"
        value="rustalenin@mail.ru"
        placeholder="john.doe@gmail.com"
        validation="true"
        variant="simplified"
        required="true"></nice-field>
`);