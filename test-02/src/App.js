import { Container, Typography } from '@material-ui/core';
import { Component } from 'react';
import './App.css';
import FormHome from './components/FormHome/FormHome';

class App extends Component {
  render()
  {
    return (
      <Container
        component="article"
        maxWidth="sm">

          <Typography
            component="h1"
            variant="h3" 
            align="center">
              Formulário de cadastro
          </Typography>

          <FormHome sendFormData={sendFormData} validateCpf={validateCpf}/>
          
      </Container>
    );
  }  
}

function sendFormData (data)
{
  console.log(data);
}

function validateCpf (cpf) 
{
  let validate = {valid: true, text: ""};

  if (cpf.length !== 11) {
      validate = {valid: false, text: "CPF deve ter 11 dígitos"};
  }

  return validate;
}

export default App;
