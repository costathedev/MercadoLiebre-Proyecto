// Reuire de Modulos externos 
const express = require('express');
const path = require('path');

// Constantes y Variables
const app = express(); // Para administrar el servidor web
const puerto = process.env.PORT || 3001; // Puerto a utilizar para el servidor web
const url = 'http://localhost'; // Url a utilizar para el servidor web

// Definir como públicos los recursos
app.use( express.static(path.resolve(__dirname, './public')));

// Levantar servidor web con Express
app.listen(puerto, () => console.log('Servidor corriendo en ' + url + ':' + puerto + '/'));

// GETs
app.get('/', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/home.html'))
)

app.get('/ofertas', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/ofertas.html'))
)

app.get('/tiendas-oficiales', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/tiendas-oficiales.html'))
)

app.get('/vender', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/vender.html'))
)

app.get('/ayuda', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/ayuda.html'))
)

app.get('/register', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/register.html'))
)

app.get('/login', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/login.html'))
)

app.get('/mis-compras', (req, res) => 
    res.sendFile(path.resolve(__dirname, './views/mis-compras.html'))
)

app.get('/productos', (req, res) =>
res.sendFile(path.resolve(__dirname, './views/productos.html'))
)

// POSTs
app.post('/login', (req, res) => 
    res.redirect('/')
)

app.post('/register', (req, res) => 
    res.redirect('/')
)