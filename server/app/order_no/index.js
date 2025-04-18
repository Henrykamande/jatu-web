"use strict";

exports.findAll = findAll;

var Controller = require("./controller");

function errorHandler(res, err) {
	return res.send({ state: false, err: err });
}

async function findAll(req, res, next) {
	try {
		const orderNo = await Controller.getAll();
		return res.send({ state: true, orderNo  });
	} catch (err) {
		return errorHandler(res, err);
	}
}








