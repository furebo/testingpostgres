"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var app = (0, _express["default"])(); // app.use(json());
// app.use(urlencoded( { extended:false} ))

app.get('/', function (req, res) {
  res.json({
    status: 'success',
    message: 'Welcome to my server'
  });
});
var _default = app;
exports["default"] = _default;