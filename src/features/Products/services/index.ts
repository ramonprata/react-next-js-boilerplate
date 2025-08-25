import mappers from "../utils/mappers";
import { ProductsManager } from "./ProductsManager";
import { ProductsRepository } from "./ProductsRepository";
import cmsInstance from "@/src/shared/api/cms/CMSApi";

const productsRepository = new ProductsRepository(cmsInstance);
const productsManager = new ProductsManager(productsRepository, mappers);

export default productsManager;
