import React from "react";

const ContextValidation = React.createContext({
    cpf: noValidation,
    password: noValidation,
    name: noValidation
});

function noValidation ()
{
    return {valid: true, text: ""};
}

export default ContextValidation;