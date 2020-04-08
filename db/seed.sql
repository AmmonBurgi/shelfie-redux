create table shelfieU(
id serial primary key,
username varchar(50),
password varchar(50)
)

create table shelfieP(
id serial primary key,
name varchar(50),
price int,
img text,
buyers_id int references shelfieU (id)
);

select * from shelfieU
join shelfieP on shelfieU.id = shelfieP.buyers_id;

insert into shelfieU (
username,
password
) values (
'thetest',
'thepasswordtest'
)

insert into shelfieP(
name, 
price,
img,
buyers_id
) values (
'thetestname',
4,
'thetestimg',
1
)