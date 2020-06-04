--
-- Database: `giardino_db`
--

CREATE DATABASE IF NOT EXISTS `giardino_db`;
USE `giardino_db`;


-- ENTITIES

--
-- Struttura della tabella `foto_fiore`
--

CREATE TABLE IF NOT EXISTS `foto_fiore` (
	`altezza` numeric ,
	`colore` varchar(130) ,
	`nome` varchar(130) ,
	`periodo_fioritura` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);






