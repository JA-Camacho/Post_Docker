const postController = {};
const con = require("../databasePost");
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

postController.CreatePost = async (req, res) => {
  try {
    const sql = "INSERT INTO posts (ID_post,ID_usuario,autor,titulo,contenido,fecha_post,fecha_edicion) VALUES (0,?,?,?,?,?,?)"; 
    const values = [req.body.ID_usuario,req.body.autor,req.body.titulo,req.body.contenido,req.body.fecha_post,req.body.fecha_edicion];
    con.query(sql, values, function(err, result) {
        console.log(result);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear el Post.");
  }
};

postController.DeletePostId = async (req, res) => {
  try {
    const sql = "DELETE FROM posts WHERE ID_post = ?";
    const id = req.params.id;
    con.query(sql, id, function(err, result) {
        console.log("Post eliminado");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Posts no eliminado!");
  }
}

module.exports = postController;