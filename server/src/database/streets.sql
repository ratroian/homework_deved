CREATE TABLE streets(
id serial PRIMARY KEY,
name text not null
);

CREATE TABLE persons(
id serial PRIMARY KEY,
first_name text not null,
last_name text not null,
age integer not null,
street_id integer,
FOREIGN KEY (street_id) REFERENCES streets(id)
);

INSERT INTO streets(id, "name")
VALUES (1,'Лунина'),
(2,'Гагарина'),
(3,'Ленина'),
(4,'Слобожанский'),
(5,'Янтарная');

INSERT INTO persons(id, first_name, last_name, age,street_id)
VALUES (1,'Руслан','Троян',33,1),
(2,'Давид','Никулин',42,1),
(3,'Юлий','Цезарь',26,2),
(4,'Антон','АНтонов',29,2),
(5,'Павел','Павлов',29,3),
(6,'Гай','Ричи',49,3),
(7,'Макс','Лука',35,4),
(8,'Лука','Макс',16,4),
(9,'Дима','Лотос',49,5),
(10,'Парамон','Любин',55,5),
(11,'Кон','Весь',34, null),
(12,'Люба','Любная',20, null);
