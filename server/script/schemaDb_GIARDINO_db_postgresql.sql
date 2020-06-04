--
-- Database: giardino_db
--

CREATE DATABASE giardino_db;

-- ENTITIES

--
-- Schema entity foto_fiore
--

CREATE TABLE IF NOT EXISTS "foto_fiore" (
	altezza numeric ,
	colore varchar(130) ,
	nome varchar(130) ,
	periodo_fioritura varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);



