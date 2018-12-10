create database gymnos;
use gymnos;

create table personas(
    idPersona int primary key, 
    nombre varchar(30), 
    domicilio varchar(30), 
    telefono varchar(30)
)engine= INNODB;

create table clientes(
    idCliente int primary key auto_increment,
    idPersona int, 
    FOREIGN key(idPersona) REFERENCES personas(idPersona),
    pagoMensual float, 
    estado boolean
)engine= INNODB;

create table empleados(
    idEmpleado int primary key auto_increment, 
    idPersonav int, 
    FOREIGN key(idPersona) REFERENCES personas(idPersona),
    sueldoHora int, 
    idHorario int
)engine= INNODB;

create table horario(
    idHorario int primary key auto_increment, 
    fechaInicio date, 
    fechaFin date, 
    horaEntrada time, 
    horaSalida time
)engine= INNODB;

create table sueldos(
    idSueldo int primary key auto_increment, 
    sueloActual float, 
    sueldoAnterior float
)engine= INNODB;

create table pago(
    idPago int primary key auto_increment, 
    idCliente int, 
    fecha date
)engine= INNODB;

create table nota(
    idNota int primary key auto_increment, 
    idCliente int, 
    fecha date
)engine= INNODB;

create table producto(
    idProducto int primary key auto_increment, 
    descripcion varchar(30), 
    precio float, 
    total float
)engine= INNODB;

create table venta(
    id int primary key auto_increment, 
    idProducto int,
    cantidad int, 
    total float
)engine= INNODB;
