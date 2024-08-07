const categoryModel = require("../models/categoryModel");

const getcategoryController = async(req,res)=>{
try {
    const category = await categoryModel.find({})
    res.status(200).send({
        success : true,
        message:"All category List",
        category,
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all categories",
      error,
    });
}
}

module.exports = getcategoryController