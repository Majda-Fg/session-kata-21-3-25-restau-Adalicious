const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();
const port = 3000;

const pool = new Pool({
    connectionString: "postgresql://kata-adalicious_owner:npg_eruSlt6H9NJh@ep-raspy-haze-a29sfgc3-pooler.eu-central-1.aws.neon.tech/kata-adalicious?sslmode=require",
    ssl: {
      rejectUnauthorized: false, // Nedded for SSL connection with Neon
    },
  });

app.use(cors());

app.get("/menu", async (req, res) => {
    const result = await pool.query("SELECT * from products")
    res.json(result.rows)
})

app.get("/order", async (req, res) => {
    const result = await pool.query("SELECT * from commands")
    res.json(result.rows)
})

app.get("/order/:id", async (req, res) => {
    const result = await pool.query("SELECT * from commands WHERE id = $1")
    res.json(result.rows)
})

app.post("/order", async (req, res) => {
    const result = await pool.query("INSERT INTO commands ")
    res.json(result.rows)
})

app.put("/order/:id", async (req, res) => {
    const result = await pool.query("UPDATE * from commands")
    res.json(result.rows)
})

app.delete("/order/:id", async (req, res) => {
    const result = await pool.query("DELETE * from commands")
    res.json(result.rows)
})

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });