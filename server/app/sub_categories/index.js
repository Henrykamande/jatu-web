"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.create_sub_category = create_sub_category;
exports.updateCategory = updateCategory;
exports.delete_category = delete_category;
exports.subCategories = subCategories;

var SubCategory = require("./category.controller.js");
var Category = require("../categories/category.controller.js");

function errorHandler(res, err) {
	var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	return res.send({ state: false, err: err });
}

async function subCategories(req, res, next) {
	
	try {
		const selectedCategory = await Category.findById(req.body.id);
		const subCategories = await SubCategory.find({category: req.body.id});
		return res.send({ subCategories, selectedCategory});
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function delete_category(req, res, next) {
	try {
		var deleted_sub_category = await SubCategory.remove(req.body._id);
		return res.send({ deleted_sub_category });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function updateCategory(req, res, next) {
	const _id = req.body._id;
	const u_record = {name: req.body.name, url: req.body.url};
	// update the database 
	try {
		const u_sub_category = await SubCategory.update(u_record, _id);
		return res.send({ u_sub_category });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function create_sub_category(req, res, next) {
	var details = {
		category: req.body.category._id,
		name: req.body.subcategory.name,
		url: req.body.subcategory.url
	};
    
	try {
		var new_category = await SubCategory.create(details);
		return res.send({ state: true, ca: new_category });
	} catch (err) {
		var msg = "failed to create category";
		return errorHandler(res, err, msg);
	}
}