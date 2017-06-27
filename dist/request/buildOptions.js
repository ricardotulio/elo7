'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var defaultOptions = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0'
  },
  form: {}
};

var buildOptions = (0, _ramda.curry)(function (method, path, data) {
  return (0, _ramda.merge)(defaultOptions, {
    method: method,
    uri: 'https://www.elo7.com.br' + path,
    form: data
  });
});

exports.default = buildOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXF1ZXN0L2J1aWxkT3B0aW9ucy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsImhlYWRlcnMiLCJmb3JtIiwiYnVpbGRPcHRpb25zIiwibWV0aG9kIiwicGF0aCIsImRhdGEiLCJ1cmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUtBLElBQU1BLGlCQUFpQjtBQUNyQkMsV0FBUztBQUNQLGtCQUFjO0FBRFAsR0FEWTtBQUlyQkMsUUFBTTtBQUplLENBQXZCOztBQU9BLElBQU1DLGVBQWUsa0JBQU0sVUFBQ0MsTUFBRCxFQUFTQyxJQUFULEVBQWVDLElBQWY7QUFBQSxTQUN6QixrQkFDRU4sY0FERixFQUVFO0FBQ0VJLGtCQURGO0FBRUVHLHFDQUErQkYsSUFGakM7QUFHRUgsVUFBTUk7QUFIUixHQUZGLENBRHlCO0FBQUEsQ0FBTixDQUFyQjs7a0JBV2VILFkiLCJmaWxlIjoiYnVpbGRPcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3VycnksXG4gIG1lcmdlLFxufSBmcm9tICdyYW1kYSdcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGhlYWRlcnM6IHtcbiAgICAnVXNlci1BZ2VudCc6ICdNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQ7IHJ2OjEwLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvMTAuMCcsXG4gIH0sXG4gIGZvcm06IHt9LFxufVxuXG5jb25zdCBidWlsZE9wdGlvbnMgPSBjdXJyeSgobWV0aG9kLCBwYXRoLCBkYXRhKSA9PlxuICBtZXJnZShcbiAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICB7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmk6IGBodHRwczovL3d3dy5lbG83LmNvbS5iciR7cGF0aH1gLFxuICAgICAgZm9ybTogZGF0YSxcbiAgICB9LFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZE9wdGlvbnNcbiJdfQ==