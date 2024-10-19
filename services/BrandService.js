import Brand from "../models/Brand.js";
import Product from "../models/Product.js";

class BrandService {
  static async getBrand() {
    try {
      const response = await Brand.findAll({
        include: { model: Product, as: "products" },
      });
      return { error: true, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getBrandById(id) {
    try {
      const response = await Brand.findByPk(id, {
        include: { model: Product, as: "products" },
      });
      return { error: true, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async addbrand(data) {
    try {
      const response = await Brand.create(data);
      return { error: true, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async updateBrand(data) {
    const { id, body } = data;
    try {
      const brand = await Brand.findByPk(id);
      brand = body;
      await brand.save();
      return { error: true, data: brand };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async deleteBrand(id) {
    try {
      const response = await Brand.destroy({ where: { id } });
      return { error: true, data: { message: "Brand delete success." } };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

export default BrandService;
