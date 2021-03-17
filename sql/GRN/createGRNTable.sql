CREATE TABLE IF NOT EXISTS grn
(
    id                  INT                                         NOT NULL            PRIMARY             KEY             AUTO_INCREMENT,
    grnNo               BIGINT                                      NOT NULL,
    challanNo           INT                                         NOT NULL,
    challanDate         DATETIME                                    NOT NULL,
    partyCode           VARCHAR(4)                                  NOT NULL,
    vehicleNo           VARCHAR(15),
    itemCode            ENUM('STEEL', 'DIES')                       NOT NULL,
    itemDescription     VARCHAR(200)                                NOT NULL,
    quantity            INT                                         NOT NULL,
    UOM                 VARCHAR(10)                                 NOT NULL
)
ENGINE = InnoDB;