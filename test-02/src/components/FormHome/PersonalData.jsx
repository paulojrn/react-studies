import { useState, useContext } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import ContextValidation from "../../validations/ContextValidation";

function PersonalData ({collectData})
{
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [cpf, setCpf] = useState("");
    const [onsale, setOnsale] = useState(true);
    const [news, setNews] = useState(true);
    const [errors, setErrors] = useState({
        cpf: {valid: true, text: ""},
        name: {valid: true, text: ""}
    });

    const validations = useContext(ContextValidation);

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

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                if (!hasErrors()) {
                    collectData({name, surname, cpf, onsale, news});
                }
            }}
        >

            <TextField
                id="name"
                name="name"
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
                error={!errors.name.valid}
                helperText={errors.name.text}
                onBlur={validateFields}
                fullWidth
            />

            <TextField 
                id="surname" 
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
                id="cpf"
                name="cpf"
                label="CPF" 
                variant="outlined" 
                margin="normal"
                value={cpf}
                error={!errors.cpf.valid}
                helperText={errors.cpf.text}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validateFields}
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
                    Próximo
            </Button>
        </form>
    );
}

export default PersonalData;