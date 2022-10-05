create database SCHOOL
use SCHOOL
go
create table student
(
	id nvarchar(50) primary key,
	name nvarchar(50),
	birthday int
)
insert into student values(N'2001190683',N'Nguyễn Nhựt Nam',2001)
insert into student values(N'2001190773',N'Lâm Anh Trí',2000)