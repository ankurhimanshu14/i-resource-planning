CREATE TABLE IF NOT EXISTS partDescription
(
    id              INT                     NOT NULL            PRIMARY KEY             AUTO_INCREMENT,
    name            VARCHAR(50)             NOT NULL,
    number          VARCHAR(50)             NOT NULL,
    profile         ENUM('shaft', 'gear')   NOT NULL
)
ENGINE = InnoDB;
