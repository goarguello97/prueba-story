import { Brand, Product } from "../models/index.js";

class ProductService {
  static async getProducts() {
    try {
      const response = await Product.findAll({
        include: { model: Brand, as: "brand" },
      });
      return { error: false, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async getProductById(id) {
    try {
      const response = await Product.findByPk(id, {
        include: { model: Brand, as: "brand" },
      });
      return { error: false, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async addProduct(data) {
    try {
      const brand = await Brand.findByPk(data.brand_id);
      const product = await Product.create({ ...data, brand_id: brand.id });
      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async updateProduct(data) {
    const { id } = data;
    try {
      const product = await Product.findByPk(id, {
        include: { model: Brand, as: "brand" },
      });

      if (data.name) product.name = data.name;
      if (data.description) product.description = data.description;
      if (data.price) product.price = data.price;
      if (data.image_url) product.image_url = data.image_url;
      if (data.brand_id) {
        const brand = await Brand.findByPk(data.brand_id);
        if (brand) await product.setBrand(brand);
      }

      await product.save();

      const productUpdated = await Product.findByPk(id, {
        include: { model: Brand, as: "brand" },
      });
      return { error: false, data: productUpdated };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async deleteProduct(id) {
    try {
      const response = await Product.destroy({ where: { id } });
      return { error: false, data: { message: "Product delete success." } };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

export default ProductService;
