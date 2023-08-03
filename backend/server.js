const express = require('express');
const app = express();
const cors = require('cors');
//settings
app.set('puerto', process.env.PORT || 8080);
app.set('nombreApp', 'Aplicacion para Posts con docker');

//Middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/user', require('./routes/users.routes'));
app.use('/api/post', require('./routes/posts.routes'));

//Starting the server
app.listen(app.get('puerto'), () =>{
    console.log('Nombre de la App:', app.get('nombreApp'));
    console.log('Puerto del servidor', app.get('puerto'));
})