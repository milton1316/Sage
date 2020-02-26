import React, { Component } from 'react';
import { Grid, MenuItem, Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import InputMask from "react-input-mask";

export class FormularioEndereco extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.endereco.id ? props.endereco.id : 0,
            cep: props.endereco.cep ? props.endereco.cep : '',
            estado: props.endereco.estado ? props.endereco.estado : 0,
            cidade: props.endereco.cidade ? props.endereco.cidade : '',
            bairro: props.endereco.bairro ? props.endereco.bairro : '',
            logradouro: props.endereco.logradouro ? props.endereco.logradouro : '',
            numero: props.endereco.numero ? props.endereco.numero : ''
        }
    }

    salvar() {
        const endereco = Object.assign(this.state);
        this.props.obter(endereco);
        this.props.salvar();
    }

    render() {
        return (
            <ValidatorForm onSubmit={this.salvar.bind(this)}>
                <Grid container direction="row">
                    <Grid item md={12} xs={12}>
                        <Grid container style={{ marginTop: "20px" }}>
                            <Grid item md={12}>
                                <input type="hidden" value={this.state.id} ref={(input) => this.id = input} />
                                <Grid container spacing={2}>
                                    <Grid item md={3} sm={12}>
                                        <InputMask mask="99999-999" value={this.state.cep} onChange={(input) => this.setState({ cep: input.target.value })}>
                                            <TextValidator label="CEP" variant="outlined" fullWidth validators={['required']} errorMessages={['Campo obrigatório']} />
                                        </InputMask>
                                    </Grid>
                                    <Grid item md={3} sm={12}>
                                        <TextValidator label="Estado" variant="outlined" select fullWidth value={this.state.estado}
                                            onChange={(input) => this.setState({ estado: input.target.value })}
                                            validators={['minNumber:1']} errorMessages={['Campo obrigatório']}>
                                            <MenuItem key={0} value={0}>Selecione</MenuItem >
                                            <MenuItem key={1} value={1}>São Paulo</MenuItem >
                                            <MenuItem key={2} value={2}>Rio de Janeiro</MenuItem >
                                        </TextValidator>
                                    </Grid>
                                    <Grid item md={3} sm={12}>
                                        <TextValidator label="Cidade" variant="outlined" fullWidth value={this.state.cidade}
                                            onChange={(input) => this.setState({ cidade: input.target.value })}
                                            validators={['required', 'minStringLength:2']} errorMessages={['Campo obrigatório', 'Deve ter no minimo 2 caracteres']} />
                                    </Grid>
                                    <Grid item md={3} sm={12}>
                                        <TextValidator label="Bairro" variant="outlined" fullWidth value={this.state.bairro}
                                            onChange={(input) => this.setState({ bairro: input.target.value })}
                                            validators={['required', 'minStringLength:2']} errorMessages={['Campo obrigatório', 'Deve ter no minimo 2 caracteres']} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item md={10} sm={12}>
                                        <TextValidator label="Logradouro" variant="outlined" fullWidth value={this.state.logradouro}
                                            onChange={(input) => this.setState({ logradouro: input.target.value })}
                                            validators={['required', 'minStringLength:2']} errorMessages={['Campo obrigatório', 'Deve ter no minimo 2 caracteres']} />
                                    </Grid>
                                    <Grid item md={2} sm={12}>
                                        <TextValidator label="Numero" variant="outlined" fullWidth value={this.state.numero}
                                            onChange={(input) => this.setState({ numero: input.target.value })} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} style={{ marginTop: "20px" }}>
                        <Grid container direction="row">
                            <Grid item md={6}>
                                <Button color="primary" variant="contained" onClick={() => this.props.irParaStep(1)}>Anterior</Button>
                            </Grid>
                            <Grid item md={6}>
                                <Button type="submit" color="primary" variant="contained" style={{ float: "right" }}>Salvar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>
        );
    }
}
