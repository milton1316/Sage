import React, { Component } from 'react';
import { Grid, MenuItem, Button, IconButton } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import InputMask from "react-input-mask";

export class ListagemCliente extends Component {

    render() {
        return (
            <Grid container>
                <TableContainer component={Paper} style={{ height: "300px", overflowX: "hidden", overflowY: "auto" }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Sobrenome</TableCell>
                                <TableCell>CPF</TableCell>
                                <TableCell style={{ width: 100 }}>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.clientes.map(function (cliente) {
                                    return (
                                        <TableRow key={cliente.id}>
                                            <TableCell>{cliente.nome}</TableCell>
                                            <TableCell>{cliente.sobrenome}</TableCell>
                                            <TableCell>{cliente.cpf}</TableCell>
                                            <TableCell>
                                                <IconButton color="primary" onClick={() => this.props.editar(cliente)}>
                                                    <EditIcon></EditIcon>
                                                </IconButton>
                                                <IconButton color="secondary" onClick={() => this.props.excluir(cliente.id)}>
                                                    <DeleteIcon></DeleteIcon>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                }.bind(this))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item md={12} xs={12}>
                        <Button color="primary" variant="contained" onClick={this.props.novo} style={{ float: "right" }}>Novo</Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export class FormularioCliente extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.cliente.id ? props.cliente.id : 0,
            nome: props.cliente.nome ? props.cliente.nome : '',
            sobrenome: props.cliente.sobrenome ? props.cliente.sobrenome : '',
            cpf: props.cliente.cpf ? props.cliente.cpf : '',
            dataNascimento: props.cliente.dataNascimento ? props.cliente.dataNascimento : new Date(),
            estadoCivil: props.cliente.estadoCivil ? props.cliente.estadoCivil : 0,
            endereco: props.cliente.endereco ? props.cliente.endereco : {}
        }
    }

    proximo() {
        const cliente = Object.assign(this.state);
        this.props.irParaStep(2, this.props.obter(cliente));
    }

    render() {
        return (
            <ValidatorForm onSubmit={this.proximo.bind(this)}>
                <Grid container direction="row">
                    <Grid item md={12} xs={12}>
                        <Grid container style={{ marginTop: "20px" }}>
                            <Grid item md={12}>
                                <input type="hidden" value={this.state.id} ref={(input) => this.id = input} />
                                <Grid container spacing={2}>
                                    <Grid item md={4} sm={12}>
                                        <TextValidator label="Nome" variant="outlined" fullWidth value={this.state.nome}
                                            onChange={(input) => this.setState({ nome: input.target.value })}
                                            validators={['required', 'minStringLength:2']} errorMessages={['Campo obrigatório', 'Deve ter no minimo 2 caracteres']} />
                                    </Grid>
                                    <Grid item md={8} sm={12}>
                                        <TextValidator label="Sobrenome" variant="outlined" fullWidth value={this.state.sobrenome}
                                            onChange={(input) => this.setState({ sobrenome: input.target.value })} />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item md={4} sm={12}>
                                        <InputMask mask="999.999.999-99" value={this.state.cpf} onChange={(input) => this.setState({ cpf: input.target.value })}>
                                            <TextValidator label="CPF" variant="outlined" fullWidth validators={['required']} errorMessages={['Campo obrigatório']} />
                                        </InputMask>
                                    </Grid>
                                    <Grid item md={4} sm={12}>
                                        <TextValidator label="Estado civil" variant="outlined" select fullWidth defaultValue={0}
                                            value={this.state.estadoCivil} validators={['minNumber:1']} errorMessages={['Campo obrigatório']}
                                            onChange={(input) => this.setState({ estadoCivil: input.target.value })} >
                                            <MenuItem key={0} value={0}>Selecione</MenuItem>
                                            <MenuItem key={1} value={1}>Solteiro</MenuItem>
                                            <MenuItem key={2} value={2}>Casado</MenuItem>
                                        </TextValidator>
                                    </Grid>
                                    <Grid item md={4} sm={12}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <DatePicker variant="outlined" margin="dense" autoOk format="dd/MM/yyyy" label="Data de nascimento" fullWidth value={this.state.dataNascimento} onChange={(input) => this.setState({ dataNascimento: input })} />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12} style={{ marginTop: "20px" }}>
                        <Grid container direction="row">
                            <Grid item md={6}>
                                <Button color="primary" variant="contained" onClick={() => this.props.irParaStep(0)}>Anterior</Button>
                            </Grid>
                            <Grid item md={6}>
                                <Button type="submit" color="primary" variant="contained" style={{ float: "right" }}>Próximo</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>

        );
    }
}
