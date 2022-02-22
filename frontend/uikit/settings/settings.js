import { settings_model } from './settings_model.js';
import {uikit} from "../uikit.js";
import * as header from './settings_header.js'
import * as menu from './settings_menu.js'
import * as menu_item from './menu_item.js'
import * as body from './settings_content.js'


class NiceSettings extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        this.model = settings_model;
        // this.model.id = this.getAttribute('id');
        this.innerHTML = this.template();
    }

    template() {
        let model = this.model;
        let html = ``;
        html += `<nice-settings_header></nice-settings_header>`;
        html += `<div class="setting_body">`;
        if ( model.menu ) {
            html += `<nice-settings__menu></nice-settings__menu>`;
        }
        html += `<nice-settings__content></nice-settings__content>`;
        html += `</div>`;

        return html;
    }

}

customElements.define( 'nice-settings', NiceSettings );

document.addEventListener('uikit_init_start', (e) => {
    let cssUrl = `${new URL('./', import.meta.url).href}settings.css`; // getting url of this file and find css file in the same folder
    uikit.insertAdjacentHTML('beforeend', `<link href="${cssUrl}" rel="stylesheet"></link>` ); //Insert css in document, so he will start loading
});