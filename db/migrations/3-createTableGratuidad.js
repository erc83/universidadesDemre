CREATE TABLE gratuidad(
    codigo_id INT,
    codigo_carrera INT,
    programa VARCHAR(60),
    Campus VARCHAR(50),
    nem INT,
    ranking INT,
    comprension_lectora INT,
    matematicas INT,
    Historia_y_cs_sociales INT,
    ciencias INT,
    Puntaje_Ponderado_Mínimo_Postulación INT
    Puntaje_Promedio_lectura_y_matematicas_Mínimo_Postulación INT 
    vacanter_primer_semestre INT  
    FOREIGN KEY (codigo_id)REFERENCES universidades(codigo_id),
    FOREIGN KEY (Año_vigencia)REFERENCES aranceles(Año_vigencia)
)


