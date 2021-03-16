CREATE TABLE IF NOT EXISTS steelDescription
(
    id                      INT                     NOT NULL            PRIMARY KEY             AUTO_INCREMENT,
    grade                   ENUM(
                            '16MNCR5',
                            '20MNCR5',
                            '25MOCR4',
                            'SAE8620',
                            'SCM420H',
                            'SCR420H',
                            'SCR415H',
                            '815M17',
                            'EN353',
                            'EN8D',
                            'S53C',
                            '40CR4',
                            'EN15A'
                            )                       NOT NULL,
    barDimension            INT                     NOT NULL,
    barSection              ENUM('DIA', 'RCS')      NOT NULL,
    barDimension_UOM        VARCHAR(5)              NOT NULL
)
ENGINE = InnoDB;
