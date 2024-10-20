import bcrypt from "bcrypt";
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class User extends Model {
  hash(password, salt) {
    return bcrypt.hashSync(password, salt);
  }

  validatePassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.ENUM("USER", "ADMIN"),
      allowNull: false,
      defaultValue: "USER",
    },
  },
  { sequelize, modelName: "user" }
);

User.beforeCreate((user) => {
  const hash = user.hash(user.password, bcrypt.genSaltSync(10));
  return (user.password = hash);
});

export default User;
