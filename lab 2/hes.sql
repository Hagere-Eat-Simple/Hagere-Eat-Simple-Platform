CREATE DATABASE hes2;
USE hes2;
CREATE TABLE customer
    (
     username VARCHAR(25) PRIMARY KEY,
	 fname VARCHAR(15) NOT NULL,
     lname VARCHAR(15) NOT NULL,
     email VARCHAR(30) NOT NULL,
     phone VARCHAR(15) NOT NULL,
     pass VARCHAR(255) NOT NULL
    );
create table resturant
(
Rname varchar(50) primary key,
location varchar(50),
about varchar(255),
logo longblob,
username varchar(20),
pwd varchar(20)
);
create table menu
(
food varchar(50) primary key,
photo longblob,
price float,
category varchar(50),
ingredients varchar(255)
);
create table r_menu
(
r_name varchar(50) primary key,
food varchar(50),
foreign key(r_name) references resturant(Rname) on delete cascade,
foreign key(food) references menu(food) on delete set NULL
);
create table transactions
(
id int primary key auto_increment,
cust_name varchar(30),
amount float,
resturant varchar(30),
food varchar(255),
foreign key(resturant) references resturant(Rname) on delete cascade,
foreign key(food) references menu(food) on delete cascade
);
INSERT INTO menu(food , price , ingredients , category) values('Burgers' , 200 ,'meat,salad,cheese','lun nfast ntrad');
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('pizza' ,'', '260Br' ,'tomato,piccle,cheese')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('cupcake' ,'', '50Br' ,'vanilla,sugar,')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('clubsandwich' ,'', '150Br' ,'meat,cheese,')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('Kitfo' ,'', '450Br' ,'meat,Butter')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('salad' ,'', '80Br' ,'salad,tomato,')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('omlet' ,'', '70Br' ,'egg,palm oil,')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('chicken nuggets' ,'', '200Br' ,'chicken,pepper,')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('Shiro' ,'', '50Br' ,'injera')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('steak' ,'', '230Br' ,'meat,oil,')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('taco' ,'', '210Br' ,'meat,avocado,')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('shish kebab' ,'', '350Br' ,'shish,bell pepper,')
#INSERT INTO menu('food' , 'photo' , 'price' , 'ingredients' , 'cat_idamount') values('truffle' ,'', '3000Br' ,'Peziza','Leucangium,')
