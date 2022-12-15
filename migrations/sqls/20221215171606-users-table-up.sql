/* Replace with your SQL commands */
-- create user
-- create database store_dev;
-- create database store_test;
-- grant all database privileges on database store_dev;
-- grant all database privileges on database store_test;

create table 
users(
    id serial primary key, 
    firstName varchar(100), 
    lastname varchar(100), 
    username varchar(100) not null,
    password varchar(100) not null
);
insert into users(firstName,lastname,username,password) values('Hai','Dang','haidv14','admin123');