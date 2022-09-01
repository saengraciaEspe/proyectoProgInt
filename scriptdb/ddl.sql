CREATE DATABASE ejem;

CREATE TABLE adm (
                ciadm VARCHAR(10) NOT NULL,
                nombreadm VARCHAR(60) NOT NULL,
                claveadm VARCHAR(8) NOT NULL,
                PRIMARY KEY (ciadm)
);


CREATE TABLE bebida (
                idbeb INT AUTO_INCREMENT NOT NULL,
                marcabeb VARCHAR(30) NOT NULL,
                preciobeb DOUBLE PRECISION NOT NULL,
                PRIMARY KEY (idbeb)
);


CREATE TABLE plato (
                idplato INT AUTO_INCREMENT NOT NULL,
                descplato VARCHAR(100) NOT NULL,
                precioplato DOUBLE PRECISION NOT NULL,
                PRIMARY KEY (idplato)
);


CREATE TABLE cliente (
                cicli VARCHAR(10) NOT NULL,
                nombrecli VARCHAR(50) NOT NULL,
                apellidocli VARCHAR(50) NOT NULL,
                telefonocli VARCHAR(10) NOT NULL,
                correocli VARCHAR(10) NOT NULL,
                direccioncli VARCHAR(10) NOT NULL,
                clavecli VARCHAR(8) NOT NULL,
                PRIMARY KEY (cicli)
);


CREATE TABLE orden (
                idfact INT NOT NULL,
                fechaemifact DATE NOT NULL,
                ivafact INT NOT NULL,
                subttfact DOUBLE PRECISION NOT NULL,
                total DOUBLE PRECISION NOT NULL,
                lugarenvio VARCHAR(40) NOT NULL,
                cicli VARCHAR(10) NOT NULL,
                PRIMARY KEY (idfact)
);


CREATE TABLE formpago (
                idformpago INT AUTO_INCREMENT NOT NULL,
                idfact INT NOT NULL,
                numtarj VARCHAR(13) NOT NULL,
                PRIMARY KEY (idformpago, idfact)
);


CREATE TABLE ordenbebida (
                idfact INT NOT NULL,
                idbeb INT NOT NULL,
                cantordenbebida INT NOT NULL,
                PRIMARY KEY (idfact, idbeb)
);


CREATE TABLE ordenplato (
                idfact INT NOT NULL,
                idplato INT NOT NULL,
                cantdetorden INT NOT NULL,
                PRIMARY KEY (idfact, idplato)
);


ALTER TABLE ordenbebida ADD CONSTRAINT bebida_ordenbebida_fk
FOREIGN KEY (idbeb)
REFERENCES bebida (idbeb)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE ordenplato ADD CONSTRAINT plato_detorden_fk
FOREIGN KEY (idplato)
REFERENCES plato (idplato)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE orden ADD CONSTRAINT cliente_orden_fk
FOREIGN KEY (cicli)
REFERENCES cliente (cicli)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE ordenplato ADD CONSTRAINT orden_detorden_fk
FOREIGN KEY (idfact)
REFERENCES orden (idfact)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE ordenbebida ADD CONSTRAINT orden_ordenbebida_fk
FOREIGN KEY (idfact)
REFERENCES orden (idfact)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE formpago ADD CONSTRAINT orden_formpago_fk
FOREIGN KEY (idfact)
REFERENCES orden (idfact)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

INSERT INTO plato(descplato,precioplato) VALUES('arroz con pescado frito',2);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';