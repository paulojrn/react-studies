function validateCpf (cpf) 
{
  let validate = {valid: true, text: ""};

  if (cpf.length !== 11) {
      validate = {valid: false, text: "CPF deve ter 11 dígitos"};
  }

  return validate;
}

function validatePassword (password)
{
    let validate = {valid: true, text: ""};

    if (password.length < 4 || password.length > 20) {
        validate = {valid: false, text: "Deve ter entre 4 e 20 dígitos"};
    }

    return validate;
}

export {validateCpf, validatePassword};