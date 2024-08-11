import userModel from "../models/userModel.js";

// add items to the user cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(
      { _id: req.body.userId },
      { cartData: cartData }
    );
    res.json({ success: true, message: "Item added to cart" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Server Error" });
  }
};

// remove items from the user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(
      { _id: req.body.userId },
      { cartData: cartData }
    );
    res.json({ success: true, message: "Item removed from cart" });
  } catch (err) {
      console.log(err);
      res.json({ success: false, message: "Error" });
  }
};

// fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData: cartData });
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Error" });
    }
};

export { addToCart, removeFromCart, getCart };
