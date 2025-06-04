export const Controller = require('./controller')

export function errorHandler (res, err) {
  return res.send({ state: false, err: err })
}

export async function create (req, res) {
  const _review = req.body
  try {
    let review
    const exists = await Controller.findOne({ userId: _review.userId, productId: _review.productId })
    if (exists) {
      // update review
      review = await Controller.update(_review, exists._id)
    } else {
      review = await Controller.create(_review)

    }
    const populatedReview = await Controller.findOneReview(review._id);
    return res.send({ state: true, review: populatedReview })
  } catch (err) {
    return errorHandler(res, err)
  }
}

export async function productReviews (req, res) {
  const productId = req.params.id
  try {
    const reviews = await productReviewsRaw(productId)
    return res.send({ state: true, reviews })
  } catch (err) {
    errorHandler(res, err)
  }
}

export function productReviewsRaw (productId) {
  const query = { productId: productId };
  return Controller.findReviews(query);
}
