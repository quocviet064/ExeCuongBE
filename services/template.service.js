const Template = require("../model/Template");
const Products = require("../model/Products");

exports.getAllTemplatesService = async () => {
    const templates = await Template.find().populate("plants");
    return templates;
  };

// create Template service
exports.createTemplateService = async (data) => {
  const plants = await Promise.all(data.plants.map(id => Products.findById(id)));
  const totalPrice = plants.reduce((acc, plant) => acc + plant.price, 0);
  const template = new Template({
    ...data,
    price: totalPrice,
  });
  template.plants = plants;
  await template.save();
  return template;
  };

// create all product service
exports.addAllProductService = async (data) => {
  await Product.deleteMany();
  const products = await Product.insertMany(data);
  for (const product of products) {
    await Brand.findByIdAndUpdate(product.brand.id, {
      $push: { products: product._id },
    });
    await Category.findByIdAndUpdate(product.category.id, {
      $push: { products: product._id },
    });
  }
  return products;
};


// get product data
exports.getProductService = async (id) => {
  const product = await Product.findById(id).populate({
    path: "reviews",
    populate: { path: "userId", select: "name email imageURL" },
  });
  return product;
};

// get product data
exports.getRelatedProductService = async (productId) => {
  const currentProduct = await Product.findById(productId);

  const relatedProducts = await Product.find({
    "category.name": currentProduct.category.name,
    _id: { $ne: productId }, // Exclude the current product ID
  });
  return relatedProducts;
};

// Update template service
exports.updateTemplateService = async (id, data) => {
  const template = await Template.findById(id);
  if (!template) {
    throw new Error("Template not found");
  }
  template.plants = await Promise.all(data.plants.map(id => Products.findById(id)));
  Object.assign(template, data);
  // if (data.plants) {
  //   template.plants = await Promise.all(data.plants.map(id => Product.findById(id)));
  // }
  await template.save();
  return template;
};

exports.deleteTemplateService = async (id) => {
  await Template.findByIdAndDelete(id);
};

exports.GetTemplateById = async (id) => {
  return Template.findById(id).populate("plants");
};


// update a product
exports.updateProductService = async (id, currProduct) => {
  // console.log('currProduct',currProduct)
  const product = await Product.findById(id);
  if (product) {
    product.title = currProduct.title;
    product.brand.name = currProduct.brand.name;
    product.brand.id = currProduct.brand.id;
    product.category.name = currProduct.category.name;
    product.category.id = currProduct.category.id;
    product.sku = currProduct.sku;
    product.img = currProduct.img;
    product.slug = currProduct.slug;
    product.unit = currProduct.unit;
    product.imageURLs = currProduct.imageURLs;
    product.tags = currProduct.tags;
    product.parent = currProduct.parent;
    product.children = currProduct.children;
    product.price = currProduct.price;
    product.discount = currProduct.discount;
    product.quantity = currProduct.quantity;
    product.status = currProduct.status;
    product.productType = currProduct.productType;
    product.description = currProduct.description;
    product.additionalInformation = currProduct.additionalInformation;
    product.offerDate.startDate = currProduct.offerDate.startDate;
    product.offerDate.endDate = currProduct.offerDate.endDate;

    await product.save();
  }

  return product;
};



// get Reviews Products
exports.getReviewsProducts = async () => {
  const result = await Product.find({
    reviews: { $exists: true, $ne: [] },
  })
    .populate({
      path: "reviews",
      populate: { path: "userId", select: "name email imageURL" },
    });

  const products = result.filter(p => p.reviews.length > 0)

  return products;
};

// get Reviews Products
exports.getStockOutProducts = async () => {
  const result = await Product.find({ status: "out-of-stock" }).sort({ createdAt: -1 })
  return result;
};

// get Reviews Products
exports.deleteProduct = async (id) => {
  const result = await Product.findByIdAndDelete(id)
  return result;
};

// / Filter by price
exports.filterByPriceService = async (price1, price2) => {
  const templates = await Template.find({
    price: { $gte: price1, $lte: price2 },
  });
  return templates;
};

// Filter by area
exports.filterByAreaService = async (area1, area2) => {
  const templates = await Template.find({
    price: { $gte: area1, $lte: area2 },
  });
  return templates;
};

// Filter by location type
exports.filterByLocationTypeService = async (locationType) => {

  const templates = await Template.find({
    locationType: { $regex: `^${locationType}$`, $options: 'i' },
  });
  return templates;
};

// Filter by vibe
exports.filterByVibeService = async (vibe) => {
  const templates = await Template.find({ vibe: vibe });
  return templates;
};