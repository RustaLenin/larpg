class NiceSettings_Content extends HTMLElement {

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
        if ( model.content.tabs ) {
            Object.entries(model.content.tabs).forEach(([key, value]) => {
                html += `<div name="${key}" data-active="${value.active}" class="settings_tab">`;

                if ( typeof value.content === 'function' ) {
                    html += value.content();
                } else if ( typeof value.content === 'string' ) {
                    html += value.content;
                }

                html += `</div>`;
            });
        }
        return html;
    }

}

customElements.define( 'nice-settings__content', NiceSettings_Content );