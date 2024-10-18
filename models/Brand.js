import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Brand extends Model {}

Brand.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    logo_url: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "brand" }
);

export default Brand;
