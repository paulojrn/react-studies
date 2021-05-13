import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function UserData ({collectData})
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            collectData({email, password});
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
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                required
                fullWidth
            />
            
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

export default UserData;