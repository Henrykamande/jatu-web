exports.order = order
exports.userOrders = userOrders;

var moment = require('moment');

var Controller = require("./order.controller.js");

var OrderNoController = require("../order_no/controller.js");

const { SendEmail } = require('../../helpers/sendmail.js');

function errorHandler(res, err) {
  return res.send({ state: false, err: err });
}

async function userOrders(req, res, next) {
  try {
    const user = req.params.userId;
    const status = req.params.status;

    const orders = await Controller.find({ user: user, orderStatus: status });
    res.send({ state: true, orders })
  } catch (err) {
    return res.send({ state: false })
  }
}

async function order(req, res, next) {
  const data = JSON.parse(req.body.order);
  const data_products = data.products;
  let order_products = [];
  for (const product of data_products) {
    const s_product = {
      product: product._id,
      productName: product.name,
      quantity: product.quantity,
      price: product.unit_price
    }
    order_products.push(s_product)
  }

  const orderDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  // get order no
  const orderNoRecord = await OrderNoController.findOne({});

  const order_details = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    location: data.location,
    deliveryAddress: data.deliveryAddress,
    total: data.total,
    user: data.userId,
    wholesaler: data.wholesaler,
    products: order_products,
    orderDate: orderDate,
    orderNo: orderNoRecord.orderNo,
    placedOn: new Date()
  }

  try {
    const newOrderNo = orderNoRecord.orderNo + 1;
    OrderNoController.update({ orderNo: newOrderNo }, orderNoRecord._id);
    const order = await Controller.create(order_details)

    // send mail

    const productString = data_products.map((item) => {
      return `${item.name} Qty - ${item.quantity}  @ Kshs. ${item.unit_price.toLocaleString()}\n`
    }).join('  ')

    const content = `
        From ${data.name} (${data.phone}) - Location ${data.location} 

        ${productString}. 

        Delivery Address: ${data.deliveryAddress}

        Placed on ${new Date()}`;

    const subject = `New order: #${newOrderNo} `;
    const title = subject;

    SendEmail({ content: content, subject: subject, title: title })
    // end of mail

    return res.send({ state: true, order });
  } catch (err) {
    console.log(err)
    return res.send({ state: false })
  }
}

