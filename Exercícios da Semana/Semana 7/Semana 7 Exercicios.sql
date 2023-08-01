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