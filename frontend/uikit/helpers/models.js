export function collectModel(defaults, element) {
    let model = {};
    Object.entries(defaults).forEach ( ([key, val])  => {
        let attr = element.getAttribute(key);
        if (attr) {
            model[key] = attr;
        } else {
            model[key] = val;
        }
    });
    return model;
}