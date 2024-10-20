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
      const brand = await Brand.findByPk(id, {
        include: { model: Product, as: "products" },
      });
      if (!brand) throw new Error("Brand not found");

      return { error: false, data: brand };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async addbrand(data) {
    try {
      const brand = await Brand.findOne({ where: { name: data.name } });
      if (brand) throw new Error("Brand already exist");

      const response = await Brand.create(data);
      return { error: false, data: response };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async updateBrand(data) {
    const { id } = data;
    try {
      const brand = await Brand.findByPk(id, {
        include: { model: Product, as: "products" },
      });

      if (!brand) throw new Error("Brand not found");

      if (data.name) brand.name = data.name;
      if (data.logo_url) brand.description = data.logo_url;
      await brand.save();

      const brandUpdated = await Brand.findByPk(id, {
        include: { model: Product, as: "products" },
      });

      return { error: false, data: brandUpdated };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }

  static async deleteBrand(id) {
    try {
      const brand = await Brand.findByPk(id);

      if (!brand) throw new Error("Brand not found");

      const response = await Brand.destroy({ where: { id } });
      return { error: false, data: { message: "Brand delete success." } };
    } catch (error) {
      return { error: true, data: { message: error.message } };
    }
  }
}

export default BrandService;
