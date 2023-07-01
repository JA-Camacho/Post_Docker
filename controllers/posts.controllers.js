const postController = {};
const conexion = require("../database");
postController.getPostsAll = async (req, res) => {
  var sql = "SELECT * FROM ContentHub";
  let resultado = await conexion.query(
    sql
  );
  res.send(resultado.fields);
};

postController.getPostId = async (req, res) => {
  var sql = "SELECT * FROM ContentHub WHERE id = ";
  let resultado = await conexion.query(
    sql, req.ID
  );
  res.send(resultado.fields)
};

module.exports = postController;