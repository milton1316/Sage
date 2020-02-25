import './App.css';
import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import StepBox from "./Steps";

function App() {

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" align="center" style={{ flexGrow: 1 }} >Cadastro de Clientes</Typography>
        </Toolbar>
      </AppBar>
      <StepBox></StepBox>      
    </Container>
  );
}

export default App;
