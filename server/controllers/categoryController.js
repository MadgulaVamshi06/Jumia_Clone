const categoryModel = require("../models/categoryModel");
const slugify = require("slugify");

const categoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }

    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exists",
      });
    }

    const category = new categoryModel({ name, slug: slugify(name) });
    await category.save();

    res.status(201).send({
      success: true,
      message: "New category created",
      category, 
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in category",
      error,
    });
  }
};

module.exports = categoryController;
