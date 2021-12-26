const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 3001
const catalog_path = path.resolve(__dirname, './data/catalog.json');
const cart_path = path.resolve(__dirname, './data/cart.json');
const stats_path = path.resolve(__dirname, './data/stats.json');
const static_dir = path.resolve(__dirname, '../dist/');

const app = express();

app.use(express.json());

app.use(express.static(static_dir));

app.get('/catalog', (req, res) => {
    fs.readFile(catalog_path, 'utf8', (err, data) => {
        res.send(data);
    })
});

app.get('/cart', (req, res) => {
    fs.readFile(cart_path, 'utf8', (err, data) => {
        res.send(data);
    })
});

app.post('/cart', (req, res) => {

    fs.readFile(cart_path, 'utf8', (err, data) => {
        let cart = JSON.parse(data);
        let good = req.body;
        let index = cart.findIndex((item) => item.id_product == good.id_product);

        if (index != -1) {
            cart[index].quantity = cart[index].quantity + 1;
        } else {
            good.quantity = 1;
            cart.push(good);
        }

        fs.writeFile(cart_path, JSON.stringify(cart), (err) => {
            res.send(cart);
            res.end();
        });
    });

});

app.delete('/cart/:id', (req, res) => {
    fs.readFile(cart_path, 'utf8', (err, data) => {
        let cart = JSON.parse(data);

        const itemId = req.params.id;

        let index = cart.findIndex((item) => item.id_product == itemId);

        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }

        fs.writeFile(cart_path, JSON.stringify(cart), (err) => {
            res.send(cart);
            res.end();
        });
    });
});

app.post('/addToStats', (req, res) => {

    fs.readFile(stats_path, 'utf8', (err, data) => {
        let stats = JSON.parse(data);
        let newStats = req.body;
        stats.push(newStats);
        fs.writeFile(stats_path, JSON.stringify(stats), (err) => {
            console.log('stats add');
            res.send(newStats);
            res.end();
        });
    });

});

app.listen(port, function () {
    console.log('server is running on port ' + port + '!')
})