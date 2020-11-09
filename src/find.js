/*Comencemos con un find simple que mostrará la información de todos los documentos 
de forma ordenada, gracias a "pretty()"*/

db.sevilla.find().pretty()

/*Para poder saber cuantos documentos tenemos en la base de datos, emplearemos
la siguiente línea, en este caso 76*/

db.sevilla.find().count()

/*Este find, emplea el operador $eq para encontrar una igualdad con la palabra entre comillas*/

db.sevilla.find({ Municipio:{$eq: "Utrera"}}).pretty()

/*La siguiente línea combina 3 operadores, combina el $and explicito, para que las dos siguientes condiciones se lleven a cabo $lt para pedir
que lo que sea menor de la cantidad que pida y $gt que sea mayor de cierta cantidad.*/

db.libros.find( { $and: [ { Habitantes: { $lt: 50000 } }, { Habitantes: { $gt: 30000 } } ] } ).pretty()

/*En la siguiente línea hacemosuso de un $or y empleamos un find para saber las provincias que tienen mas de 20000 hombres o menos de 10000 mujeres
lo que nos da en este caso 52 resultados.*/

db.sevilla.find( { $or: [ { Hombres: { $gt: 20000 } }, { Mujeres: { $lt: 10000 } } ] } ).pretty().count()

/*El uso de $regex en esta consulta, mostrará dos resultados que empiezan por Alc gracias al uso del ^ es decir Alcalá de Guadaira y Alcalá del río*/

db.sevilla.find({Municipio:{$regex: /^Alc/i}}).pretty()

/*Con este $regex llamará a los documentos que contengan una S en mayúscula*/

db.sevilla.find( {Municipio: { $regex: /S/ } } ).pretty()

/*En este caso el uso de $ permite filtrar por los documentos en los cuales el campo "Municipio" acabe por "s"*/

db.sevilla.find( {Municipio: { $regex: /s$/ }}).pretty()