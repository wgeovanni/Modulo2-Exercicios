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

--Exercicio 9
insert into Projeto (nome, descricao, data_inicio, data_prazo) values
	('Projeto A', 'Descrição do Projeto A', '2023-01-01', '2023-02-28'),
	('Projeto B','Descrição do Projeto B','2023-03-01', '2023-04-30'),
	('Projeto C','Descrição do Projeto B','2023-05-01', '2023-06-30');
	
insert into Categoria (nome, descricao) values
	('Tarefa pessoal', 'Tarefa relacionada a assuntos pessoais.'),
	('Tarefa profissional', 'Tarefa relacionada ao trabalho.'),
	('Tarefa acadêmica', 'Tarefa relacionada aos estudos.');
	
insert into Tarefa (nome, descricao, data_inicio, data_prazo, concluida, projetoID, categoriaID) values
	('Tarefa 1', 'Descrição da tarefa 1', '2023-01-05', '2023-01-15', true, 1, 1),
	('Tarefa 2', 'Descrição da tarefa 2', '2023-01-10', '2023-01-20', false, 1, 2),
	('Tarefa 3', 'Descrição da tarefa 3', '2023-03-05', '2023-03-15', false, 2, 3),
	('Tarefa 4', 'Descrição da tarefa 4', '2023-03-10', '2023-03-20', false, 2, 1),
	('Tarefa 5', 'Descrição da tarefa 5', '2023-05-05', '2023-05-15', false, 3, 2);