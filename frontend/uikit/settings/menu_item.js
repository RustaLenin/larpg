class NiceSettings_MenuItem extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        // this.model = collectModel(defaults, this);
        // this.model.id = this.getAttribute('id');
        this.innerHTML = this.template();
    }

    template() {
        let model = this.model;
        let html = ``;
        html += `<div class="menu_element__icon"></div>`;
        html += `<div class="menu_element__label"></div>`;

        return html;
    }

}

customElements.define( 'nice-settings__menu_item', NiceSettings_MenuItem );