# Node Js Login & Register
[สอน NodeJS สร้างระบบ Login & Register](https://www.youtube.com/watch?v=qqL_SA2v6BE&t=70s)

## Initial project
```
npm init -y
```
## Intstall dependency
```
express --view=ejs NodeJsLogin
npm i bcrypt cookie-session ejs express express-validator mysql2 nodemon
```

## Setup Database
[วิธีติดตั้ง MySQL Server และ phpMyAdmin บน docker Step by step](https://medium.com/odds-team/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-mysql-server-%E0%B9%81%E0%B8%A5%E0%B8%B0-phpmyadmin-%E0%B8%9A%E0%B8%99-docker-step-by-step-4a86c48f29da)
```
CREATE TABLE users(
	id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL UNIQUE KEY,
    password varchar(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```