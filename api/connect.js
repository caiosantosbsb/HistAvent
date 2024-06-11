import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"userapp",
  password:"password",
  database:"social"
})

// Testar a conexão com o banco de dados
db.connect((err) => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
  } else {
      console.log('Conectado ao banco de dados MySQL.');
  }
});

// Encerrar a conexão ao sair do processo
process.on('SIGINT', () => {
  db.end((err) => {
      if (err) {
          console.error('Erro ao encerrar a conexão com o banco de dados:', err);
      } else {
          console.log('Conexão com o banco de dados encerrada.');
      }
      process.exit(err ? 1 : 0);
  });
});
