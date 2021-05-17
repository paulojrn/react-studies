import React, {useState} from "react";

function useErrors (validations)
{
    const [errors, setErrors] = useState(createInitialState(validations));

    function validateFields (event)
    {
        const {name, value} = event.target;
        const validate = validations[name](value);
        const errorState = {...errors};
        errorState[name] = validate;

        setErrors(errorState);
    }

    function hasErrors ()
    {
        let invalid = false;

        for (let error in errors) {
            if (!errors[error].valid) {
                invalid = true;
                break;
            }
        }

        return invalid;
    }

    return [errors, validateFields, hasErrors];
}

function createInitialState (validations)
{
    const initialState = {};

    for (let field in validations) {
        initialState[field] = {valid: true, text: ""};
    }

    return initialState;
}

export default useErrors;