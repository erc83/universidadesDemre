DROP TABLE IF EXISTS carreras;

CREATE TABLE carreras(
    Año varchar(500),
    cod_inst varchar(500),
    Nombre_Institución VARCHAR (500),
    Tipo_Institución VARCHAR (500),
    Nombre_sede VARCHAR (500),
    Comuna_sede VARCHAR (500),
    Nombre_Región VARCHAR (500),
    Orden_Geográfico VARCHAR (500),
    Cód_Carrera INT PRIMARY KEY,
    Carrera_genérica VARCHAR (500),
    Nombre_programa VARCHAR (500),
    Mención_Especialidad VARCHAR (500),
    Horario VARCHAR (500),
    Tipo_programa VARCHAR (500),
    Area_conocimiento VARCHAR (500),
    idgenerocarrera VARCHAR (500),
    Tipo_carrera VARCHAR (500),
    IngresoDirecto INTEGER,
    Año_inicio VARCHAR(500),
    NombreCampus VARCHAR (500),
    Duración_semestres VARCHAR (500),
    Cód_campus VARCHAR (500),
    Cód_sede VARCHAR (500),
    Título VARCHAR (500),
    Grado_académico VARCHAR (500),
    Valor_matricula VARCHAR (500),
    Valor_arancel VARCHAR (500),
    Valor_título VARCHAR (500),
    Vacantes VARCHAR (500),
    Cód_sies VARCHAR (500),
    Pregrado_postgrado VARCHAR (500)
);


