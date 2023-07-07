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
      const id = req.params.id;
      con.query(sql, [id], function(err, result) {
          console.log(result);
          res.send(result);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener el usuario.");
    }
  };  

module.exports = usersController;
