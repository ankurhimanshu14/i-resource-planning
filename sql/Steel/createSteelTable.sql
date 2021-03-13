CREATE TABLE IF NOT EXISTS steels
(   
    id              INT             NOT NULL        PRIMARY KEY     AUTO_INCREMENT,
    challanNo       BIGINT          NOT NULL,
    challanDate     TIMESTAMP       NOT NULL,
    grade           VARCHAR(10)     NOT NULL,
    section         VARCHAR(10)     NOT NULL,
    heatNo          VARCHAR(20)     NOT NULL,
    heatCode        VARCHAR(10),
    jominyValue     VARCHAR(20),
    approvedComponents  VARCHAR (255),
    receivedQty     INT             NOT NULL,
    issuedQty       INT             NOT NULL,
    availableQty    INT             NOT NULL,
    UOM             VARCHAR(20)     NOT NULL
)
ENGINE=InnoDB;