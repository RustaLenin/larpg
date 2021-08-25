import { uikit } from "../uikit.js";
import { collectModel } from '../helpers/models.js'

/** Default button data **/
const defaults = {
    'icon': false,
    'size': 'small',
    'disabled': false,
    'hidden': false,
    'text': 'Submit',
    'regular': true,
    'accent': false,
};

class NiceButton extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        this.model = collectModel(defaults, this)
        this.insertAdjacentHTML( 'beforeend', this.template() );
    }

    template() {
        let model = this.model;
        let html = ``;
        if ( model.icon ) {
            html += `<nice-icon icon="${model.icon}" size="${model.size}"></nice-icon>`
        }
        html += `<span class="button_text">${model.text}</span>`;
        return html;
    }

}

customElements.define( 'nice-button', NiceButton );

document.addEventListener('uikit_init_start', (e) => {
    let cssUrl = `${new URL('./', import.meta.url).href}buttons.css`; // getting url of this file and find css file in the same folder
    uikit.insertAdjacentHTML('beforeend', `<link href="${cssUrl}" rel="stylesheet"></link>` ); //Insert css in document, so he will start loading
});