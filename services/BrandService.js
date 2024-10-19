import { Brand, Product } from "../models/index.js";

class BrandService {
  static async getBrand() {
    try {
      const response = await Brand.findAll({
        include: { model: Product, as: "products" },
      });
      return { error: false, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getBrandById(id) {
    try {
      const response = await Brand.findByPk(id, {
        include: { model: Product, as: "products" },
      });
      return { error: false, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async addbrand(data) {
    try {
      const response = await Brand.create(data);
      return { error: false, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async updateBrand(data) {
    const { id } = data;
    try {
      const brand = await Brand.findByPk(id, {
        include: { model: Product, as: "products" },
      });

      if (data.name) brand.name = data.name;
      if (data.logo_url) brand.description = data.logo_url;
      await brand.save();

      const brandUpdated = await Brand.findByPk(id, {
        include: { model: Product, as: "products" },
      });

      return { error: false, data: brandUpdated };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async deleteBrand(id) {
    try {
      const response = await Brand.destroy({ where: { id } });
      return { error: false, data: { message: "Brand delete success." } };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

export default BrandService;
