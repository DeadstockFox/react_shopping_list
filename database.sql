-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "grocery" (
	id SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL,
	"unit" VARCHAR(20) NOT NULL
);

INSERT INTO "grocery" ("name", "quantity", "unit")
VALUES ('Oreos', '1.5', "3 bags"),
       ('strawberries', '2.5', '1 tin');


SELECT * FROM "grocery" ORDER BY ASC;