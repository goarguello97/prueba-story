import Brand from "./Brand.js";
import Product from "./Product.js";
import User from "./User.js";

Brand.hasMany(Product, { foreignKey: "brand_id", as: "products" });
Product.belongsTo(Brand, { foreignKey: "brand_id", as: "brand" });

export { Brand, Product, User };
