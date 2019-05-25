CREATE DATABASE q0cgrckslgp6br8j;
USE q0cgrckslgp6br8j;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);