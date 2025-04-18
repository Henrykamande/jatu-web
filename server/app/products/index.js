'use strict'

exports.findAll = findAll
exports.update_images = update_images
exports.create_product = create_product
exports.selected_product = selected_product
exports.updateProduct = updateProduct
// exports.editStock = editStock;
exports.edit_offer = edit_offer
exports.edit_featured = edit_featured
exports.updateQty = updateQty
// products queries
exports.offerProducts = offerProducts
exports.featuredProducts = featuredProducts
// exports.homeTheatres = homeTheatres;
// exports.phones = phones;
// exports.televisions = televisions;
// exports.woofers = woofers;
// exports.carAccessories = carAccessories;
// exports.homeAppliances = homeAppliances;
exports.categoryProducts = categoryProducts
exports.subcategoryProducts = subcategoryProducts
exports.search = search
exports.filterProducts = filterProducts

const { findByUrl } = require('../seo/index.js')
const { productReviewsRaw } = require('../reviews/index.js')

var Product = require('./product.controller.js')
var Category = require('../categories/category.controller.js')
//  const fs = require('fs')

function errorHandler (res, err) {
  return res.send({ state: false, err: err })
}
async function findAll (req, res, next) {
  try {
    var products = await Product.getAll()
    return res.send({ products: products })
  } catch (err) {
    return errorHandler(res, err)
  }
}

async function search (req, res) {
  const keyword = req.params.keyword
  const query = { 'name': new RegExp(keyword, 'i') }
  try {
    const products = await Product.find({ ...query })
    return res.send({ state: true, products })
  } catch (err) {
    console.log(err)
    res.send({ state: false, err: 'Server error' })
  }
}

async function filterProducts (req, res) {
  const category = req.params.category;
  try {
    const subsData = JSON.parse(req.params.subs);
    const subcategories = subsData.subCategories
    const size = parseFloat(subsData.size);
    let queries = [];
    if(size){
      if (subcategories !== undefined) {
        for (const subcategory of subcategories) {
          queries.push({
            category_url: category, subcategory_url: subcategory, size: size
          })
        }
        const products = await Product.find({ $or: queries })
        res.send({ state: true, products })
      }else{
        const query = {
          category_url: category, size: size
        }
        const products = await Product.find(query)
        res.send({ products });
      }
    } else{
      if (subcategories !== undefined) {
        for (const subcategory of subcategories) {
          queries.push({
            category_url: category,
            subcategory_url: subcategory
          })
        }
        const products = await Product.find({ $or: queries })
        res.send({ state: true, products })
      }
    }
  } catch (err) {
    errorHandler(res, err)
  }
}

async function categoryProducts (req, res) {
  const category = req.params.category
  const price = req.query.price || null
  // const categoryQuery = { name: category };

  try {
    // const productCategory = await Category.findOne(categoryQuery)
    let productQuery = { category_url: category }
    if (price) {
      productQuery = { ...productQuery, ...{ unit_price: { $lt: parseInt(price) - 1 } } }
    }
    const products = await Product.find(productQuery)
    const meta = await findByUrl(`/${category}`)

    return res.send({ state: true, products, meta })
  } catch (err) {
    console.log(err)
    errorHandler(res, err)
  }
}

async function subcategoryProducts (req, res) {
  const subcategory = req.params.subcategory
  const category = req.params.category
  const price = req.query.price || null
  try {
    let productQuery = {}
    if (subcategory) {
      productQuery = { category_url: category, subcategory_url: subcategory }
    } else {
      productQuery = { category_url: category }
    }
    if (price) {
      productQuery = { ...productQuery, ...{ unit_price: { $lt: parseInt(price) - 1 } } }
    }

    const products = await Product.find(productQuery)
    const meta = await findByUrl(`/${category}/${subcategory}`)
    return res.send({ state: true, products, meta })
  } catch (err) {
    console.log(err)
    errorHandler(res, err)
  }
}

async function offerProducts (req, res, next) {
  const query = { offer: 'yes' }

  try {
    var products = await Product.find(query)
    return res.send({ products: products })
  } catch (err) {
    return errorHandler(res, err)
  }
}

