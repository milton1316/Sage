import React, { Component } from "react";
import { Container, Stepper, Step, StepLabel, Collapse, Button } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import $ from "jquery";
import { ListagemCliente, FormularioCliente } from './Cliente';
import { FormularioEndereco } from './Endereco';

export default class Steps extends Component {
    constructor() {
        super()

        this.state = {
            stepAtivo: 0,
            clientes: [],
            mensagem: {
                visivel: false,
                conteudo: '',
                classCss: 'info'
            },
            exclusao: false
        };

        this.cliente = {};
        this.novo = this.novo.bind(this);
        this.listar = this.listar.bind(this);
        this.editar = this.editar.bind(this);
        this.salvar = this.salvar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.confirmarExclusao = this.confirmarExclusao.bind(this);
        this.obterCliente = this.obterCliente.bind(this);
        this.obterEndereco = this.obterEndereco.bind(this);
        this.limparMensagem = this.limparMensagem.bind(this);
        this.irParaStep = this.irParaStep.bind(this);
    }

    componentDidMount() {
        this.listar();
    }

    listar() {
        $.ajax({
            url: "http://localhost:8000/api/clientes",
            dataType: "json",
            success: function (clientes) {               
                this.setState({ clientes });
            }.bind(this)
        })
    }

    irParaStep(step, callback) {
        this.setState({ stepAtivo: step });
        if (callback !== undefined)
            callback();
    };

    limparMensagem() {
        this.setState({
            mensagem: {
                visivel: false,
                conteudo: '',
                classCss: 'info'
            }
        });
    }

    novo() {
        this.cliente = {};
        this.limparMensagem();
        this.irParaStep(1);
    }

    editar(cliente) {
        this.cliente = cliente;
        this.limparMensagem();
        this.irParaStep(1);
    }

    salvar() {
        if (this.cliente.id)
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
            data: JSON.stringify(this.cliente),
            success: function (cliente) {

                const clientes = this.state.clientes;
                clientes.push(cliente);

                this.setState({
                    clientes,
                    mensagem: {
                        visivel: true,
                        conteudo: 'Cliente cadastrado com sucesso!',
                        classCss: 'success'
                    }
                });

                this.cliente = {};
                this.irParaStep(0);

            }.bind(this),
            error: function (erro) {
                console.log(erro);
                this.setState({
                    mensagem: {
                        visivel: true,
                        conteudo: 'Ocorreu erro(s) ao tentar cadastrar um cliente!',
                        classCss: 'error'
                    }
                });
            }.bind(this)
        })
    }

    atualizar() {
        $.ajax({
            url: "http://localhost:8000/api/clientes/" + this.cliente.id,
            contentType: "application/json",
            dataType: "json",
            type: "put",
            data: JSON.stringify(this.cliente),
            success: function (cliente) {

                const clientes = this.state.clientes;
                const i = clientes.findIndex(item => item.id === cliente.id)
                clientes[i] = cliente;

                this.setState({
                    clientes,
                    mensagem: {
                        visivel: true,
                        conteudo: 'Cliente alterado com sucesso!',
                        classCss: 'success'
                    }
                });
                this.cliente = {};
                this.irParaStep(0);

            }.bind(this),
            error: function (erro) {
                console.log(erro);
                this.setState({
                    mensagem: {
                        visivel: true,
                        conteudo: 'Ocorreu erro(s) ao tentar alterar um cliente!',
                        classCss: 'error'
                    }
                });
            }.bind(this)
        })
    }

    excluir(id) {
        this.cliente.id = id;
        this.setState({ exclusao: true });
    }

    confirmarExclusao() {
        $.ajax({
            url: "http://localhost:8000/api/clientes/" + this.cliente.id,
            contentType: "application/json",
            dataType: "json",
            type: "delete",
            success: function (resposta) {
                if (resposta) {

                    const clientes = this.state.clientes.filter(function (cliente) {
                        return cliente.id !== this.cliente.id
                    }.bind(this));

                    this.setState({
                        clientes,
                        mensagem: {
                            visivel: true,
                            conteudo: 'Cliente excluido com sucesso!',
                            classCss: 'success'
                        },
                        exclusao: false
                    });
                }
            }.bind(this),
            error: function (erro) {
                console.log(erro);
                this.setState({
                    mensagem: {
                        visivel: true,
                        conteudo: 'Ocorreu erro(s) ao tentar alterar um cliente!',
                        classCss: 'error'
                    },
                    exclusao: false
                });
            }
        })
    }

    obterCliente(cliente) {
        this.cliente = cliente;
    }

    obterEndereco(endereco) {
        if (this.cliente) {
            this.cliente.endereco = endereco;
        }
    }

    obterConteudo(step) {
        switch (step) {
            case 0:
            default:
                return <ListagemCliente clientes={this.state.clientes} novo={this.novo} editar={this.editar} excluir={this.excluir}></ListagemCliente>
            case 1:
                return <FormularioCliente irParaStep={this.irParaStep} cliente={this.cliente} obter={this.obterCliente}></FormularioCliente>;
            case 2:
                return <FormularioEndereco irParaStep={this.irParaStep} endereco={this.cliente.endereco} obter={this.obterEndereco} salvar={this.salvar}></FormularioEndereco>;
        }
    }

    render() {
        return (
            <Container>
                <Collapse in={this.state.mensagem.visivel} style={{ 'marginTop': '20px' }}>
                    <Alert severity={this.state.mensagem.classCss} onClose={() => this.setState({ mensagem: { visivel: false } })}>
                        {this.state.mensagem.conteudo}
                    </Alert>
                </Collapse>
                <Stepper alternativeLabel activeStep={this.state.stepAtivo}>
                    <Step key={0}>
                        <StepLabel>Listagem</StepLabel>
                    </Step>
                    <Step key={1}>
                        <StepLabel>Clientes</StepLabel>
                    </Step>
                    <Step key={2}>
                        <StepLabel>Endereços</StepLabel>
                    </Step>
                </Stepper>
                {
                    this.obterConteudo(this.state.stepAtivo)
                }
                <Dialog open={this.state.exclusao} onClose={() => this.setState({ exclusao: false })}>
                    <DialogTitle>Deseja excluir o Cliente?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Por favor, confirme a exclusão do cliente.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.confirmarExclusao} color="primary">Confirmar</Button>
                        <Button onClick={() => this.setState({ exclusao: false })} color="primary" autoFocus>Cancelar</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        );
    }
}