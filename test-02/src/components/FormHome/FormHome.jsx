import {useState} from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormHome ({sendFormData, validateCpf})
{

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [cpf, setCpf] = useState("");
    const [onsale, setOnsale] = useState(true);
    const [news, setNews] = useState(true);
    const [error, setError] = useState({cpf: {
        valid: true,
        text: ""
    }});

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                sendFormData({
                    name, surname, cpf, onsale, news
                });
            }}
        >

            <TextField
                id="form-nome" 
                label="Nome"
                variant="outlined"
                margin="normal"
                value={name}
                onChange={(event) => {
                    let nameTmp = event.target.value.trim();
                    let nameMaxSize = 10;

                    if (nameTmp.length >= nameMaxSize) {
                        nameTmp = nameTmp.substr(0, nameMaxSize);
                    }

                    setName(nameTmp);
                }}
                fullWidth
            />

            <TextField 
                id="form-sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="normal" 
                value={surname}
                onChange={(event) => {
                    setSurname(event.target.value);
                }}
                fullWidth
            />

            <TextField 
                id="form-cpf" 
                label="CPF" 
                variant="outlined" 
                margin="normal"
                value={cpf}
                error={!error.cpf.valid}
                helperText={error.cpf.text}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    let validate = validateCpf(event.target.value);

                    setError({cpf: validate});
                }}
                fullWidth
            />

            <FormControlLabel 
                label="Promoções" 
                control={
                    <Switch
                        name="onsale"
                        checked={onsale}
                        color="primary"
                        onChange={(event) => {
                            setOnsale(event.target.checked);
                        }}
                    />
                }
            />
            
            <FormControlLabel 
                label="Novidades"
                control={
                    <Switch
                        name="news"
                        checked={news}
                        color="primary"
                        onChange={(event) => {
                            setNews(event.target.checked);
                        }}
                    />
                }
            />            

            <Button
                type="submit" 
                variant="contained" 
                color="primary">
                    Cadastrar
            </Button>
        </form>
    );
}

export default FormHome;