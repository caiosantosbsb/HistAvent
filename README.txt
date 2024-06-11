1 - Criar pastas client(frontend) e api(backend) no diretorio do projeto 2 - Clonar template padrao do GIT (https://github.com/safak/youtube2022/tree/social-app) git clone --single-branch -b "react-social-ui" https://github.com/safak/youtube2022.git 3 - Instalar node "npm install" e rodar com "npm start" (iniciar frontend).

4 - Instalar banco de dados mysql workbench Criar tables (comments, likes, posts, stories, users)

5 - Configurar backend. na pasta API npm add express mysql nodemon, npm init -y, npm start (configurar start no package json e index.js) configurar arquivos index.js e iniciar servidor API com "npm start"

5 - Integrar com o banco de dados configurar arquivo connect.js com dados de acesso ao banco

6 - Configuração de login e criptografia da senha na pasta api "npm add bcryptjs" npm add jsonwebtoken cookie-parser cors

7 - Configurar api no frontend "npm add axios"

8 - Alterar conexao do banco para mysql antigo ALTER USER 'userapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; FLUSH PRIVILEGES;

git remote add origin https://github.com/caiosantosbsb/HistAvent.git

git clone --single-branch -b "social-app" https://github.com/safak/youtube2022.git

Tarefas

Caio 1 - Cores e tradução do frontend 2 - Upload da imagem no posts 3 - Deletar

Luis 1 - Comentários 2 - Likes

Apresentacao 1 Pagina login 2- Criar usuários 3 - Logar com usuario 4 - Criar posts 5- Criar Comentario 6 - Dar Likes 7 - Deletar posts