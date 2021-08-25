import * as svg from './icon/icon.js';
import * as vars from './vars/vars.js';
import * as button from './button/button.js';
import * as notify from './notify/notify.js';
import * as font from './font/font.js';

document.head.insertAdjacentHTML('beforeend', `<div id="uikit"></div>`);
export const uikit = document.querySelector('#uikit');
let events = {
    'init': new Event('uikit_init_start')
}
document.dispatchEvent(events.init);