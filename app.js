const express = require('express');
const sequelize = require('./config/conexion.js');
const router = require('./router/router.js');
const path = require("path");
const port= 3000;
const app = express();
const cors = require('cors');

app.use(cors());

//definir archivos estaticos 
app.use(express.static(path.join(__dirname,'/public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

//sirve para recibir los datos de la solicitud del cliente 
app.use(express.urlencoded({extended:false}));
//sirve para enviar o responderle al usuario 
app.use(express.json());

 //endPoint
app.use('/',router);

// Probar la conexión
sequelize.sync()
    .then(() => {
        console.log('Base de datos y tablas creadas correctamente.');
        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al crear la base de datos:', error);
    });