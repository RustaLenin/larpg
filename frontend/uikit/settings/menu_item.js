import { collectModel } from '../helpers/models.js'
import { switch_tab } from "../behavior/tabs/tabs.js";

/** Default notify data **/
const defaults = {
    name: 'menu_element',
    label: 'Menu element',
    icon: false,
    active: false,
    order: 0,
};

class NiceSettings_MenuItem extends HTMLElement {

    constructor() {
        super();
        this.render();
        this.onclick = () => {
            switch_tab(this);
        }
    }

    render() {
        this.model = collectModel(defaults, this);
        // this.model.id = this.getAttribute('id');
        this.innerHTML = this.template();
        this.setAttribute('active',this.model.active );
        this.setAttribute('name',this.model.name );
    }

    template() {
        let model = this.model;
        let html = ``;
        console.log(model.icon);
        if ( model.icon !== 'false' ) {
            html += `<nice-icon icon="${model.icon}"></nice-icon>`;
        }
        html += `<div class="menu_element__label">${model.label}</div>`;

        return html;
    }

}

customElements.define( 'nice-settings__menu_item', NiceSettings_MenuItem );