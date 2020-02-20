import React, { Component } from "react";
import { Container, Stepper, Step, StepLabel } from "@material-ui/core";
import ClienteBox from './Cliente';
import FormularioEndereco from './Endereco';

export default class Steps extends Component {
    constructor() {
        super()
        this.state = {
            stepAtivo: 0
        };
        this.irParaStep = this.irParaStep.bind(this);

    }

    irParaStep(step) {
        this.setState({ stepAtivo: step });
    };

    obterConteudo(step) {
        switch (step) {
            case 0:
            default:
                return <ClienteBox irParaStep={this.irParaStep} clientes={this.props.clientes}></ClienteBox>                
            case 1:
                return <FormularioEndereco irParaStep={this.irParaStep}></FormularioEndereco>;
        }
    }

    render() {
        return (
            <Container>
                <Stepper alternativeLabel activeStep={this.state.stepAtivo}>
                    <Step key={0}>
                        <StepLabel>Clientes</StepLabel>
                    </Step>
                    <Step key={1}>
                        <StepLabel>Endereços</StepLabel>
                    </Step>                    
                </Stepper>
                {
                    this.obterConteudo(this.state.stepAtivo)
                }
            </Container>
        );
    }
}