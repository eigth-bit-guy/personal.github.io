import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Teste
app.get("/", (req, res) => {
  res.send("API funcionando! 💖");
});

// Buscar mensagens
app.get("/mensagens", async (req, res) => {
  const result = await pool.query("SELECT * FROM mensagens ORDER BY id DESC");
  res.json(result.rows);
});

// Criar mensagem
app.post("/mensagens", async (req, res) => {
  const { texto } = req.body;
  await pool.query("INSERT INTO mensagens (texto) VALUES ($1)", [texto]);
  res.json({ ok: true });
});

// Porta do Railway
app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor rodando...");
});
