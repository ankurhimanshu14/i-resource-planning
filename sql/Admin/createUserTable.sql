CREATE TABLE IF NOT EXISTS user
(
    id          INT             NOT NULL        PRIMARY KEY             AUTO_INCREMENT,
    email       VARCHAR(100)    NOT NULL,
    username    VARCHAR(20)     NOT NULL        UNIQUE,
    password    VARCHAR(200)    NOT NULL,
    role        ENUM("ROOT", "SUPER_USER", "USER")      NOT NULL
)
Engine=InnoDB;