"use strict";
const add = require("../methods/add");
const get = require("../methods/get");
const reverse = require("../methods/reverse");
const print = require("../methods/print");

function LL() {
  this._head = null;
  this._tail = null;
  this.length = 0;
}

LL.prototype.add = add;

LL.prototype.get = get;

LL.prototype.reverse = reverse;

LL.prototype.print = print;

module.exports = LL;
