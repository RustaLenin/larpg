export function dataToArgs( data ) {
    let argsHTML = ``;
    if ( typeof data === 'object' ) {
        Object.entries(data).forEach ( ([key, val])  => {
            argsHTML += `${key}="${val}" `;
        });
    }
    return argsHTML;
}