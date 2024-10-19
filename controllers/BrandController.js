import BrandService from "../services/BrandService.js";

class BrandController {
  static async getBrand(req, res) {
    const { error, data } = await BrandService.getBrand();
    if (error) return res.status(400).json(data);
    return res.status(200).json(data);
  }

  static async getBrandId(req, res) {
    const { id } = req.params;
    const { error, data } = await BrandService.getBrandById(id);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async addBrand(req, res) {
    const body = req.body;
    const { error, data } = await BrandService.addbrand(body);
    if (error) return res.status(400).json(data);

    return res.status(201).json(data);
  }

  static async updateBrand(req, res) {
    const { id } = req.params;
    const body = req.body;
    const { error, data } = await BrandService.updateBrand({ ...body, id });
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }

  static async deleteBrand(req, res) {
    const { id } = req.params;
    const { error, data } = await BrandService.deleteBrand(id);
    if (error) return res.status(400).json(data);

    return res.status(200).json(data);
  }
}

export default BrandController;
