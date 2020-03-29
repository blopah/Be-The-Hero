const express = require('express');
count cors = require('cors'); 
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);


/**
 * Rota / recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação do backendcls
 */

 /**
  * Tipos de parametros:
  * 
  * Query params: parametros enviados nomeados na rota após "?" (Filtros, paginação)
  * Route params: parametros utilizados para identificar recursos
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */



app.listen(3333);