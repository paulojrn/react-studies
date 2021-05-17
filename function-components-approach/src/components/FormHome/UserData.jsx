import { Button, TextField } from "@material-ui/core";
import { useState, useContext } from "react";
import ContextValidation from "../../validations/ContextValidation";
import useErrors from "../../customHooks/useErrors";

function UserData ({collectData})
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validations = useContext(ContextValidation);
    const [errors, validateFields, hasErrors] = useErrors(validations);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            
            if (!hasErrors()) {
                collectData({email, password});
            }            
        }}>
            <TextField
                id="email" 
                label="E-mail" 
                type="email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                required
                fullWidth
            />

            <TextField
                id="password"
                name="password"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                onBlur={validateFields}
                error={!errors.password.valid}
                helperText={errors.password.text}
                required
                fullWidth
            />
            
            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default UserData;