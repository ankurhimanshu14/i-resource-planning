CREATE TABLE IF NOT EXISTS steel
(   
    id              INT             NOT NULL        PRIMARY KEY     AUTO_INCREMENT,
    challanNo       BIGINT          NOT NULL,
    challanDate     TIMESTAMP       NOT NULL,
    grade           VARCHAR(10)     NOT NULL,
    section         VARCHAR(10)     NOT NULL,
    heatNo          VARCHAR(20)     NOT NULL,
    heatCode        VARCHAR(10),
    approvedComponents  VARCHAR (255),
    receivedQty     BIGINT          NOT NULL,
    releasedQty     BIGINT          NOT NULL        DEFAULT         0,
    availableQty    BIGINT,
    UOM             VARCHAR(20)     NOT NULL
)
ENGINE=InnoDB;