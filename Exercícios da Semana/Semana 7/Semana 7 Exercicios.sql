CREATE TABLE Usuario (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(40),
  login VARCHAR(40) UNIQUE,
  email VARCHAR(40) UNIQUE,
  senha VARCHAR(40),
  cpf VARCHAR(11),
  rg VARCHAR(10),
  dt_nascimento DATE,
  CONSTRAINT maior_de_idade CHECK (dt_nascimento <= CURRENT_DATE - INTERVAL '18 years')
);

CREATE TABLE Plataforma (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255)
);

CREATE TABLE Genero (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255)
);

CREATE TABLE Jogo (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  dt_lancamento DATE,
  foto VARCHAR(255),
  video VARCHAR(255),
  genero_id INT,
  FOREIGN KEY (genero_id) REFERENCES Genero (id)
);

-- Criação da tabela de relação entre Jogos e Plataformas
CREATE TABLE PlataformaJogo (
  jogo_id INT,
  plataforma_id INT,
  FOREIGN KEY (jogo_id) REFERENCES Jogo(id),
  FOREIGN KEY (plataforma_id) REFERENCES Plataforma(id),
  PRIMARY KEY (jogo_id, plataforma_id)
);

CREATE TABLE Biblioteca (
  jogo_id INT,
  usuario_id INT,
  FOREIGN KEY (jogo_id) REFERENCES Jogo(id),
  FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
  PRIMARY KEY (jogo_id, usuario_id)
);

--Exercicio 4
INSERT INTO Plataforma (nome)
VALUES ('PS1'), ('PS2'), ('PS3'), ('PS4'), ('PS5'), ('Xbox Series S'), ('Xbox Series X'), ('PC');

INSERT INTO Genero (nome)
VALUES ('Simulação'), ('Ação'), ('FPS'), ('Estraégia'), ('Outros');

INSERT INTO Usuario (nome, login, email, senha, cpf, rg, dt_nascimento)
VALUES ('Derpson da Silva', 'derpinho', 'derpinho91@hotmail.com', 'derpinho91', '12312312312', '4123123', '1991-01-01');

INSERT INTO Jogo (nome, dt_lancamento, foto, video, genero_id)
VALUES ('The Sims 4 Base', '2014-09-02', 'caminho_da_foto', 'caminho_do_video', 1);

INSERT INTO PlataformaJogo (jogo_id, plataforma_id)
VALUES (1, 4), (1, 5), (1, 8);

INSERT INTO Biblioteca (jogo_id, usuario_id)
VALUES (1, 1);

--Exercicio 4
SELECT Nome_do_filme, Duracao_do_filme_em_minutos
FROM Filme
WHERE Nome_do_filme LIKE '%Ação'
ORDER BY Duracao_do_filme_em_minutos;