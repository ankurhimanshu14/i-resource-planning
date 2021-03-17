CREATE TABLE IF NOT EXISTS part
(
    id                  INT                     NOT NULL            KEY                 AUTO_INCREMENT,
    partNumber          INT                     NOT NULL            UNIQUE,
    partName            VARCHAR(50)             NOT NULL,
    materialGrade       VARCHAR(10)             NOT NULL,
    alternateMatGrade   VARCHAR(10),
    forgingWeight       FLOAT(4)                NOT NULL,
    UOM_Weight          VARCHAR(5)              NOT NULL,
    supplyCondition     VARCHAR(20)             NOT NULL,
    drgIssueDate       TIMESTAMP                NOT NULL
)
ENGINE=InnoDB;