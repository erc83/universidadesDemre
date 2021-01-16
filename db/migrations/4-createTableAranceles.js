CREATE TABLE aranceles(
    Codigo_id INT,
    Codigo_carrera INT,
    Año_vigencia INT,
    Valor_matricula INT,
    Valor_Arancel INT,
    Valor_titulo INT,
    Año_vigencia INT, PRIMARY KEY,
    FOREIGN KEY (codigo_id)REFERENCES universidades(codigo_id),
    FOREIGN KEY (codigo_carrera)REFERENCES carreras(codigo_carrera),
)
