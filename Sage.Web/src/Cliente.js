import React, { Component } from 'react';
import $ from "jquery";
import { Grid, TextField, MenuItem, Button, IconButton } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function formartarData(data) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(data)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}

export default class ClienteBox extends Component {

    constructor() {
        super();

        this.state = {
            clientes: [],
            id: 0, nome: '', sobrenome: '', cpf: '', dataNascimento: '', estadoCivil: 0
        }
        this.editar = this.editar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.setValor = this.setValor.bind(this);
    }

    componentDidMount() {
        $.ajax({
            url: "http://localhost:8000/api/clientes",
            dataType: "json",
            success: function (clientes) {
                clientes.forEach(function (item) {
                    item.dataNascimento = formartarData(item.dataNascimento);
                })
                this.setState({ clientes });
            }.bind(this)
        })
    }

    editar(cliente) {
        this.setState({ ...cliente }, () => {
            this.setState({ ...cliente });
        });
    }

    setValor(propriedade, valor) {
        this.setState({ [propriedade]: valor });
    }

    salvar() {
        if (this.state.id)
            this.atualizar();
        else
            this.incluir();
    }

    incluir() {
        $.ajax({
            url: "http://localhost:8000/api/clientes",
            contentType: "application/json",
            dataType: "json",
            type: "post",
            data: JSON.stringify({ nome: this.state.nome, sobrenome: this.state.sobrenome, cpf: this.state.cpf, dataNascimento: this.state.dataNascimento, estadoCivil: this.state.estadoCivil }),
            success: function (cliente) {
                this.setState({ id: cliente.id });
                this.props.irParaStep(1);
            }.bind(this),
            error: function (erro) {
                console.log(erro);
            }
        })
    }

    atualizar() {
        $.ajax({
            url: "http://localhost:8000/api/clientes/" + this.state.id,
            contentType: "application/json",
            dataType: "json",
            type: "put",
            data: JSON.stringify({ id: this.state.id, nome: this.state.nome, sobrenome: this.state.sobrenome, cpf: this.state.cpf, dataNascimento: this.state.dataNascimento, estadoCivil: this.state.estadoCivil }),
            success: function (cliente) {
                console.log(cliente);
                this.props.irParaStep(1);
            }.bind(this),
            error: function (erro) {
                console.log(erro);
            }
        })
    }

    excluir(id) {        
        $.ajax({
            url: "http://localhost:8000/api/clientes/" + id,
            contentType: "application/json",
            dataType: "json",
            type: "delete",
            success: function (resposta) {
                if(resposta) {
                    this.setState({
                        clientes: this.state.clientes.filter(function (cliente) {
                            return cliente.id !== id
                        })
                    });
                }
            }.bind(this),
            error: function (erro) {
                console.log(erro);
            }
        })
    }

    render() {
        return (
            <Grid container>
                <Grid item md={12}>
                    <FormularioCliente cliente={this.state} setValor={this.setValor}></FormularioCliente>
                </Grid>
                <Grid item md={12} style={{ marginTop: "20px" }}>
                    <ListagemCliente clientes={this.state.clientes} editar={this.editar} excluir={this.excluir}></ListagemCliente>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item md={12}>
                        <Button color="primary" variant="contained" onClick={this.salvar.bind(this)} style={{ float: "right" }}>Próximo</Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export class ListagemCliente extends Component {

    render() {
        return (
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
        );
    }
}

export class FormularioCliente extends Component {

    render() {
        return (
            <form style={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <TextField label="Nome" variant="outlined" fullWidth value={this.props.cliente.nome} onChange={(evento) => this.props.setValor('nome', evento.target.value)} />
                            </Grid>
                            <Grid item md={8}>
                                <TextField label="Sobrenome" variant="outlined" fullWidth value={this.props.cliente.sobrenome} onChange={(evento) => this.props.setValor('sobrenome', evento.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <TextField label="CPF" variant="outlined" fullWidth value={this.props.cliente.cpf} onChange={(evento) => this.props.setValor('cpf', evento.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField label="Data de nascimento" variant="outlined" fullWidth value={this.props.cliente.dataNascimento} onChange={(evento) => this.props.setValor('dataNascimento', evento.target.value)} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField label="Estado civil" variant="outlined" select fullWidth value={this.props.cliente.estadoCivil} onChange={(evento) => this.props.setValor('estadoCivil', evento.target.value)}>
                                    <MenuItem key="1" value="1">Solteiro</MenuItem>
                                    <MenuItem key="2" value="2">Casado</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }
}
