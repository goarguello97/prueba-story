import ProductService from "../services/ProductService.js";

class ProductController {
  static async getProduct(req, res) {
    const { error, data } = await ProductService.getProducts();
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async getProductId(req, res) {
    const { id } = req.params;
    const { error, data } = await ProductService.getProductById(id);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async addProduct(req, res) {
    const body = req.body;
    const { error, data } = await ProductService.addProduct(body);
    if (error) return res.status(400).json(data);

    return res.status(201).json(data);
  }

  static async updateProduct(req, res) {
    const { id } = req.params;
    const body = req.body;
    const { error, data } = await ProductService.updateProduct({ ...body, id });
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    const { error, data } = await ProductService.deleteProduct(id);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }
}

export default ProductController;
