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
        html += `<div class="menu_list">Foreach list</div>`;
        html += `<div class="menu_controls">
            
        </div>`;
        return html;
    }

}

customElements.define( 'nice-settings__menu', NiceSettings_Menu );