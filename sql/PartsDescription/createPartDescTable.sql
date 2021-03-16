CREATE TABLE IF NOT EXISTS partDescription
(
    id              INT                     NOT NULL            PRIMARY KEY             AUTO_INCREMENT,
    name            VARCHAR(50)             NOT NULL,
    number          VARCHAR(50)             NOT NULL            UNIQUE,
    profile         ENUM('Gear', 'Shaft')   NOT NULL
)
ENGINE = InnoDB;
