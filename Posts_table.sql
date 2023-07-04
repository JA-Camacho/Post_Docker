CREATE TABLE ContentHub.posts (
  ID_post INT AUTO_INCREMENT PRIMARY KEY,
  ID_usuario INT,
  autor VARCHAR(50),
  titulo VARCHAR(100),
  contenido TEXT,
  fecha_post DATE,
  fecha_edicion DATE,
  FOREIGN KEY (ID_usuario) REFERENCES usuarios(ID_usuario)
);