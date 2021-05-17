import { Container, Typography } from '@material-ui/core';
import { Component } from 'react';
import './App.css';
import FormHome from './components/FormHome/FormHome';
import {validateCpf, validatePassword} from "./validations/comum";
import ContextValidation from './validations/ContextValidation';

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

          <ContextValidation.Provider value={{
              cpf: validateCpf,
              password: validatePassword,
              name: validatePassword
            }}>
          
            <FormHome sendFormData={sendFormData}/>
          </ContextValidation.Provider>
          
          
      </Container>
    );
  }  
}

function sendFormData (data)
{
  console.log(data);
}

export default App;
