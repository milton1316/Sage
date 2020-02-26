Projeto de teste da Sage

Cen�rio:
Implementar uma rotina de cadastro de pessoa e endere�o utilizando o conceito de wizard, onde os dados de pessoas estar�o presentes no primeiro step e os endere�os no segundo step.

Observa��es:
O projeto deve contemplar uma listagem de pessoas, edi��o, consulta e exclus�o nos dois steps.

Tecnologias
	Frontend
	� React JS
	� Redux
	� Material UI
	� � essencial utilizar recursos de componentiza��o do React JS

	Backend (Se especialisra em Dev Front End, usar o https://www.mocky.io/ na parte de backend)
	� NET Core
	� EF Core
	� MySQl, PostgreSQL ou SQL Server

Entrega e documenta��o
Dever� ser disponibilizada no reposit�rio p�blico do GitHub, bem como os passos para execu��o e valida��o do projeto.
Ap�s receber esse teste, por gentileza, estipular o prazo de execu��o e me enviar no pr�ximo dia �til.
Ser�o avaliados pontos como: Usabilidade, boas pr�ticas de programa��o, UI equalidade do c�digo.

-----------------------------------------------------------------------------------------------------------------------------------
Entrega do Projeto:
	Ferramentas utilizadas:
		Visual Studio 2019 community
		Visual Code

	Intru��es de execu��o:
		Baixar o projeto do github, nele encontra-se o backend e o frontend:
		Backend: Selecionar como projeto principal o Sage.Api e executar pelo visual studio ou linha de comando (dotnet)
		Frontend: � o projeto Sage.Web, na verdade � para ser apenas uma pasta, abrir a pasta e executar no cmd o comando "npm start" ou "serve -s build"

	O que o projeto contempla:
	    No backend um crud de cliente utilizando um banco sql server local (n�o precisa apontar para o sql express).
		No frontend uma listagem de clientes no primeiro step, um cadastro de clientes no segundo step e um cadastro de endere�os no terceiro step.
		A unica tecnologia pedida n�o utilizada foi o redux.
			
	Explica��o do projeto
		Backend: Estruturei o projeto em 3 camadas:
			- Data onde utilizar EF Core para comunicar com o banco Sql Server, usei uma abordagem Code First;
			- Domain, por enquanto tem apenas as entidades sem valida��o, a id�ia � aplicar apenas alguns conceitos de DDD;
			- API camada de apresenta��o, s� a controller de cliente est� com CRUD funcional;

		Frontend: Projeto React
			- Criei componentes onde cada cadastro tem seu pr�prio state, e fa�o a comunica��o entre os componentes atrav�s de fun��es de callback;
			- Centralizei todas as funcionalidades no componente Step, para deixar os componentes menores focados apenas em view, a id�ia � tirar a l�gica e isolar em uma classe;
			- Utilizei o material ui, n�o utilizei o redux, o motivo � que ainda estou apredendo sobre o react e n�o estudei sobre o redux ainda ent�o n�o me senti seguro em arriscar muito na arquitetura do front;


