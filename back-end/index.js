const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();
const port = 3000;

const pool = new Pool({
    connectionString: connexion_DB,
    ssl: {
      rejectUnauthorized: false, // Nedded for SSL connection with Neon
    },
  });

app.use(cors());
app.use(express.json())

app.get("/menu", async (req, res) => {
    const result = await pool.query("SELECT * from products")
    res.json(result.rows)
})

app.get("/order", async (req, res) => {
    const result = await pool.query("SELECT * from commands")
    res.json(result.rows)
})

app.get("/order/:id", async (req, res) => {
    const productId = req.params.id
    const result = await pool.query("SELECT * from commands WHERE id = $1", [productId])
    console.log(res.json(result.rows))
})

app.post("/order", async (req, res) => {
    const {command_num, username, product_id} = req.body
    const result = await pool.query("INSERT INTO commands (command_num, username, product_id) VALUES ($1, $2, $3) RETURNING command_num, username, product_id", [command_num, username, product_id])
    res.json(result.rows)
})

app.put("/order/:id", async (req, res) => {
    const {command_num, username, product_id} = req.body
    const result = await pool.query("UPDATE commands SET command_num = $1, username = $2, product_id = $3 WHERE id=$1 RETURNING command_num, username, product_id", [command_num, username, product_id])
    res.json(result.rows)
})

app.delete("/order/:id", async (req, res) => {
    const productId = req.params.id
    const result = await pool.query("DELETE from commands WHERE id = $1", [productId])
    res.json(result.rows)
})

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });