## Projeto de teste da Sage


Cenário:
Implementar uma rotina de cadastro de pessoa e endereço utilizando o conceito de wizard, onde os dados de pessoas estarão presentes no primeiro step e os endereços no segundo step.

Observações:
O projeto deve contemplar uma listagem de pessoas, edição, consulta e exclusão nos dois steps.

Tecnologias
	Frontend
	• React JS
	• Redux
	• Material UI
	• É essencial utilizar recursos de componentização do React JS

	Backend (Se especialisra em Dev Front End, usar o https://www.mocky.io/ na parte de backend)
	• NET Core
	• EF Core
	• MySQl, PostgreSQL ou SQL Server

Entrega e documentação
Deverá ser disponibilizada no repositório público do GitHub, bem como os passos para execução e validação do projeto.
Após receber esse teste, por gentileza, estipular o prazo de execução e me enviar no próximo dia útil.
Serão avaliados pontos como: Usabilidade, boas práticas de programação, UI equalidade do código.

-----------------------------------------------------------------------------------------------------------------------------------
##Entrega do Projeto:
	
##Ferramentas utilizadas:
    Visual Studio 2019 community
    Visual Code

##Intruções de execução:
    Baixar o projeto do github, nele encontra-se o backend e o frontend:
    Backend: Selecionar como projeto principal o Sage.Api e executar pelo visual studio ou linha de comando (dotnet)
    Frontend: É o projeto Sage.Web, na verdade é para ser apenas uma pasta, abrir a pasta e executar no cmd o comando "npm start" ou "serve -s build"

##O que o projeto contempla:
    No backend um crud de cliente utilizando um banco sql server local (não precisa apontar para o sql express).
    No frontend uma listagem de clientes no primeiro step, um cadastro de clientes no segundo step e um cadastro de endereços no terceiro step.
    A unica tecnologia pedida não utilizada foi o redux.
			
##Explicação do projeto
    Backend: Estruturei o projeto em 3 camadas:
	Data onde utilizar EF Core para comunicar com o banco Sql Server, usei uma abordagem Code First;
	Domain, por enquanto tem apenas as entidades sem validação, a idéia é aplicar apenas alguns conceitos de DDD;
	API camada de apresentação, só a controller de cliente está com CRUD funcional;

    Frontend: Projeto React
	Criei componentes onde cada cadastro tem seu próprio state, e faço a comunicação entre os componentes através de funções de callback;
	Centralizei todas as funcionalidades no componente Step, para deixar os componentes menores focados apenas em view, a idéia é tirar a lógica e isolar em uma classe;
	Utilizei o material ui, não utilizei o redux, o motivo é que ainda estou apredendo sobre o react e não estudei sobre o redux ainda então não me senti seguro em arriscar muito na arquitetura do front;


