CREATE DATABASE `crud_samuel`;
USE `crud_samuel`;


DROP TABLE IF EXISTS `produto_unidade_medida`;

CREATE TABLE `produto_unidade_medida` (
  `pum_id` VARCHAR(3) NOT NULL,
  `pum_descricao` varchar(150) NOT NULL,
  CONSTRAINT pum_unique_descricao UNIQUE(`pum_descricao`),
  PRIMARY KEY (`pum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `produto_unidade_medida` WRITE;


INSERT INTO `produto_unidade_medida` (`pum_id`, `pum_descricao`)
VALUES
	('UND','UNIDADE'),
	('CX','CAIXA'),
	('KG','QUILO'),
	('L','LITRO'),
	('M','METRO');


UNLOCK TABLES;

DROP TABLE IF EXISTS `produto_tipo`;

CREATE TABLE `produto_tipo` (
  `pt_id` VARCHAR(2) NOT NULL,
  `pt_descricao` varchar(150) NOT NULL,
  CONSTRAINT pum_unique_descricao UNIQUE(`pt_descricao`),
  PRIMARY KEY (`pt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `produto_tipo` WRITE;


INSERT INTO `produto_tipo` (`pt_id`, `pt_descricao`)
VALUES
	('MP','MATERIA PRIMA'),
	('PA','PRODUTO ACABADO');


UNLOCK TABLES;


DROP TABLE IF EXISTS `produto_grupo`;

CREATE TABLE `produto_grupo` (
  `pg_id` INT NOT NULL AUTO_INCREMENT,
  `pg_descricao` varchar(150) NOT NULL,
  CONSTRAINT pg_unique_descricao UNIQUE(`pg_descricao`),
  PRIMARY KEY (`pg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `produto`;

CREATE TABLE `produto` (
  `descricao` VARCHAR(150) NOT NULL,
  `grupo` INT NOT NULL,  
  `ean` VARCHAR(13) NOT NULL,  
  `saldo_inicial` DECIMAL(8,2) NOT NULL DEFAULT 0,
  `unidade_medida` VARCHAR(3) NOT NULL,  
  `tipo` VARCHAR(2) NOT NULL,
   PRIMARY KEY (`ean`),
   CONSTRAINT pum_unique_descricao UNIQUE(`descricao`),
   FOREIGN KEY (grupo) REFERENCES produto_grupo(pg_id),
   FOREIGN KEY (unidade_medida) REFERENCES produto_unidade_medida(pum_id),
   FOREIGN KEY (tipo) REFERENCES produto_tipo(pt_id)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

