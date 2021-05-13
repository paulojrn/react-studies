import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function DeliveryData ({collectData})
{
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            collectData({cep, address, addressNumber, state, country});
        }}>
            <TextField
                id="cep" 
                label="CEP" 
                type="number"
                variant="outlined"
                margin="normal"
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
                fullWidth
            />

            <TextField
                id="address" 
                label="Endereço" 
                type="text"
                variant="outlined"
                margin="normal"
                value={address}
                onChange={(event) => {
                    setAddress(event.target.value);
                }}
                fullWidth
            />

            <TextField
                id="address-number" 
                label="Número" 
                type="number"
                variant="outlined"
                margin="normal"
                value={addressNumber}
                onChange={(event) => {
                    setAddressNumber(event.target.value);
                }}
                fullWidth
            />

            <TextField
                id="state" 
                label="Estado" 
                type="text"
                variant="outlined"
                margin="normal"
                value={state}
                onChange={(event) => {
                    setState(event.target.value);
                }}
                fullWidth
            />

            <TextField
                id="country" 
                label="País" 
                type="text"
                variant="outlined"
                margin="normal"
                value={country}
                onChange={(event) => {
                    setCountry(event.target.value);
                }}
                fullWidth
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar
            </Button>
        </form>
    );
}

export default DeliveryData;