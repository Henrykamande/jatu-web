"use strict";

// exports.findAll = findAll;
exports.create_banner = create_banner;
exports.side_banner_one = side_banner_one;
exports.side_banner_two = side_banner_two;
exports.slider_banners = slider_banners;
exports.main_sec_banner = main_sec_banner;

var Banner = require("./banners.controller.js");
const fs = require('fs');

function errorHandler(res, err) {
	return res.send({ state: false, err: err });
}


async function main_sec_banner(req, res){
	const query = {
		banner_type: "mainSection"
	}
	
	var banner = await Banner.findOne(query);
	return res.send({ state: true, banner });
}

async function slider_banners(req, res){
	const query = {
		banner_type: "slider"
	}
	
	var banners = await Banner.find(query);
	return res.send({ state: true, banners });
}

async function side_banner_one(req, res, next){
	const query = {
		banner_type: 'slider_side',
		banner_position: 'one'
	}

	const banner_one = await Banner.findOne(query);
	return res.send({ state: true, banner_one });
}

async function side_banner_two(req, res, next){
	const query = {
		banner_type: 'slider_side',
		banner_position: 'two'
	}

	const banner_two = await Banner.findOne(query);
	return res.send({ state: true, banner_two });
}


async function create_banner(req, res, next) {
	console.log(req.body, 'db')
	try {
		var details = {
			title: req.body.title,
			sub_title: req.body.sub_title,
			alt_tag: req.body.alt_tag,
			button_text: req.body.button_text,
			url: req.body.url,
			banner_type: req.body.banner_type,
			banner_position: req.body.banner_position
		};


		var new_banner = await Banner.create(details);
		
		const file = req.files.banner;
		const timestamp = new Date().getTime();
		const name = timestamp +'.'+ file.name;
		const filepath = name;

		const data = { file: file, fileName: name,  width: 500, height: 170, location: 'banners'};

		(async () => {
			const record = await Banner.resize_save(data);
		})()

		const _id = new_banner._id;
		const u_record = {image_path: filepath}
		const u_banner = await Banner.update(u_record, _id);

		return res.send({ state: true, u_banner });
	} catch (err) {
		var msg = "failed to create banner";
		return errorHandler(res, err, msg);
	}
}