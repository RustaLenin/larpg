class NiceSettings_Menu extends HTMLElement {

    constructor() {
        super();
        this.model = this.closest('nice-settings').model;

        this.render();
    }

    render() {
        this.innerHTML = this.template();
    }

    template() {
        let model = this.model;
        let html = ``;
        html += `<div class="menu_list">`;
        Object.entries(model.menu.list).forEach(([key, value]) => {
            // console.log(key + `: ` + value)
            html += `<nice-settings__menu_item
                        name="${value.name}"
                        label="${value.label}"
                        icon="${value.icon}"
                        active="${value.active}"
                        ></nice-settings__menu_item>`
        });

        html += `</div>`;
        html += `<div class="menu_controls">
            
        </div>`;
        return html;
    }

}

customElements.define( 'nice-settings__menu', NiceSettings_Menu );