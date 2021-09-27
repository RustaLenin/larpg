import {uikit} from '../uikit/uikit.js';

const app = document.querySelector('#app');

app.insertAdjacentHTML('afterbegin', `
    <nice-icon icon="email" size="small" pointer="true"></nice-icon>
    <nice-button icon="send" size="small" text="Submit"></nice-button>
    <nice-field 
    name="email" 
    validation="email" 
    label="E-Mail" 
    placeholder="john.doe@gmail.com" 
    icon="email"
        ></nice-field>
    
    
    
    
    
    
    
    
    
    
    
    <nice-field
        icon="email" 
        type="email" 
        name="email"
        label="E-Mail"
        value="rustalenin@mail.ru"
        placeholder="john.doe@gmail.com"
        validation="true"
        variant="outlined"
        multiline="true"
        required="true"></nice-field>
`);