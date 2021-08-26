import { uikit } from '../uikit.js';
import { collectModel } from '../helpers/models.js'
import { uniqID } from "../helpers/id.js";
import * as notifyController from "./notify_controller.js";

/** Default notify data **/
const defaults = {
    icon: 'check',
    auto_close: true,
    close_interval: 3000,
    title: 'Notification',
    text: 'Something happens ¯\\_(ツ)_/¯',
    type: 'info' //Possible types: success, error, warning, info
};

const typeIconMap = {
  success: 'notify_success',
  error: 'notify_error',
  warning: 'notify_warning',
  info: 'notify_info'
};

class NiceNotify extends HTMLElement {

    constructor() {
        super();
        this.setAttribute('id', uniqID() );
        this.render();
        if (this.model.auto_close !== 'false') {
            setTimeout(() => {
                this.close();
            }, this.model.close_interval );
        }
    }

    render() {
        this.model = collectModel(defaults, this);
        this.model.id = this.getAttribute('id');
        this.innerHTML = this.template();
    }

    template() {
        let model = this.model;
        let html = ``;
        html += `<div class="notify_icon"><nice-icon icon="${typeIconMap[model.type]}" size="huge"></nice-icon></div>`
        html += `<div class="notify_body">
                    <div class="notify_title">${model.title}</div>
                    <div class="notify_text">${model.text}</div>
                </div>`;
        html += `<div class="notify_controls" onclick="${model.id}.close()">
                    <nice-icon icon="close" size="micro" pointer="true"></nice-icon>
                </div>`
        return html;
    }

    close() {
        this.classList.add('closing')
        setTimeout(() => {
           this.remove();
        }, 500);
    }

}

customElements.define( 'nice-notify', NiceNotify );

document.addEventListener('uikit_init_start', (e) => {
    let cssUrl = `${new URL('./', import.meta.url).href}notify.css`; // getting url of this file and find css file in the same folder
    uikit.insertAdjacentHTML('beforeend', `<link href="${cssUrl}" rel="stylesheet"></link>` ); //Insert css in document, so he will start loading
});


