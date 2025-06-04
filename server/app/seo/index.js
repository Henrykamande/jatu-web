export const controller = require('../app.controller.js')('seo')

exports.findByCategory = findByCategory
exports.findBySubcategory = findBySubcategory
exports.metaData = metaData
//  exports.findByUrl = findByUrl

const DefaultMeta = {
  url: '',
  metaTitle: 'Hotmax online shopping Kenya',
  h1: 'Hotmax online shopping Kenya',
  h2: 'Hotmax online shopping Kenya',
  pageDescription: 'Hotmax online shopping Kenya',
  metaDescription: 'EHotmax online shopping Kenya',
  pageTitle: 'Hotmax online shopping Kenya',
  pageContent: 'Hotmax online shopping Kenya',
  footerContent: 'Hotmax online shopping Kenya',
  carouselImages: [],
  image: '',
  keywords: []
}

async function findByCategory (category, website = 'hotmax.co.ke') {
  try {
    const results = await controller.find({ category, website }, 1)

    let meta

    if (results.length >= 1) {
      meta = results[0]
    } else {
      meta = DefaultMeta
    }

    return meta
  } catch (err) {
    return DefaultMeta
  }
}

async function findBySubcategory (category, website = 'hotmax.co.ke') {
  try {
    const metaInfo = await controller.findOne({ category, website })
    if (metaInfo) {
      return metaInfo
    }
    return DefaultMeta
  } catch (err) {
    return DefaultMeta
  }
}

export async function findByUrl (url, website = 'hotmax.co.ke') {
  try {
    const metaInfo = await controller.findOne({ url })
    if (metaInfo) {
      return metaInfo
    }
    return DefaultMeta
  } catch (err) {
    return DefaultMeta
  }
}

async function metaData (req, res, next) {
  const page = req.params.page
  const website = 'hotmax.co.ke'
  try {
    const data = await controller.findOne({ category: page, website })
    //  console.log(page, data)
    if (data) {
      return res.send({ state: true, meta: data })
    }
    return res.send({ state: false, meta: DefaultMeta })
  } catch (err) {
    console.log('err -> ', err)
    return res.send({ state: false, meta: DefaultMeta })
  }
}
