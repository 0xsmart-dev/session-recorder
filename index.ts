import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import requestIp from "request-ip";
import router from "./src/routes";
import environment from "./src/configs";
import session from "express-session";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(requestIp.mw());

// View engine setup
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Session setup
app.use(
  session({
    secret: environment.secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

// Routes
app.use("/", router);

// Start the server
const port = environment.port || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
