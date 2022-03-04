import app from "./src/app.js";
import database from "./src/database/database.js";

//Starting
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});
