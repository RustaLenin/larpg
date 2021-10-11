import {debounce} from '../helpers/debounce.js';

export const delayValidation = debounce(validate, 1800);

export function validate( element ) {
    let result;
    let value = element.getAttribute('value')
    let validation_type = element.getAttribute('validation');
    let func = validations[validation_type];
    console.log(func);
    if ( typeof func === 'function' ) {
        result = func(value);
    } else {
        element.setAttribute('error', true);
        element.querySelector('.field_message').innerHTML = 'Invalid validation method';
    }

    if ( !result ) {
        console.log('That is error');
        element.setAttribute('error', true);
        element.querySelector('.field_message').innerHTML = element.model.error_message;
    }
    console.log('Validation End');
}

const validations = {
    isCurrency,
    isTime,
    isImgUrl,
    isUrl,
    isHex,
    isDate,
    isInt,
    isPhone,
    'email': isValidEmail,
    isValidLogin,
    isValidLatin,
    isValidTitle
}

const validationTypes = {
    'email': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'login': /^[-a-zA-Z0-9 ]+$/,
    'latin': /^[a-zA-Z0-9 ]+$/,
    'title': /^[a-zA-Z0-9 \.\\,\-\"\']+$/,
    'currency': /^[A-Z]{3,6}$/,
    'int': /^[0-9]*$/,
    'ddmmyyyy': /^([0-3][0-9])[\.\-\\\/]([0-1][0-9])[\.\-\\\/]([0-9]{2,4})$/,
    'mmddyyyy': /^([0-1][0-9])[\.\-\\\/]([0-3][0-9])[\.\-\\\/]([0-9]{2,4})$/,
    'hex': /^(#)[0-9a-fA-F]{6,8}$/,
    'url': /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    'img_url': /^(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))$/,
    'phone': /^[-0-9()+]*$/,
    'time': /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/,
};

function isCurrency(val) {
    return validationTypes['currency'].test(val);
}
function isTime(val) {
    return validationTypes['time'].test(val);
}

function isImgUrl(val) {
    return validationTypes['img_url'].test(val);
}

function isUrl(val) {
    return validationTypes['url'].test(val);
}

function isHex(val) {
    return validationTypes['hex'].test(val);
}

function isDate(val) {

    let isDmy = validationTypes['ddmmyyyy'].test(val);
    let isMdy = validationTypes['mmddyyyy'].test(val);

    if (isDmy || isMdy) {

        let first_part = parseInt(val.substring(0, 2));
        let second_part = parseInt(val.substring(3, 5));


        if (isDmy) {

            return (first_part < 32 && second_part < 13)

        }

        if (isMdy) {
            return (first_part < 13 && second_part < 32)
        }


    } else {
        return false
    }
}

function isInt(val) {
    if (val.length > 0) {
        return validationTypes['int'].test(val);
    } else {
        return false
    }

}

function isPhone(val) {
    if (val.length > 0) {
        return validationTypes['phone'].test(val);
    } else {
        return false
    }
}

function isValidEmail(val) {
    return validationTypes['email'].test(val);
}

function isValidLogin(val) {

    if (val.length > 1) {
        return validationTypes['login'].test(val);
    } else {
        return false;
    }

}

function isValidLatin(val) {

    if (val.length > 1) {
        return validationTypes['latin'].test(val);
    } else {
        return false;
    }

}

function isValidTitle(val) {

    if (val.length > 1) {
        return validationTypes['title'].test(val);
    } else {
        return false;
    }

}
