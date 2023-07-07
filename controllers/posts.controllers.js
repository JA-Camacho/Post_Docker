const postController = {};
const conexion = require("../database");
postController.getPostsAll = async (req, res) => {
  try {
    const sql = "SELECT * FROM posts";
    con.query(sql, function(err, result){
        console.log(result);
        res.send(result);
    });
    
} catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los posts.");
  };
};

postController.getPostId = async (req, res) => {
   try {
      const sql = "SELECT * FROM posts WHERE ID_posts = ?";
      const id = req.params.id;
      con.query(sql, [id], function(err, result) {
          console.log(result);
          res.send(result);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error al obtener el post.");
    }
};

module.exports = postController;