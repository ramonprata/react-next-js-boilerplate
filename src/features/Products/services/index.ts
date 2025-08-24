import { eComApi } from "@shared/api";
import mappers from "../utils/mappers";
import { ProductsManager } from "./ProductsManager";
import { ProductsRepository } from "./ProductsRepository";

const productsRepository = new ProductsRepository(eComApi);
const productsManager = new ProductsManager(productsRepository, mappers);

export default productsManager;
