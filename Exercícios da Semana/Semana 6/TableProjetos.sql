--Exercicio 3

create table Projeto(

ID serial PRIMARY KEY,
nome VARCHAR(100),
descricao VARCHAR(100),
data_inicio DATE,
data_prazo DATE
);

--Exercicio 4
create table Tarefa(

	ID serial PRIMARY KEY,
	nome VARCHAR(100),
	descricao VARCHAR(100),
	data_inicio DATE,
	data_prazo DATE,
	concluida BOOLEAN,
	projetoID INT,
	categoriaID INT,
	foreign key (projetoID) references Projeto (ID),
	foreign key (categoriaID) references Categoria (ID) --Exercicio 8
);