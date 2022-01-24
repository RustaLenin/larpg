import { SvgMap } from './map.js';
import { uikit } from '../uikit.js';

/** Default SVG Icon data **/
const defaults = {
    icon: 'check',
    size: 'small',
    pointer: false,
    rotate: false,
    spin: false,
    hidden: false,
};

export class NiceIcon extends HTMLElement {

    /** Function fires when this element loading in DOM **/
    constructor() {
        super();
        this.render();
    }

    /** This default html element method using to set observed attributes **/
    static get observedAttributes() {
        return ['icon'];
    }

    /** This function will fired, when observed attr of element will be changed **/
    attributeChangedCallback( name, oldValue, newValue ) {
        if (oldValue !== newValue && oldValue !== null ) {
            this.render();
        }
    }

    /** This function get icon name from attribute and try to find it in map and place in the WebComponent container **/
    render() {
        // console.log('nice icon render start');
        let icon = this.getAttribute('icon');
        this.innerHTML = SvgMap[icon] ? SvgMap[icon] : SvgMap[defaults.icon];
    }

}

customElements.define( 'nice-icon', NiceIcon );

/** Insert icons css in the document **/
document.addEventListener('uikit_init_start', (e) => {
    let cssUrl = `${new URL('./', import.meta.url).href}icon.css`; // getting url of this file and find css file in the same folder
    uikit.insertAdjacentHTML('beforeend', `<link href="${cssUrl}" rel="stylesheet"></link>` ); //Insert css in document, so he will start loading
});