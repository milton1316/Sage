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
	Intru��es de execu��o:
		Baixar o projeto do github, nele encontra-se o backend e o frontend:
		Backend: Selecionar como projeto principal o Sage.Api e executar pelo visual studio ou linha de comando
		Frontend: � o projeto Sage.Web, na verdade � para ser apenas uma pasta, abrir a pasta e executar o cmd o comando "npm start"

	O que o projeto contempla:
	    No backend um crud de cliente utilizando um banco sql server local (n�o precisa apontar para o sql express).
		No frontend um crud de cliente dentro do primeiro step.
		A unica tecnologia pedida n�o utilizada foi o redux

	Importante:Projeto ainda n�o finalizado
		O que falta:
		   - Todo o Crud de endere�o (frontend e backend)
		   - Valida��o do formul�rio e no banckend do cadastro de cliente
		   - Melhorar input de data (campo data de nascimento)
		   - Confirma��o na hora de excluir um cliente
		   - Utiliza��o do redux

	Explic���o do projeto
		Backend: Estruturei o projeto em 3 camadas:
			- Data onde utilizar EF Core para comunicar com o banco Sql Server, usei uma abordagem Code First;
			- Domain, por enquanto tem apenas as entidades sem valida��o, a id�ia � aplicar apenas alguns conceitos de DDD;
			- API camada de apresenta��o, s� a controller de cliente est� com CRUD funcional;

		Frontend: Projeto React
			- Criei alguns componentes e utilizei o material ui, n�o utilizei o redux, pois como meus conhecimentos em react s�o b�sicos
			  n�o me senti seguro em arriscar muito na arquitetura do front;


