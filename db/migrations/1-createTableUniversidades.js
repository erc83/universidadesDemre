CREATE TABLE universidades(
    codigo_id INT PRIMARY KEY UNIQUE,
    Nombre_institucion VARCHAR(80),
    Año_creacion INT,
    Tradicion VARCHAR(15),
    Region VARCHAR(60),
    Comuna VARCHAR(50),
    Direccion_casa_principal VARCHAR(60),
    Dirección_Web varchar(50),
    Acreditada BOLLEAN,
    Vencimiento_acreditacion DATE,
    Proceso VARCHAR(50)
    Año_vigencia INT
    FOREIGN KEY (Año_vigencia)REFERENCES aranceles(Año_vigencia)
    
)