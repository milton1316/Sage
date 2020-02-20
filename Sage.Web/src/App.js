import './App.css';
import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import FormularioBox from "./Formulario";

function App() {

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" align="center" style={{ flexGrow: 1 }} >Cadastro de Clientes</Typography>
        </Toolbar>
      </AppBar>
      <FormularioBox style={{ backgroundColor: "#F5F5F5"}}></FormularioBox>
    </Container>
  );
}

export default App;
