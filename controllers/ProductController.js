import ProductService from "../services/ProductService.js";

class ProductController {
  static async getBrand(req, res) {
    const { error, data } = ProductService.getBrand();
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async getBrandId(req, res) {
    const { id } = req.params;
    const { error, data } = ProductService.getBrandById(id);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async addBrand(req, res) {
    const body = req.body;
    const { error, data } = ProductService.addbrand(body);
    if (error) return res.status(400).json(data);

    return res.status(201).json(data);
  }

  static async updateBrand(req, res) {
    const { id } = req.params;
    const body = req.body;
    const { error, data } = ProductService.updateBrand({ ...body, id });
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async deleteBrand(req, res) {
    const { id } = req.params;
    const { error, data } = ProductService.deleteBrand(id);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }
}

export default ProductController;
