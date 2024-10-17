const { Cart } = require("../db");

//adding to cart
const addCart = async (req, res) => {
  try {
    let itemAdded = await Cart.create(req.body);

    res.status(201).send({ message: "Added to cart", payload: itemAdded });
  } catch (error) {
    console.log(error);
  }
};

//fetching from cart
const getCart = async (req, res) => {
  let cartItems = await Cart.find();
  res.status(200).send({ message: "cart items fetched", payload: cartItems });
};

//deleting from cart
const deleteCart = async (req, res) => {
  let deletedItem = await Cart.findOneAndDelete({ _id: req.params.id });
  res
    .status(200)
    .send({ message: "Item Deleted from cart", payload: deletedItem });
};

module.exports = { addCart, getCart, deleteCart };
