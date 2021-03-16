CREATE TABLE IF NOT EXISTS product
(
    id                  INT                     NOT NULL            KEY                 AUTO_INCREMENT,
    partNumber          INT                     NOT NULL,
    partName            VARCHAR(50)             NOT NULL,
    profile             ENUM("Gear", "Shaft")   NOT NULL,
    grossWeight         FLOAT(4)                NOT NULL,
    cutWeight           FLOAT(4)                NOT NULL,
    weight_UOM          VARCHAR(10)             NOT NULL            DEFAULT             "kgs",
    grade               ENUM("16MNCR5", "20MNCR5", "25MOCR4","SAE8620","SCM420H","SCR420H","SCR415H","815M17","EN353","EN8D","S53C","40CR4","EN15A")                       NOT NULL,
    barDimension        INT                    NOT NULL,
    barSection          ENUM("DIA", "RCS")     NOT NULL,
    barDimension_UOM    VARCHAR(5)             NOT NULL            DEFAULT                "mm"
)
ENGINE=InnoDB;