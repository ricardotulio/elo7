'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buildOptions = require('./buildOptions');

var _buildOptions2 = _interopRequireDefault(_buildOptions);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = (0, _ramda.curry)(function (session, method, path, data) {
  return (0, _requestPromise2.default)((0, _ramda.merge)({ jar: session }, (0, _buildOptions2.default)(method, path, data)));
});

exports.default = {
  get: request(_ramda.__, 'GET'),
  post: request(_ramda.__, 'POST')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXF1ZXN0L3JlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdCIsInNlc3Npb24iLCJtZXRob2QiLCJwYXRoIiwiZGF0YSIsImphciIsImdldCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQU9BLElBQU1BLFVBQVUsa0JBQU0sVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQWtCQyxJQUFsQixFQUF3QkMsSUFBeEI7QUFBQSxTQUNwQiw4QkFBZSxrQkFBTSxFQUFFQyxLQUFLSixPQUFQLEVBQU4sRUFBd0IsNEJBQWFDLE1BQWIsRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixDQUF4QixDQUFmLENBRG9CO0FBQUEsQ0FBTixDQUFoQjs7a0JBSWU7QUFDYkUsT0FBS04sbUJBQVksS0FBWixDQURRO0FBRWJPLFFBQU1QLG1CQUFZLE1BQVo7QUFGTyxDIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGRPcHRpb25zIGZyb20gJy4vYnVpbGRPcHRpb25zJ1xuaW1wb3J0IHJlcXVlc3RQcm9taXNlIGZyb20gJ3JlcXVlc3QtcHJvbWlzZSdcbmltcG9ydCB7XG4gIGN1cnJ5LFxuICBwaXBlLFxuICBtZXJnZSxcbiAgX18sXG59IGZyb20gJ3JhbWRhJ1xuXG5jb25zdCByZXF1ZXN0ID0gY3VycnkoKHNlc3Npb24sIG1ldGhvZCwgcGF0aCwgZGF0YSkgPT5cbiAgcmVxdWVzdFByb21pc2UobWVyZ2UoeyBqYXI6IHNlc3Npb24gfSwgYnVpbGRPcHRpb25zKG1ldGhvZCwgcGF0aCwgZGF0YSkpKVxuKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldDogcmVxdWVzdChfXywgJ0dFVCcpLFxuICBwb3N0OiByZXF1ZXN0KF9fLCAnUE9TVCcpLFxufVxuIl19