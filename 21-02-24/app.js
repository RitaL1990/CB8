const express = require('express')

const carts = require('./data.json')

const app = express()

app.use(express.static('public'))

app.use( (req, res, next) => {
  console.log(req.method, ' - ' , req.url)
  next()
})

app.get("/es1/api/v1/cart", (req, res) => {
  res.json(carts);
});

app.get("/es2/api/v1/carts", (req, res) => {
  const cartsList = carts.map((cart) => {
    return {
      id: cart.id,
      products: cart.products.map((product) => {
        return {
          price: product.price,
          quantity: product.quantity
        }
      })
    }
  });
  res.json(cartsList);
});

app.get("/es3/api/v1/carts/:cartId", (req, res) => {
    const { cartId } = req.params;
    const cart = carts.find((cart) => cart.id === Number(cartId));
  
    if (!cart) {
      return res.status(404).send("Carrello non trovato");
    }

    return res.json(cart);
  });

app.get("/es4/api/v1/cart", (req, res) => {
  const { totalFilter } = req.query;

  const cartList = carts.filter((cart) => {
    return cart.total >= totalFilter
  })
  
  res.status(200).json(cartList);
})

app.get('*' , (req, res) =>{
    res.sendFile(__dirname + '/public/404.html')
});

app.listen (8000, () => {
    console.log('server attivo')
});
