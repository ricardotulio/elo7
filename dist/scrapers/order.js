'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapOrders = undefined;

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrapOrder = (0, _ramda.curry)(function ($, element) {
  return {
    customer: $('.store span.store-name', element).text(),
    number: $('a.order-title', element).text(),
    date: $('.details time', element).text(),
    value: $('span.price', element).text()
  };
});

var toArray = function toArray(element) {
  return element.toArray;
};

var scrapOrders = exports.scrapOrders = function scrapOrders(rawBody) {
  var mapOrders = function mapOrders($) {
    return (0, _ramda.map)(scrapOrder($), $('ol.orders-list li.order').toArray());
  };

  return mapOrders(_cheerio2.default.load(rawBody));
};

exports.default = {
  scrapOrders: scrapOrders
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JhcGVycy9vcmRlci5qcyJdLCJuYW1lcyI6WyJzY3JhcE9yZGVyIiwiJCIsImVsZW1lbnQiLCJjdXN0b21lciIsInRleHQiLCJudW1iZXIiLCJkYXRlIiwidmFsdWUiLCJ0b0FycmF5Iiwic2NyYXBPcmRlcnMiLCJtYXBPcmRlcnMiLCJsb2FkIiwicmF3Qm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFLQSxJQUFNQSxhQUFhLGtCQUFNLFVBQUNDLENBQUQsRUFBSUMsT0FBSixFQUFnQjtBQUN2QyxTQUFPO0FBQ0xDLGNBQVVGLEVBQUUsd0JBQUYsRUFBNEJDLE9BQTVCLEVBQXFDRSxJQUFyQyxFQURMO0FBRUxDLFlBQVFKLEVBQUUsZUFBRixFQUFtQkMsT0FBbkIsRUFBNEJFLElBQTVCLEVBRkg7QUFHTEUsVUFBTUwsRUFBRSxlQUFGLEVBQW1CQyxPQUFuQixFQUE0QkUsSUFBNUIsRUFIRDtBQUlMRyxXQUFPTixFQUFFLFlBQUYsRUFBZ0JDLE9BQWhCLEVBQXlCRSxJQUF6QjtBQUpGLEdBQVA7QUFNRCxDQVBrQixDQUFuQjs7QUFTQSxJQUFNSSxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUFXTixRQUFRTSxPQUFuQjtBQUFBLENBQWhCOztBQUVPLElBQU1DLG9DQUFjLFNBQWRBLFdBQWMsVUFBVztBQUNwQyxNQUFNQyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxXQUNoQixnQkFBSVYsV0FBV0MsQ0FBWCxDQUFKLEVBQW1CQSxFQUFFLHlCQUFGLEVBQTZCTyxPQUE3QixFQUFuQixDQURnQjtBQUFBLEdBQWxCOztBQUdBLFNBQU9FLFVBQVUsa0JBQVFDLElBQVIsQ0FBYUMsT0FBYixDQUFWLENBQVA7QUFDRCxDQUxNOztrQkFPUTtBQUNiSDtBQURhLEMiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJ1xuaW1wb3J0IHtcbiAgY3VycnksXG4gIG1hcCxcbn0gZnJvbSAncmFtZGEnXG5cbmNvbnN0IHNjcmFwT3JkZXIgPSBjdXJyeSgoJCwgZWxlbWVudCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGN1c3RvbWVyOiAkKCcuc3RvcmUgc3Bhbi5zdG9yZS1uYW1lJywgZWxlbWVudCkudGV4dCgpLFxuICAgIG51bWJlcjogJCgnYS5vcmRlci10aXRsZScsIGVsZW1lbnQpLnRleHQoKSxcbiAgICBkYXRlOiAkKCcuZGV0YWlscyB0aW1lJywgZWxlbWVudCkudGV4dCgpLFxuICAgIHZhbHVlOiAkKCdzcGFuLnByaWNlJywgZWxlbWVudCkudGV4dCgpLFxuICB9XG59KVxuXG5jb25zdCB0b0FycmF5ID0gZWxlbWVudCA9PiBlbGVtZW50LnRvQXJyYXlcblxuZXhwb3J0IGNvbnN0IHNjcmFwT3JkZXJzID0gcmF3Qm9keSA9PiB7XG4gIGNvbnN0IG1hcE9yZGVycyA9ICQgPT5cbiAgICBtYXAoc2NyYXBPcmRlcigkKSwgJCgnb2wub3JkZXJzLWxpc3QgbGkub3JkZXInKS50b0FycmF5KCkpXG5cbiAgcmV0dXJuIG1hcE9yZGVycyhjaGVlcmlvLmxvYWQocmF3Qm9keSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2NyYXBPcmRlcnNcbn1cbiJdfQ==