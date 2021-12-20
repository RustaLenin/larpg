class NiceSettings_Header extends HTMLElement {

    constructor() {
        super();
        this.render();
        this.model = this.closest('nice-settings').model;
    }

    render() {
        this.innerHTML = this.template();
    }

    template() {
        let model = this.model;
        let html = ``;
        html += `<div class="header_title">${model.title}</div>`;
        html += `<div class="header_controls">
            <nice-button>Collapse All</nice-button>
            <nice-button>Expand All</nice-button>
            <nice-button>Save Settings</nice-button>
        </div>`;
        return html;
    }

}

customElements.define( 'nice-settings__header', NiceSettings_Header );