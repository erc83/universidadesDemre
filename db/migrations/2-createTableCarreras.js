CREATE TABLE carreras(
    codigo_id INT,
    codigo_carrera INT PRIMARY KEY UNIQUE,
    Carrera_generica VARCHAR(120),
    Nombre_ programa VARCHAR(60),
    Horario VARCHAR(15),
    tipo_programa VARCHAR(20),
    Id_genero_carrera INT,
    Comuna_donde_se_imparte VARCHAR(40),
    Nombre_del_campus VARCHAR(80),
    Ingreso_directo BOLLEAN,
    Duracion_semestres INT
    Nivel VARCHAR(15)
    FOREIGN KEY (codigo_id)REFERENCES universidades(codigo_id)
    FOREIGN KEY (Año_vigencia)REFERENCES aranceles(Año_vigencia)

)


