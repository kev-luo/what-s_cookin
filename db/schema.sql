DROP DATABASE IF EXISTS cookin_db;

CREATE DATABASE cookin_db;

USE cookin_db;

CREATE TABLE cookin(
  id INT AUTO_INCREMENT,
  meal VARCHAR(255),
  demolished TINYINT,
  PRIMARY KEY (id)
)