async function featuredProducts (req, res, next) {
  const query = { featured: 'yes' }

  try {
    var products = await Product.find(query)
    return res.send({ products: products })
  } catch (err) {
    return errorHandler(res, err)
  }
}
// async function search (req, res) {
//   const keyword = req.params.keyword
//   try {
//     const products = await Product.search(keyword)
//     return res.send({ products })
//   } catch (err) {

//   }
// }
// async function editStock(req, res, next) {
// 	const _id = req.body._id;

// 	var details = {
// 		available_qty: req.body.available_qty
// 	};

// 	try {
// 		const u_record = await Product.update(details, _id);
// 		return res.send({ u_record: u_record });
// 	} catch (err) {
// 		return errorHandler(res, err);
// 	}
// }

async function edit_featured (req, res, next) {
  const _id = req.body._id
  var details = {
    featured: req.body.featured_status
  }

  try {
    const u_record = await Product.update(details, _id)
    return res.send({ u_record: u_record })
  } catch (err) {
    return errorHandler(res, err)
  }
}

async function edit_offer (req, res, next) {
  const _id = req.body._id
  var details = {
    offer: req.body.offer_status
  }

  try {
    const u_record = await Product.update(details, _id)
    return res.send({ u_record: u_record })
  } catch (err) {
    return errorHandler(res, err)
  }
}

async function selected_product (req, res, next) {
  const url = req.params.url

  try {
    const product = await Product.findOne({url: url})
    const related = await Product.findLimited({ subcategory_url: product.subcategory_url }, 8)
    const reviews = await productReviewsRaw(product._id)
    //  const related = _related.filter((item) => { return item.name !== product.name })
    return res.send({ product, related, reviews })
  } catch (err) {
    return errorHandler(res, err)
  }
}

async function updateProduct (req, res, next) {
  const _id = req.body._id
  var details = {
    category: req.body.category,
    name: req.body.name,
    previous_price: req.body.previous_price,
    unit_price: req.body.unit_price,
    desc: req.body.desc
  }
  // update the database
  try {
    const u_product = await Product.update(details, _id)
    return res.send({ u_product })
  } catch (err) {
    return errorHandler(res, err)
  }
}

async function updateQty (req, res, next) {
  const _id = req.body._id
  var details = {
    available_qty: req.body.available_qty
  }

  // update the database
  try {
    const u_product = await Product.update(details, _id)
    return res.send({ u_product: u_product })
  } catch (err) {
    return errorHandler(res, err)
  }
}

async function update_images (req, res, next) {
  try {
    const files = req.files
    const file_paths = []
    Object.keys(files).forEach(key => {
      const file = files[key]
      const timestamp = new Date().getTime()
      const name = timestamp + '.' + file.name
      const filepath = 'http://localhost:5100/products/' + name
      file_paths.push(filepath)
      const data = { file: file, fileName: name, width: 220, height: 220, location: 'products' };

      (async () => {
        const record = await Product.resize_save(data)
      })()
    })

    const _id = req.body.product_id
    const u_record = { other_images: file_paths }
    const u_product = await Product.update(u_record, _id)

    return res.send({ state: true, product: u_product })
  } catch (err) {
    var msg = 'failed to create product'
    return errorHandler(res, err, msg)
  }
}

async function create_product (req, res, next) {
  try {
    // get the category
    const category = await Category.findById(req.body.category)

    var details = {
      category: req.body.category,
      category_tag: category.category_tag,
      name: req.body.name,
      previous_price: req.body.previous_price,
      unit_price: req.body.unit_price,
      desc: req.body.desc,
      date: new Date()
    }

    var new_product = await Product.create(details)

    const file = req.files[0]
    const timestamp = new Date().getTime()
    const name = timestamp + '.' + file.name
    const filepath = 'http://localhost:5100/products/' + name

    const data = { file: file, fileName: name, width: 220, height: 220, location: 'products' };

    (async () => {
      const record = await Product.resize_save(data)
    })()

    const _id = new_product._id
    const u_record = { cover_image: filepath }
    const u_product = await Product.update(u_record, _id)

    return res.send({ state: true, product: u_product })
  } catch (err) {
    var msg = 'failed to create product'
    return errorHandler(res, err, msg)
  }
}
