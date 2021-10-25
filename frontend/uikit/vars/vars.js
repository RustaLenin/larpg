import {uikit} from "../uikit.js";
import { defaultTheme } from './themes.js';

document.addEventListener('uikit_init_start', (e) => {
    // let cssUrl = `${new URL('./', import.meta.url).href}vars.css`; // getting url of app.css file based on this file url
    // uikit.insertAdjacentHTML('beforeend', `<link href="${cssUrl}" rel="stylesheet"></link>` ); //Insert css in document, so he will start loading
    uikit.CSSVars = defaultTheme;
    document.querySelector('#uikit').insertAdjacentHTML('beforeend', `<style id="CSSVars"></style>`);
    updateVars()
    uikit.changeCSSVar = changeCSSVar;
});



function renderHTML() {
    let vars = uikit.CSSVars;
    let html = ` :root {`;
    Object.entries(vars).forEach( ([ key, value]) => {
        html += `--${key}: ${value};`;
    });
    html += `}`;
    return html;
}

function updateVars() {
    document.querySelector('#CSSVars').innerHTML = renderHTML();
}

function changeCSSVar( variable, value ) {
    if ( uikit.CSSVars[variable] ) {
        uikit.CSSVars[variable] = value;
    }
    updateVars();
}