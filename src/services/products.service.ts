import { Products } from "../types/Products.types";
import apiController from "./api.service";

const controller = new AbortController();


const getProducts = async () : Promise<Products[]> => {
    return await apiController.get('/react-store-products',{ signal: controller.signal});
  }


  export const ProductsService = {
    getProducts,
  }
  