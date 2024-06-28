create database loja_doces;
use loja_doces;

create table categorias(
id_categoria int primary key auto_increment,
nome_categoria varchar(30) not null
);

insert into categorias (nome_categoria) values
("Bolos"),("Tortas"),("Doces Finos"),("Doces Tradicionais");
 select * from categorias;
 
 create table doces(
 id_doce int primary key auto_increment,
 nome_doce varchar(45) not null,
 id_categoria int not null,
 foreign key(id_categoria) references categorias(id_categoria)
 );
 
 insert into doces ( id_categoria,nome_doce) values
 (1,"Red Velvet"),
 (1,"Bolo de Laranja"),
 (2,"Torta de limão");
 
select * from doces;