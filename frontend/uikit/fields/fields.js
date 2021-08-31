import { uikit } from '../uikit.js';
import {collectModel} from '../helpers/models.js';

const defaults = {

    /** Core **/
    name:            '',                            // Resolved
    type:            'text',                        // Unresolved
    default_value:   '',                            // Resolved
    value:           '',                            // Part resolved
    placeholder:     '',                            // Part resolved

    /** Style **/
    variant:         'standard',                    // Resolved value: { standard | filled | outlined | simplified }
    icon:            '',                            // Part resolved
    label:           '',                            // Part resolved 1
    show_label:      'on',                          // Resolved value: {on | off}
    size:            'medium',                      // Part resolved
    align_center:    'off',                         // Part resolved value: {on | off}
    inline:          'off',                         // Part resolved value: {on | off}
    full_width:      'off',                         // Part resolved value: {on | off}
    multiline:       false,                         // Resolved value: {true | false }
    resize:          'both',                        // Resolved, work only for multiline elements {off | both | x | y }
    max_rows:        1,                             // Unresolved
    min_rows:        1,                             // Unresolved
    rows:            1,                             // Unresolved
    start_adornment: null,                          // Unresolved
    end_adornment:   null,                          // Unresolved

    /** Form data **/
    required:        false,                         // Unresolved

    /** Validation **/
    validation:      false,                         // Unresolved
    spellcheck:      false,                         // Unresolved
    error:           false,                         // Unresolved
    error_message:   'Please, enter valid data',    // Unresolved
    valid_message:   'Seems ok',                    // Unresolved
    success_state:    false,                        // Unresolved

    /** Behavior **/
    autocomplete:    'on',                          // Unresolved value:{on | off}
    autofocus:       false,                         // Unresolved
    disabled:        false,                         // Unresolved
    read_only:       false,                         // Unresolved

    /** Functionality **/
    callback:        null,                          // Unresolved
    onchange:        null                           // Unresolved
}

class NiceField extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    /** This default html element method using to set observed attributes **/
    static get observedAttributes() {
        return ['icon', 'size'];
    }

    /** This function will fired, when observed attr of element will be changed **/
    attributeChangedCallback( name, oldValue, newValue ) {
        if (oldValue !== newValue && oldValue !== null ) {
            this.render();
        }
    }

    render() {
        // console.log('Nice field render start');
        this.model = collectModel(defaults, this);
        this.setAttribute('size', this.model.size);
        this.setAttribute('icon', this.model.icon);
        this.setAttribute('resize', this.model.resize);
        // this.setAttribute('value', this.model.value);
        // this.setAttribute('default_value', this.model.default_value);
        // this.setAttribute('animated_label', this.model.animated_label);
        this.innerHTML = this.template();
    }

    template() {
        let model = this.model;
        let html = ``;

        if ( model.show_label === 'on' ) {
            html += `<span class="field_label">${model.label}</span>`;
        }

        if (model.multiline === 'true') {
            html += `<textarea
                        name="${model.name}"
                        placeholder="${model.placeholder}"
                        oninput="this.closest('nice-field').setAttribute('value', this.value);"
                        >${this.#renderTextValue()}</textarea>`;
        } else {
            html += `<input 
                    type="${model.type}" 
                    name="${model.name}" 
                    ${this.#renderFieldValue()}
                    placeholder="${model.placeholder}"
                    oninput="this.closest('nice-field').setAttribute('value', this.value);"
                >`;
        }

        if ( model.icon && model.multiline !== 'true' ) {
            html += `<nice-icon icon="${model.icon}" size="${model.size}"></nice-icon>`;
        }

        html += `<span class="field_message"></span>`;
        return html;
    }

    #renderFieldValue() {
        let model = this.model;
        let value = null;
        if ( model.value !== null ) {
            value = model.value;
        } else  if ( model.default_value !== null ) {
            value = model.default_value;
        }

        if ( value !== null ) {
            return `value="${value}" `;
        }
    }
    #renderTextValue() {
        let model = this.model;
        let value = null;
        if ( model.value !== null ) {
            value = model.value;
        } else  if ( model.default_value !== null ) {
            value = model.default_value;
        }

        if ( value !== null ) {
            return value;
        }
    }

}

customElements.define( 'nice-field', NiceField );

document.addEventListener('uikit_init_start', (e) => {
    let cssUrl = `${new URL('./', import.meta.url).href}fields.css`; // getting url of this file and find css file in the same folder
    uikit.insertAdjacentHTML('beforeend', `<link href="${cssUrl}" rel="stylesheet"></link>` ); //Insert css in document, so he will start loading
});