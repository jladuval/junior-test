'use strict';

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addFive = value => value + 5;
const multiplyByItself = value => value * value;

(0, _ava2.default)('it should let me add 5 to every number in an array', t => {
  const testArray = [1, 2, 3, 3];
  const expectedResults = [6, 7, 8, 8];

  const actualResults = (0, _map2.default)(addFive, testArray);

  t.deepEqual(actualResults, expectedResults);
});

(0, _ava2.default)('it should let me multiply itself', t => {
  const testArray = [1, 2, 3, 3];
  const expectedResults = [1, 4, 9, 9];

  const actualResults = (0, _map2.default)(multiplyByItself, testArray);

  t.deepEqual(actualResults, expectedResults);
});

(0, _ava2.default)('it should not modify the input array', t => {
  const testArray = [1, 2, 3, 3];
  const expectedResults = [6, 7, 8, 8];

  const actualResults = (0, _map2.default)(addFive, testArray);
  t.deepEqual(actualResults, expectedResults);
  t.notDeepEqual(actualResults, testArray);
});

(0, _ava2.default)('it should return an array', t => {
  const testArray = [1, 2, 3, 3];
  const expectedResults = [6, 7, 8, 8];
  const actualResults = (0, _map2.default)(addFive, testArray);
  const type = Object.prototype.toString.call(actualResults);

  t.is(type, '[object Array]');
});

(0, _ava2.default)('it should provide a blank array if an empty array is mapped over', t => {
  const testArray = [];
  const expectedResults = [];

  const actualResults = (0, _map2.default)(multiplyByItself, testArray);

  t.deepEqual(actualResults, expectedResults);
});