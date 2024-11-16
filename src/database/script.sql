CREATE DATABASE userRegisterAndLogs;
USE userRegisterAndLogs;

CREATE TABLE userRegister (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(45),
  email VARCHAR(45),
  password VARCHAR(45)
);

SELECT* FROM userRegister;