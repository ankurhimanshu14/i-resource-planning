CREATE TABLE IF NOT EXISTS product
(
    id                  INT             NOT NULL            PRIMARY KEY         AUTO_INCREMENT,
    grossWeight         FLOAT(4),
    cutWeight           FLOAT(4),
    weight_UOM          VARCHAR(10)     NOT NULL            DEFAULT             "kgs"
)
SELECT name AS partName, number AS partNumber, grade, barSection, barDimension, barDimension_UOM FROM partDescription, steelDescription;