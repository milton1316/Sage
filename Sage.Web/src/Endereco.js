import React, { Component } from 'react';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core';

export default class FormularioEndereco extends Component {

    render() {
        return (
            <form style={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item md={10}>
                                <TextField label="Logradouro" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={2}>
                                <TextField label="Numero" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <TextField label="CEP" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={3}>
                                <TextField label="Bairro" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={3}>
                                <TextField label="Cidade" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={3}>
                                <TextField label="Estado" variant="outlined" select fullWidth>
                                    <MenuItem key="1" value="1">São Paulo</MenuItem >
                                    <MenuItem key="2" value="2">Rio de Janeiro</MenuItem >
                                </TextField>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item md={6}>
                        <Button color="primary" variant="contained" onClick={() => this.props.irParaStep(1)}>Anterior</Button>
                    </Grid>
                    <Grid item md={6}>
                        <Button color="primary" variant="contained" style={{ float: "right" }}>Salvar</Button>
                    </Grid>
                </Grid>
            </form>

        );
    }
}
