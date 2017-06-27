'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _order = require('../scrapers/order');

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = function list(session) {
  return function () {
    return _request2.default.get(session, _routes2.default.order.list, {}).then(_order.scrapOrders);
  };
};

exports.default = {
  list: list
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvdXJjZXMvb3JkZXIuanMiXSwibmFtZXMiOlsibGlzdCIsImdldCIsInNlc3Npb24iLCJvcmRlciIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUtBLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLFNBQ1g7QUFBQSxXQUFNLGtCQUFRQyxHQUFSLENBQVlDLE9BQVosRUFBcUIsaUJBQU9DLEtBQVAsQ0FBYUgsSUFBbEMsRUFBd0MsRUFBeEMsRUFDSEksSUFERyxvQkFBTjtBQUFBLEdBRFc7QUFBQSxDQUFiOztrQkFJZTtBQUNiSjtBQURhLEMiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9yZXF1ZXN0J1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgeyBzY3JhcE9yZGVycyB9IGZyb20gJy4uL3NjcmFwZXJzL29yZGVyJ1xuaW1wb3J0IHtcbiAgY3VycnksXG4gIHBpcGUsXG59IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCBsaXN0ID0gc2Vzc2lvbiA9PlxuICAoKSA9PiByZXF1ZXN0LmdldChzZXNzaW9uLCByb3V0ZXMub3JkZXIubGlzdCwge30pXG4gICAgLnRoZW4oc2NyYXBPcmRlcnMpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlzdCxcbn1cbiJdfQ==