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
	foreign key (projetoID) references Projeto (ID), --Exercicio 5
	foreign key (categoriaID) references Categoria (ID) 
);

ALTER TABLE tarefa
ADD FOREIGN KEY (projetoId) REFERENCES projeto(id);

ALTER TABLE tarefa
ADD FOREIGN KEY (categoriaId) REFERENCES categoria(id);--Exercicio 8

--Exercicio 7
create table Categoria(

	ID serial PRIMARY KEY,
	nome VARCHAR(50),
	descricao VARCHAR(200)
);