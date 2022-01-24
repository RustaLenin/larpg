class NiceSettings_Header extends HTMLElement {

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
        html += `<div class="header_title">${model.title}</div>`;
        html += `<div class="header_controls">
            <nice-button text="Collapse All" icon="double_arrow_down"></nice-button>
            <nice-button text="Expand All" icon="double_arrow_down" icon_rotate="true"></nice-button>
            <nice-button class="confirm" text="Save Settings" icon="check"></nice-button>
        </div>`;
        return html;
    }

}

customElements.define( 'nice-settings_header', NiceSettings_Header );