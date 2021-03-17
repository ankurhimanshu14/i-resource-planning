CREATE TABLE IF NOT EXISTS steel
(
    id                  INT                     NOT NULL            KEY                 AUTO_INCREMENT,
    materialGrade       VARCHAR(10)             NOT NULL            UNIQUE,
    barDimension        INT                     NOT NULL,
    barSectionType      ENUM("DIA", "RCS")      NOT NULL,
    UOM_Dimension       VARCHAR(5)              NOT NULL            DEFAULT             "mm"
)
ENGINE=InnoDB;