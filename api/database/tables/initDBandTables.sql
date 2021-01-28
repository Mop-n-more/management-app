CREATE USER IF NOT EXISTS 'user'@'mopnmore' IDENTIFIED BY 'Password123!';
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'Password123!';
CREATE DATABASE IF NOT EXISTS mopnmore;
GRANT ALL ON mopnmore.* TO 'user'@'mopnmore';
GRANT ALL ON mopnmore.* TO 'user'@'%';
FLUSH PRIVILEGES;
USE mopnmore;
CREATE TABLE IF NOT EXISTS user (
  userId serial,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  email varchar(100) UNIQUE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  INDEX(email)
);