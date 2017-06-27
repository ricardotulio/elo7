'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _request = require('../request');

var _request2 = _interopRequireDefault(_request);

var _bindSession = require('./bindSession');

var _bindSession2 = _interopRequireDefault(_bindSession);

var _ramda = require('ramda');

var _resources = require('../resources');

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connect = function connect(credentials) {
  var session = _requestPromise2.default.jar();

  var data = {
    redirect: '/',
    command: 'login',
    email: (0, _ramda.prop)('email', credentials),
    password: (0, _ramda.prop)('password', credentials)
  };

  return _request2.default.post(session, '/login.do', data).catch(function (error) {
    return (0, _bindSession2.default)(session, _resources2.default);
  });
};

exports.default = connect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvY29ubmVjdC5qcyJdLCJuYW1lcyI6WyJjb25uZWN0IiwiY3JlZGVudGlhbHMiLCJzZXNzaW9uIiwiamFyIiwiZGF0YSIsInJlZGlyZWN0IiwiY29tbWFuZCIsImVtYWlsIiwicGFzc3dvcmQiLCJwb3N0IiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsV0FBRCxFQUFpQjtBQUMvQixNQUFNQyxVQUFVLHlCQUFlQyxHQUFmLEVBQWhCOztBQUVBLE1BQU1DLE9BQU87QUFDWEMsY0FBVSxHQURDO0FBRVhDLGFBQVMsT0FGRTtBQUdYQyxXQUFPLGlCQUFLLE9BQUwsRUFBY04sV0FBZCxDQUhJO0FBSVhPLGNBQVUsaUJBQUssVUFBTCxFQUFpQlAsV0FBakI7QUFKQyxHQUFiOztBQU9BLFNBQU8sa0JBQVFRLElBQVIsQ0FBYVAsT0FBYixFQUFzQixXQUF0QixFQUFtQ0UsSUFBbkMsRUFDSk0sS0FESSxDQUNFO0FBQUEsV0FBUywyQkFBWVIsT0FBWixzQkFBVDtBQUFBLEdBREYsQ0FBUDtBQUVELENBWkQ7O2tCQWNlRixPIiwiZmlsZSI6ImNvbm5lY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdFByb21pc2UgZnJvbSAncmVxdWVzdC1wcm9taXNlJ1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vcmVxdWVzdCdcbmltcG9ydCBiaW5kU2Vzc2lvbiBmcm9tICcuL2JpbmRTZXNzaW9uJ1xuaW1wb3J0IHsgcHJvcCB9IGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgcmVzb3VyY2VzIGZyb20gJy4uL3Jlc291cmNlcydcblxuY29uc3QgY29ubmVjdCA9IChjcmVkZW50aWFscykgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gcmVxdWVzdFByb21pc2UuamFyKClcblxuICBjb25zdCBkYXRhID0ge1xuICAgIHJlZGlyZWN0OiAnLycsXG4gICAgY29tbWFuZDogJ2xvZ2luJyxcbiAgICBlbWFpbDogcHJvcCgnZW1haWwnLCBjcmVkZW50aWFscyksXG4gICAgcGFzc3dvcmQ6IHByb3AoJ3Bhc3N3b3JkJywgY3JlZGVudGlhbHMpLFxuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3QucG9zdChzZXNzaW9uLCAnL2xvZ2luLmRvJywgZGF0YSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gYmluZFNlc3Npb24oc2Vzc2lvbiwgcmVzb3VyY2VzKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFxuIl19