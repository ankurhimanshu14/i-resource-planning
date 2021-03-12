CREATE TABLE IF NOT EXISTS users
(
    id          INT                     NOT NULL        PRIMARY KEY     auto_increment,
    fullName    VARCHAR(100)            NOT NULL,
    email       VARCHAR(100)            NOT NULL,
    username    VARCHAR(100)            NOT NULL        UNIQUE,
    password    LONGTEXT                NOT NULL
)
ENGINE=InnoDB;