CREATE TABLE IF NOT EXISTS users
(
    id          INT                     NOT NULL        PRIMARY KEY     auto_increment,
    fullName    VARCHAR(100)            NOT NULL,
    email       VARCHAR(100)            NOT NULL,
    username    VARCHAR(100)            NOT NULL        UNIQUE,
    password    LONGTEXT                NOT NULL,
    -- lastLogin   DATETIME                NOT NULL        DEFAULT          NOW(),
    -- ipAddress   VARCHAR(20),
    -- createdBy   VARCHAR(100)            NOT NULL        DEFAULT         'admin',
    -- createdOn   DATETIME                NOT NULL        DEFAULT         NOW(),
    -- modifiedBy  VARCHAR(100),
    -- modifiedOn  DATETIME                NOT NULL        DEFAULT         NOW()
)
ENGINE=InnoDB;

INSERT INTO users
(
    fullName,
    email,
    username,
    password
) VALUES (?, ?, ?, ?);