export function switch_tab( elem, params ) {

    let default_params = {
        'tab_atr_name': 'data-active',
        'nav_atr_name': 'active',
        'common_parent': '.setting_body',
        'tab_selector': '.settings_tab'
    };

    if ( typeof params === 'undefined') {
        params = default_params;
    }

    if ( elem.getAttribute( params.nav_atr_name ) === 'false' ) {
        let tab_name = elem.getAttribute('name');
        elem.parentNode.querySelector('[active="true"]').setAttribute(params.nav_atr_name, 'false');
        elem.setAttribute(params.nav_atr_name, 'true');

        let common_parent = elem.closest(params.common_parent);
        common_parent.querySelector(params.tab_selector + '[' + params.tab_atr_name + '=true]').setAttribute(params.tab_atr_name, 'false');
        common_parent.querySelector(params.tab_selector + `[name=${tab_name}]`).setAttribute(params.tab_atr_name, 'true');
    }

}