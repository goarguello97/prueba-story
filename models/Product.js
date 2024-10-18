import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: { type: DataTypes.TEXT },
    image_url: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DOUBLE, allowNull: false },
    brand_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: { model: "brands", key: "id" },
    },
  },
  { sequelize, modelName: "product" }
);

export default Product;
