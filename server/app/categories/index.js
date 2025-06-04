"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.findAll = findAll;
exports.findActive = findActive;
exports.findFeatured = findFeatured;
exports.create_category = create_category;
exports.updateCategory = updateCategory;
exports.findSubs = findSubs;

var Category = require("./category.controller.js");
var subCategory = require("../sub_categories/category.controller.js");
var Product = require("../products/product.controller.js");

function errorHandler(res, err) {
	var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
	console.log(err);
	return res.send({ state: false, err: err });
}

async function findSubs(req, res, next) {
	try {
		const categoryName = req.params.status;
		const category = await Category.findOne({ url: categoryName });
		const id = category._id;
		const subcategories = await subCategory.find({ category: id });
		return res.send({ subcategories: subcategories });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function findAll(req, res, next) {
	try {
		const categories = [];
		var db_categories = await Category.getAll();
		console.log(db_categories)
		for (const category of db_categories) {
			// get featured products
			console.log(category)
			const featured_query = {
				category: category._id,
				featured: 'yes'
			}

			const products = await Product.find(featured_query);
			// end

			const query = { category: category._id }
			const sub_categories = await subCategory.find(query);
			const sub_category = {
				name: category.name,
				url: category.url,
				icon: category.icon,
				horizontal_text: category.horizontal_text,
				horizontal_url: category.horizontal_url,
				vertical_url: category.vertical_url,
				button_text: category.button_text,
				image_path: category.image_path,
				horizontal_banner: category.horizontal_banner,
				vertical_banner: category.vertical_banner,
				sub_categories: sub_categories,
				products: products
			}
			// end
			categories.push(sub_category);
		}
		// console.log(categories, 'cat')
		return res.send({ categories: categories });
	} catch (err) {
		return errorHandler(res, err);
	}
}


async function findActive(req, res, next) {
	try {
		const categories = [];
		var db_categories = await Category.find({ status: 'active' });
		for (const category of db_categories) {
			// get featured products
			const featured_query = {
				category: category._id,
				featured: 'yes'
			}

			const products = await Product.find(featured_query);
			// end

			const query = { category: category._id, status: 'active' }
			const sub_categories = await subCategory.find(query);
			const sub_category = {
				name: category.name,
				url: category.url,
				icon: category.icon,
				horizontal_text: category.horizontal_text,
				horizontal_url: category.horizontal_url,
				vertical_url: category.vertical_url,
				button_text: category.button_text,
				image_path: category.image_path,
				horizontal_banner: category.horizontal_banner,
				vertical_banner: category.vertical_banner,
				sub_categories: sub_categories,
				products: products
			}
			// end
			categories.push(sub_category);
		}
		// console.log(categories, 'cat')
		return res.send({ categories: categories });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function findFeatured(req, res, next) {
	try {
		const categories = [];
		var db_categories = await Category.find({ status: 'active', featured: 'yes' });
		for (const category of db_categories) {
			// get featured products
			const featured_query = {
				category: category._id,
				featured: 'yes'
			}

			const products = await Product.find(featured_query);
			// end

			const query = { category: category._id, status: 'active', featured: 'yes' }
			const sub_categories = await subCategory.find(query);
			const sub_category = {
				name: category.name,
				url: category.url,
				icon: category.icon,
				horizontal_text: category.horizontal_text,
				horizontal_url: category.horizontal_url,
				vertical_url: category.vertical_url,
				button_text: category.button_text,
				image_path: category.image_path,
				horizontal_banner: category.horizontal_banner,
				vertical_banner: category.vertical_banner,
				sub_categories: sub_categories,
				products: products
			}
			// end
			categories.push(sub_category);
		}
		
		return res.send({ categories: categories });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function updateCategory(req, res, next) {
	const _id = req.body._id;
	const u_record = { name: req.body.name, category_tag: req.body.category_tag };
	// update the database 
	try {
		const u_product = await Category.update(u_record, _id);
		return res.send({ u_product: u_product });
	} catch (err) {
		return errorHandler(res, err);
	}
}

async function create_category(req, res, next) {
	var details = {
		name: req.body.category,
		category_tag: req.body.category_tag
	};

	try {
		var new_category = await Category.create(details);
		return res.send({ state: true, ca: new_category });
	} catch (err) {
		var msg = "failed to create category";
		return errorHandler(res, err, msg);
	}
}