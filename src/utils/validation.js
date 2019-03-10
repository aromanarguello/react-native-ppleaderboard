const validate = (val, rules, connectedValue) => {
    let isValid = true;
    for (let rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(val);
            case 'minLength':
                isValid = isValid && minLengthValidator(val, rules[rule]);
            case 'equalTo':
                isValid =
                    isValid && equalToValidator(val, connectedValue[rule]);
            default:
                isValid = true;
        }
    }
    return isValid;
};

const emailValidator = val => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        val
    );
};

const minLengthValidator = (val, minLength) => val.length >= minLength;

const equalToValidator = (val, checkValue) => val === checkValue;

export default validate;
