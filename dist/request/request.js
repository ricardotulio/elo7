'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _ramda = require('ramda');

var _buildOptions = require('./buildOptions');

var _buildOptions2 = _interopRequireDefault(_buildOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = (0, _ramda.curry)(function (session, method, path, data) {
  return (0, _requestPromise2.default)((0, _ramda.merge)({ jar: session }, (0, _buildOptions2.default)(method, path, data)));
});

exports.default = {
  get: request(_ramda.__, 'GET'),
  post: request(_ramda.__, 'POST')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXF1ZXN0L3JlcXVlc3QuanMiXSwibmFtZXMiOlsicmVxdWVzdCIsInNlc3Npb24iLCJtZXRob2QiLCJwYXRoIiwiZGF0YSIsImphciIsImdldCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBS0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsa0JBQU0sVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQWtCQyxJQUFsQixFQUF3QkMsSUFBeEI7QUFBQSxTQUNwQiw4QkFBZSxrQkFBTSxFQUFFQyxLQUFLSixPQUFQLEVBQU4sRUFBd0IsNEJBQWFDLE1BQWIsRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixDQUF4QixDQUFmLENBRG9CO0FBQUEsQ0FBTixDQUFoQjs7a0JBSWU7QUFDYkUsT0FBS04sbUJBQVksS0FBWixDQURRO0FBRWJPLFFBQU1QLG1CQUFZLE1BQVo7QUFGTyxDIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdFByb21pc2UgZnJvbSAncmVxdWVzdC1wcm9taXNlJ1xuaW1wb3J0IHtcbiAgY3VycnksXG4gIG1lcmdlLFxuICBfXyxcbn0gZnJvbSAncmFtZGEnXG5pbXBvcnQgYnVpbGRPcHRpb25zIGZyb20gJy4vYnVpbGRPcHRpb25zJ1xuXG5jb25zdCByZXF1ZXN0ID0gY3VycnkoKHNlc3Npb24sIG1ldGhvZCwgcGF0aCwgZGF0YSkgPT5cbiAgcmVxdWVzdFByb21pc2UobWVyZ2UoeyBqYXI6IHNlc3Npb24gfSwgYnVpbGRPcHRpb25zKG1ldGhvZCwgcGF0aCwgZGF0YSkpKSxcbilcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQ6IHJlcXVlc3QoX18sICdHRVQnKSxcbiAgcG9zdDogcmVxdWVzdChfXywgJ1BPU1QnKSxcbn1cbiJdfQ==