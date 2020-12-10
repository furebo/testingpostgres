"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../database/models"));

var hotels = _models["default"].hotels;

var HotelServices = /*#__PURE__*/function () {
  function HotelServices() {
    (0, _classCallCheck2["default"])(this, HotelServices);
  }

  (0, _createClass2["default"])(HotelServices, null, [{
    key: "createHotel",
    value: function createHotel(newHotel) {
      return hotels.create(newHotel);
    }
  }, {
    key: "findByProp",
    value: function findByProp(prop) {
      return hotels.findAll({
        where: prop
      });
    }
  }, {
    key: "findOneHote",
    value: function findOneHote(prop) {
      return hotels.findOne({
        where: {
          id: 1
        },
        include: ['hotelsCity']
      });
    } // static getUsers() {
    //   return users.findAll();
    // }
    // /**
    //  * Find a User in storage using login credentials.
    //  * @param {*} prop HTTP request
    //  * @returns {*} JSON data
    //  */
    // static findByEmail(prop) {
    //   return users.findOne({
    //     where: prop,
    //   });
    // }
    // static findById(modelId) {
    //   return users.findOne({
    //     where: { id: modelId },
    //   });
    // }

  }]);
  return HotelServices;
}();

var _default = HotelServices;
exports["default"] = _default;