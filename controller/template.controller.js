const templateService = require("../services/template.service");
const Template = require("../model/Template");
const { check, validationResult } = require('express-validator');

exports.getAllTemplates = async (req, res, next) => {
    try {
      const templates = await templateService.getAllTemplatesService();
      res.status(200).json({
        success: true,
        status: "success",
        message: "Templates retrieved successfully!",
        data: templates,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

// add Template
exports.addTemplate = async (req, res,next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    
    const result = await templateService.createTemplateService({
      ...req.body,
    });

    console.log('template-result',result)
 
    res.status(200).json({
      success:true,
      status: "success",
      message: "Template created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    next(error)
  }
};


// getSingleProduct
exports.getSingleProduct = async (req,res,next) => {
  try {
    const product = await productServices.getProductService(req.params.id)
    res.json(product)
  } catch (error) {
    next(error)
  }
}

// getSingleProduct
exports.getSingleTemplate = async (req,res,next) => {
  try {
    const template = await templateService.GetTemplateById(req.params.id)
    res.json(template)
  } catch (error) {
    next(error)
  }
}

// get Related Product
exports.getRelatedProducts = async (req,res,next) => {
  try {
    const products = await productServices.getRelatedProductService(req.params.id)
    res.status(200).json({
      success:true, 
      data:products,
    })
  } catch (error) {
    next(error)
  }
}

//Update template
exports.updateTemplate = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const id = req.params.id;
    const data = req.body;
    const template = await templateService.updateTemplateService(id, data);
    res.status(200).json({
      success: true,
      status: "success",
      message: "Template updated successfully!",
      data: template,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete template
exports.deleteTemplate = async (req, res, next) => {
  try {
    const id = req.params.id;
    await templateService.deleteTemplateService(id);
    res.status(200).json({
      success: true,
      status: "success",
      message: "Template deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.reviewProducts = async (req, res,next) => {
  try {
    const products = await productServices.getReviewsProducts()
    res.status(200).json({
      success:true, 
      data:products,
    })
  } catch (error) {
    next(error)
  }
};

// update product
exports.stockOutProducts = async (req, res,next) => {
  try {
    const products = await productServices.getStockOutProducts();
    res.status(200).json({
      success:true, 
      data:products,
    })
  } catch (error) {
    next(error)
  }
};



// update product
exports.deleteProduct = async (req, res,next) => {
  try {
    await productServices.deleteProduct(req.params.id);
    res.status(200).json({
      message:'Product delete successfully'
    })
  } catch (error) {
    next(error)
  }
};

// Filter by price
exports.filterByPrice = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const price1 = req.query.price1;
    const price2 = req.query.price2;
    const templates = await templateService.filterByPriceService(price1, price2);
    res.status(200).json({
      success: true,
      status: "success",
      message: "Templates filtered by price",
      data: templates,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Filter by area
exports.filterByArea = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const area1 = req.query.area1;
    const area2 = req.query.area2;
    const templates = await templateService.filterByAreaService(area1, area2);
    res.status(200).json({
      success: true,
      status: "success",
      message: "Templates filtered by area",
      data: templates,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Filter by location type
exports.filterByLocationType = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const locationType = req.query.locationType;
    const templates = await templateService.filterByLocationTypeService(locationType);
    res.status(200).json({
      success: true,
      status: "success",
      message: "Templates filtered by location type",
      data: templates,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Filter by vibe
exports.filterByVibe = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const vibe = req.query.vibe;
    const templates = await templateService.filterByVibeService(vibe);
    res.status(200).json({
      success: true,
      status: "success",
      message: "Templates filtered by vibe",
      data: templates,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
