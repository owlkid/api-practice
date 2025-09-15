// server.js
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

//  Middlewares
app.use(cors());
app.use(jsonServer.bodyParser); 

// Auth routes
app.db = router.db; 
app.use(auth);

// database
app.use(router);

app.listen(3000, () => {
  console.log("🚀 JSON Server with Auth running at http://localhost:3000");
});



