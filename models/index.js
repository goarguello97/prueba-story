import Brand from "./Brand.js";
import Product from "./Product.js";

Brand.hasMany(Product, { foreignKey: "brandId" });
Product.belongsTo(Brand, { foreignKey: "brandId" });

export { Brand, Product };
