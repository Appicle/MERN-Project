"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _error = require("./middlewares/error.js");

var _reservationRoute = _interopRequireDefault(require("./routes/reservationRoute.js"));

var _dbConnection = require("./database/dbConnection.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // Load environment variables

_dotenv["default"].config({
  path: "./.env"
}); // Define the port


var port = process.env.PORT || 3005; // Fallback to 7000 if PORT is not defined
// Middleware

app.use((0, _cors["default"])({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // Routes

app.use("/api/v1/reservation", _reservationRoute["default"]);
app.get("/", function (req, res, next) {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
}); // Database Connection

(0, _dbConnection.dbConnection)(); // Error Middleware

app.use(_error.errorMiddleware); // Start Server

app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});
var _default = app;
exports["default"] = _default;