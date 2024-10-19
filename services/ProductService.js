import Brand from "../models/Brand.js";
import Product from "../models/Product.js";

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
      const response = await Product.create(data);
      return { error: true, data: response };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async updateProduct(data) {
    const { id, body } = data;
    try {
      const product = await Product.findByPk(id);
      product = body;
      await product.save();
      return { error: true, data: product };
    } catch (error) {
      return { error: true, data: error };
    }
  }

  static async deleteProduct(id) {
    try {
      const response = await Product.destroy({ where: { id } });
      return { error: true, data: { message: "Product delete success." } };
    } catch (error) {
      return { error: true, data: error };
    }
  }
}

export default ProductService;
