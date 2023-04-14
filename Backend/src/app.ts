import Config from "./configs/config.js";
import Routes from "./routes/routes.js";
import InitializeApp  from "./server/initializeApp.js";

// **** app initializations **** //
const config = new Config();
const route = new Routes();
const initApp = new InitializeApp(
    route.routes,
    config.MONGODB_STRING,
    config.PORT,
    config.SECRET_KEY

);
