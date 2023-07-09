const usersController = {};
const con = require("../database");

usersController.getUsersAll = async (req, res) => {
  try {
    const sql = "SELECT * FROM usuarios";
    con.query(sql, function(err, result){
        console.log(result);
        res.send(result);
    });
    
} catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener el usuario.");
  };
}

usersController.getUserId = async (req, res) => {
    try {
      const sql = "SELECT * FROM usuarios WHERE ID_usuario = ?";
      const id = req.body.id;
      con.query(sql, [id], function(err, result) {
          console.log(result);
          res.send(result);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener el usuario.");
    }
  };  

  usersController.CreateUser = async (req, res) => {
    try {
      const sql = "INSERT INTO usuarios (ID_usuario,nombre,apellido,usuario,password,fecha_inicio_sesion) VALUES (0,?,?,?,?,?)"; 
      const values = [req.body.nombre,req.body.apellido,req.body.usuario,req.body.password,req.body.fecha_inicio_sesion];
      con.query(sql, values, function(err, result) {
        console.log(values);
        console.log(result);
        res.send(result);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al crear el Post.");
    }
  };

  usersController.DeleteUserId = async (req, res) => {
    try {
      const sql = "DELETE FROM usuarios WHERE ID_usuario = ?";
      const id = req.params.id;
      con.query(sql, id, function(err, result) {
          console.log("Usuario eliminado");
          res.send(result);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Usuario no eliminado!");
    }
  }

module.exports = usersController;
