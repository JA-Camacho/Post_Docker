CREATE TABLE ContentHub.usuarios (
  ID_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  usuario VARCHAR(50),
  password VARCHAR(50),
  fecha_inicio_sesion DATE
);
