"use strict";

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 6001; // Default to port 3000 if PORT is not set

_app["default"].listen(PORT, function () {
  console.log("SERVER HAS STARTED AT PORT ".concat(PORT));
}).on('error', function (error) {
  if (error.code === 'EADDRINUSE') {
    console.error("Port ".concat(PORT, " is already in use."));
  } else {
    console.error('Error starting server:', error);
  }

  process.exit(1); // Exit the process with an error code
});