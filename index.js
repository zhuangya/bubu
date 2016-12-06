'use strict';

module.exports = o => require('lodash.isfunction')(o) ? o() : o;
