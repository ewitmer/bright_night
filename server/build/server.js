'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//App setup

app.use((0, _morgan2.default)('combined'));
app.use(_bodyParser2.default.json({ type: '*/*' }));
(0, _router2.default)(app);

// DB setup 
_mongoose2.default.connect(_config2.default.db);
//Server setup
app.set('port', process.env.PORT || 3001);
var server = _http2.default.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Listening on ' + app.get('port'));
});